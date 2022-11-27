import React, { useContext, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import PrimaryButton from '../Components/Button/PrimaryButton';
import { AuthContext } from '../contexts/AuthProvider';





const AddedProducts = () => {

// const [image, setImage] = useState([])


    const { user } = useContext(AuthContext)

    console.log(user.email)

    const navigate = useNavigate()
    const location = useLocation();
    const from = location.state?.from?.pathName || '/'
  
    const handleSubmit = event => {
      event.preventDefault()


      const productName = event.target.productName.value
      
      const used = event.target.used.value
      const sellerName = event.target.sellerName.value
      const productOldPrice = event.target.productOldPrice.value
      const productNewPrice = event.target.productNewPrice.value
      const year = event.target.year.value
      const location = event.target.location.value
      const description = event.target.description.value
      const mobileNumber = event.target.mobileNumber.value
      const productCatagories = event.target.productCatagories.value
      const productQuality = event.target.productQuality.value

        
            const image = event.target.image.files[0]

  
      const formData = new FormData()

    
      formData.append('image', image)

      const url = "https://api.imgbb.com/1/upload?key=318e70ac0272ed2d55398b7d3fec0d3e"

    
      fetch(url,{
        method: 'POST',
        body: formData
      }).then(res => res.json())
      .then(ImageData => {

        console.log(ImageData.data.display_url)
        
    //   setImage (data)


        const addProduct ={
            image: ImageData.data.display_url,
            name:productCatagories,
            sellerName:sellerName,
            orginalPrice:productOldPrice,
            sellPrice:productNewPrice,
            location:location,
            used:used,
            itemName:productName,
            time:year,
            description:description,
            mobileNumber:mobileNumber,
            productQuality:productQuality,
            email:user.email


        }
        console.log(addProduct)


        fetch('http://localhost:5000/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json', 
              
            },
            body: JSON.stringify(addProduct)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            toast.success('Your Product is added successfully');
            navigate('/dashboard/myProducts')
        })


 
      })



    }
    return (
        <div>
                 <form onSubmit={handleSubmit}
          noValidate=''
          action=''
          className='space-y-12 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4 w-96'>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Product Name
              </label>
              <input
                type='text'
                name='productName'
                id='productName'
                required
                placeholder='Enter Your Product Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='name' className='block mb-2 text-sm'>
                Seller Name
              </label>
              <input
                type='text'
                name='sellerName'
                id='productName'
                required
                placeholder='Enter Your Product Name Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Product Old Price
              </label>
              <input
                type='number'
                name='productOldPrice'
                id='productPrice'
                required
                placeholder='Enter Your Product Price Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Product New Price
              </label>
              <input
                type='number'
                name='productNewPrice'
                id='productPrice'
                required
                placeholder='Enter Your Product Price Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Year of the Purchase
              </label>
              <input
                type='number'
                name='year'
                id='productPrice'
                required
                placeholder='Enter Your Product Price Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Year of the Used
              </label>
              <input
                type='text'
                name='used'
                id='productPrice'
                required
                placeholder='Enter Your Product Price Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='location' className='block mb-2 text-sm'>
               Location
              </label>
              <input
                type='text'
                name='location'
                id='location'
                required
                placeholder='Enter Your Location Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='description' className='block mb-2 text-sm'>
               Description
              </label>
              <input
                type='text'
                name='description'
                id='description'
                required
                placeholder='Enter Your description Here'
                className='w-full px-3 py-2  border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <label htmlFor='number' className='block mb-2 text-sm'>
                Mobile Number
              </label>
              <input
                type='number'
                name='mobileNumber'
                id='mobileNumber'
                required
                placeholder='Enter Your Mobile Number Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
            <label >
                Product Catagorie
              </label>
              <select name='productCatagories' className="select w-full max-w-xs">
                <option>Iphone catagories</option>
                <option>Samsung catagories</option>
                <option>Xaomi catagories</option>
        
              </select>
            </div>
            <div>
            <label >
                Product Quality
              </label>
              <select name='productQuality' className="select w-full max-w-xs">
                <option>excellent</option>
                <option>good</option>
                <option>fair</option>
        
              </select>
            </div>

            <div>
              <label htmlFor='image' className='block mb-2 text-sm'>
                Select Image:
              </label>
              <input
                type='file'
                id='image'
                name='image'
                accept='image/*'
                required
              />
            </div>
          </div>
          <div className='space-y-2 w-96'>
            <div>
              <PrimaryButton
                type='submit'
                classes='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
              >
                Add Product
              </PrimaryButton>
            </div>
          </div>
        </form>
        </div>
    );
};

export default AddedProducts;