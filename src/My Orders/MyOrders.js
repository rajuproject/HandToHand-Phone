import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';

const MyOrders = () => {

    const { user } = useContext(AuthContext)
    const { email } = user

    const [myProducts, setMyProduct] = useState([])

    useEffect(() => {
        fetch(`https://server-side-rajuproject.vercel.app/bookings/${email}`)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setMyProduct(data)
            })
            .catch((err) => toast.error(err.message))

    }, [email]);




    // const handleDelete = (id) => {
   
    //     fetch(`https://server-side-rajuproject.vercel.app/bookings/${id}`, {
    //         method: "DELETE",
    //     })
    //         .then(res => res.json())
    //         .then(data => {

    //             if (data.success) {
    //                 toast.success(data.message);
    //             } else {
    //                 toast.error(data.error);
    //             }
    //         }).catch(err => toast.error(err.message))
    // };



    return (
        <div>
            <p className='text-2xl '>My Orders</p>
            <div className='container mx-auto my-10'>
                <div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">

                    {
                        myProducts.map((myProduct) => { console.log(myProduct)

                            return (
                                <div>
                                    <div className="card  bg-base-100 shadow-xl">
                                    <figure><img  className=' h-48' src={myProduct.image} alt="Shoes" /></figure>
                                        <div className="card-body w-84 h-84">

                                            <h2 className="card-title">Name: {myProduct.name}</h2>
                                            <h2 className="card-title"> Catagorie: {myProduct.itemName}</h2>
                                           
                                            <h2 className="card-title">Price: {myProduct.price}</h2>
                                            
                                            
                                           


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