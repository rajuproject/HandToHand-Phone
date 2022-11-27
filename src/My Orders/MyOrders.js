import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';

const MyOrders = () => {

    const {user} = useContext(AuthContext)
    const{email} = user

    const [myProducts, setMyProduct] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/bookings/${email}`)
            .then(res => res.json())
            .then(data => {
                
                console.log(data)
                setMyProduct(data)
            })
            .catch((err) => toast.error(err.message))
  
    }, [email]);
    return (
        <div>
        <div className='container mx-auto my-10'>
            <div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
                {
                    myProducts.map((myProduct) => {
                        return (
                            <div>
                                <div className="card  bg-base-100 shadow-xl">
                                    <div className="card-body w-84 h-96">
                                        <h2 className="card-title">Name: {myProduct.name}</h2>
                                        <h2 className="card-title"> Name: {myProduct.itemName}</h2>
                                 
                                        <h2 className="card-title">Location: {myProduct.location}</h2>
                                        <h2 className="card-title">Price: {myProduct.price}</h2>
                                        <h2 className="card-title">: {myProduct.used}</h2>
                                   
                                        <h2 className="card-title">Description: {myProduct.description}</h2>
                                        <h2 className="card-title">Mobile: {myProduct.phone}</h2>
                              
                                        
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

export default MyOrders;