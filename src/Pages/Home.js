import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import PrimaryButton from '../Components/Button/PrimaryButton';



const Home = () => {

  const Navigate = useNavigate()
  const [catagories, setCatagories] = useState([])


  console.log(catagories._id)
  

  useEffect(() => {
    fetch('http://localhost:5000/catagories')
      .then(res => res.json())
      .then(data => {
       
          setCatagories(data)
          
  
      })
      .catch((err) => toast.error(err.message))

  }, []);

//   const handleDetails = (id) => {
//     Navigate(`/iphone/${id}`)
// }




  return (
    <div className='lg:w-4/5 my-10 mx-auto'>
      <div >
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <img src="https://s3b.cashify.in/gpro/uploads/2022/06/08120705/Best-Second-Hand-Mobile-Phone-You-Can-Buy-Right-Now.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">❮</a>
              <a href="#slide2" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src="https://s3b.cashify.in/gpro/uploads/2022/06/06130554/Best-Second-Hand-4G-Mobile-Phone-In-India-1.jpg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">❮</a>
              <a href="#slide3" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src="https://images.livemint.com/img/2022/03/10/1600x900/Refurbished_iPhone_1646915474880_1646915484097.png" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">❮</a>
              <a href="#slide4" className="btn btn-circle">❯</a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src="https://images.hindustantimes.com/tech/img/2022/05/30/960x540/Web_capture_30-5-2022_18856_www.flipkart.com_1653914439507_1653914463178.jpeg" className="w-full" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">❮</a>
              <a href="#slide1" className="btn btn-circle">❯</a>
            </div>
          </div>
        </div>
      </div>
      <div>

<div className=' my-10'>
<div className=" gap-10 mx-auto px-4 grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3 ">
{
 catagories.map((catagorie)=>{
   return(
     <div>
       <div className="card w-84  bg-base-100 shadow-xl">
       <figure><img className='h-48' src={catagorie.image} alt="Shoes" /></figure>
       <div className="card-body">
         <h2 className="card-title">{catagorie.name}</h2>
         <p>{catagorie.details}</p>
         <div className="card-actions mx-auto">
        <Link to={`/iphone/${catagorie._id}`}><PrimaryButton>Sell All Product</PrimaryButton></Link>
           
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
      <div>
        <div className="hero min-h-screen bg-base-200  my-10">
          <div className="hero-content flex-col lg:flex-row">
            <img src="https://www.bestmobile.pk/addpost_images/samsung-galaxy-s6edge-golden-colour-sl4w8.webp" className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">New Arrivel Here!</h1>
              <p className="py-6">Description:
                PTA approved
                3/32
                only 2 scratches (lines) on right border
                handfree port is non functional u can use bluetooth instead not a big deal
                good battery timing
                All other things are working effectively
                only set and 2 back covers
                urgent sale.</p>
              <PrimaryButton>Book Now</PrimaryButton>
            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Home
