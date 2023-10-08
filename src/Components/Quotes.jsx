import React from 'react'
import image from '../assets/image.png'

const Quotes = () => {
  return (

<>

<section>

    <div className="container mt-20 items-center ">
        <div className="section-title text-center  mt-10">
        <h3 className='text-4xl text-white font-bold items-center text-center'>Achieving success with NerdCloud</h3>
        </div>
        <div className='text-center items-center'>
            <h4 className='w-[400px] text-start text-white font-bold mx-auto mt-10 '>"Working with NerdCloud has extended our team’s capacity and improved our ability to scale development significantly based on demand. NerdCloud has taken on many maintenance tasks from the product development pipeline, which has allowed the Jamix development team to focus on the core development of our main products."</h4>
        
        <div className='mt-10 items-start '>
        <h6 className="no-margin text-primary  text-2xl font-bold ">Antti Karjalainen</h6>
            <p className='text-white font-bold items-start mt-5'> Chief Product Officer</p>
            <p className='mt-3 text-lg'> Jamix </p>
        </div>
        </div>
    </div>

    <div className='text-center'>
        <h1 className='font-bold text-5xl text-center mt-20 pt-10' >Start Building Today </h1>
        <button className='bg-blue-500 text-white p-3 m-5 mt-10 rounded-md hover:bg-gray-800 hover:text-green-400'>Book a Meeting</button>

<img src={image} alt="" className='w-[800px] mx-auto' />
    </div>
</section>

</>

    )
}

export default Quotes