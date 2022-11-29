import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../contexts/AuthProvider';
const Modal = ({details}) => {

    const {name, sellPrice,image,sellerName, orginalPrice, location, used, time, description, mobileNumber, productQuality} = details
    const {user} = useContext(AuthContext)
    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            email: user?.email,
            name:user?.displayName,
            itemName: name,
            price:sellPrice,
            phone,
            location,
            image
         
        }
        fetch('https://server-side-rajuproject.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data =>{
            console.log(data)

            if(data.acknowledged){
                toast.success(' Your item is booked')
            }
            else{
                toast.error(data.message)
            }
        })
    }
 const handleUpdate = id =>{
    const sold = {
        image,
        name, 
        sellerName, orginalPrice, sellPrice, location, used, time,
        description, mobileNumber, productQuality,
        status:'sold'

    }


    fetch(`https://server-side-rajuproject.vercel.app/myProduct/${id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(sold)
      }).then(res => res.json())
      .then(data => {
        console.log(data)
      })
      .catch(err => toast.error(err.message))

    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <form onSubmit={handleSubmit} className='grid grid-cols-1'>
                   
                        <input name='name' defaultValue={user?.displayName}  disabled type="text" placeholder="name" className="input  my-2" />
                        <input name='name' defaultValue={sellPrice}  disabled type="text" placeholder="name" className="input  my-2" />
                        <input name='name' defaultValue={name}  disabled type="text" placeholder="name" className="input  my-2" />
                        <input name='email' defaultValue={user?.email} disabled type="email" placeholder="email" className="input my-2" />
                        <input name='phone' type="number" required placeholder="phone-number" className="input  my-2" />
                        <input name='location' type="text" required placeholder="Meet Location" className="input  my-2" />
                        <button type='submit' onClick={()=> handleUpdate(details._id) } value='Submit' className=" btn-accent input">Book now</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Modal