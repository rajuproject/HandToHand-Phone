import React, { useContext, useEffect, useState } from 'react';
import { json, Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Advertised from '../Advertised/Advertised';
import PrimaryButton from '../Components/Button/PrimaryButton';
import { AuthContext } from '../contexts/AuthProvider';

const MyProducts = () => {


    const router = useParams();



    const [advertised, setAdvertised ] = useState([])



    const {name, sellPrice,image,sellerName, orginalPrice, location, used, time, description, mobileNumber, productQuality} = advertised


    const advertise = true


   
    // fetch('http://localhost:5000/advertised', {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json', 
          
    //     },
    //     body: JSON.stringify(advertise)
    // })
    // .then(res => res.json())
    // .then(data =>{
    //     console.log(data);
        
       
    // })



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

    // advertise get 




    
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



    
    const handleAdvertised = id =>{


        fetch(`http://localhost:5000/myProduct/${id}`, {
            method: "PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify ({advertise: 'advertise'})
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
                                        <h2 className="card-title">status: {myProduct.status}</h2>

                                        <div className='flex justify-between'>
                                        <button onClick={()=>handleDelete(myProduct._id)} className='btn btn-accent'>Delete</button>
                                        {/* onSubmit={handleAdvertised} */}
{/* 
                                        {
                                            myProduct.status === 'Available'?   <> <button onClick={()=> setAdvertised(myProduct)} className='btn btn-accent'>Advertised</button> </>: 
                                            <> <button className='btn btn-accent' disabled>Advertised</button> </>
                                            
                                        }

                                        <button onClick={()=> handleAdvertised(myProduct._id)} className='btn btn-accent'>advertise</button>
                                         */}

                                        </div>
                                    
                                        <p></p>
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