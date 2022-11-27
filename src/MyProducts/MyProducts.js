import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';

const MyProducts = () => {

    const {user} = useContext(AuthContext)
    const{email} = user

    const [myProducts, setMyProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/myProduct/${email}`)
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                setMyProduct(data)
            })
            .catch((err) => toast.error(err.message))
  
    }, [email]);



    
    const handleDelete = (id) => {
   
        fetch(`http://localhost:5000/myProduct/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {

                if (data.success) {
                    toast.success(data.message);
                } else {
                    toast.error(data.error);
                }
            }).catch(err => toast.error(err.message))
    };



    return (
        <div>
        <div className='container mx-auto my-10'>
            <div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
                {
                    myProducts.map((myProduct) => {
                        return (
                            <div>
                                <div className="card  bg-base-100 shadow-xl">
                                    <figure><img  className=' h-48' src={myProduct.image} alt="Shoes" /></figure>
                                    <div className="card-body w-84 ">
                                        <h2 className="card-title">Name: {myProduct.name}</h2>
                                        <h2 className="card-title">Seller Name: {myProduct.sellerName}</h2>
                                        <h2 className="card-title">Original Price: {myProduct.orginalPrice}</h2>
                                        <h2 className="card-title">Sell Price: {myProduct.sellPrice}</h2>
                                        <h2 className="card-title">Location: {myProduct.location}</h2>
                                        <h2 className="card-title">Used Year: {myProduct.used}</h2>
                                        <h2 className="card-title">Post Time: {myProduct.time}</h2>
                                        <h2 className="card-title">Description: {myProduct.description}</h2>
                                        <h2 className="card-title">Mobile: {myProduct.mobileNumber}</h2>
                                        <h2 className="card-title">Product Quality: {myProduct.productQuality}</h2>
                                        <button onClick={()=>handleDelete(myProduct._id)} className='btn btn-accent'>Delete</button>
                                        
                                        <p></p>
                                        {/* <div className="card-actions mx-auto">
                                            
                                            <label htmlFor="booking-modal"className="btn btn-primary" onClick={()=>setDetails(iphone)}>Book Now</label>
                                            
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        )
                    }) 
                }
            </div>
        </div>
    </div>
    );
};

export default MyProducts;