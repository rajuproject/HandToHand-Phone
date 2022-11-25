import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const Catagories = () => {
    const [iphones, setIphones] = useState([])





    useEffect(() => {
        fetch('http://localhost:5000/catagories')
            .then(res => res.json())
            .then(data => {

                setIphones(data)
            })
            .catch((err) => toast.error(err.message))

    }, []);

    return (
        <div>
            <div className=''>
                <div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
                    {
                        iphones.map((iphone) => {
                            return (
                                <div>
                                    <div className="card w-84  bg-base-100 shadow-xl">
                                        <figure><img src={iphone.image} alt="Shoes" /></figure>
                                        <div className="card-body">
                                            <h2 className="card-title"></h2>
                                            <p></p>
                                            <div className="card-actions justify-end">
                                                <button className="btn btn-primary">Buy Now</button>
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
    );
};

export default Catagories;