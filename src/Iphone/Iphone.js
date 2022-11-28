import React, { useEffect, useState } from 'react';
import {useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Modal from '../Modal/Modal';





const Iphone = () => {
   
    const router = useParams();
    const { id } = router;

    console.log(id)

    const [iphones, setIphones] = useState([])

    const [details, setDetails] = useState([])

    console.log(details)





    useEffect(() => {
        fetch(`http://localhost:5000/iphone/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIphones(data)
            })
            .catch((err) => toast.error(err.message))

    }, [id]);








    return (
        <div>
            <div>
            <div className='container mx-auto my-10'>
                <div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 ">
                    {
                        iphones.map((iphone) => { 
                            return (
                                <div>
                                    <div className="card  bg-base-100 shadow-xl">
                                        <figure><img  className=' h-48' src={iphone.image} alt="Shoes" /></figure>
                                        <div className="card-body w-84 ">
                                            <h2 className="card-title">Name: {iphone.name}</h2>
                                            <h2 className="card-title">Seller Name: {iphone.sellerName}</h2>
                                            <h2 className="card-title">Original Price: {iphone.orginalPrice}</h2>
                                            <h2 className="card-title">Sell Price: {iphone.sellPrice}</h2>
                                            <h2 className="card-title">Location: {iphone.location}</h2>
                                            <h2 className="card-title">Used Year: {iphone.used}</h2>
                                            <h2 className="card-title">Post Time: {iphone.time}</h2>
                                            <h2 className="card-title">Description: {iphone.description}</h2>
                                            <h2 className="card-title">Mobile Number: {iphone.mobileNumber}</h2>
                                            <h2 className="card-title">Product Quality: {iphone.productQuality}</h2>
                                            <p></p>
                                            <div className="card-actions mx-auto">
                                                
                                                <label htmlFor="booking-modal"className="btn btn-primary" onClick={()=>setDetails(iphone)}>Book Now</label>
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            </div>
        </div>
        <Modal
        details ={details}
        
        ></Modal>
        </div>
    );
};

export default Iphone;