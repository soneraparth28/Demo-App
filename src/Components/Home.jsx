import React from 'react'
import image from '../assets/image.png'

const Home = () => {
  return (
    <>
    <div>


        <h1 className='font-bold text-7xl mx-auto justify-center items-center px-auto text-center m-10 p-10'>Rethink offshore outsourcing.<br/>
We made it better.</h1>

<p className='text-center mb-5 font-bold'>A radically better way to leverage offshore outsourcing in <br/> software development</p>

    <div className="flex items-center justify-center">
  <button className="bg-blue-500 hover:bg-gray-800 hover:text-green-400 text-white font-bold py-2 px-4 rounded">
    Pricing
  </button>


</div>
</div>

<img className='w-[1000px] items-center justify-center mx-auto m-10 p-10' src={image} alt="image" />

</>
  )
}

export default Home