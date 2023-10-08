import React from 'react'
import featureimage from '../assets/feature-image.png'
// import QA from '../assets/qa.svg'

const Feature = () => {
  return (
    <>
    <section>
    <div>

  <h1 className='text-7xl font-bold text-center m-10'>Build Software with no limits</h1>
  <p className='font-bold text-center'>We integrate to your project for a smooth workflow. Just assign tasks and we’ll start building.</p>
</div>

<div className="container m-10 flex">
    <div className="">
        <h1 className='text-4xl text-white m-5 mt-20 font-bold'>Senior Developer</h1>
        <p className='w-[400px] m-5 text-white '>We lead the development process and the senior developers from our vetted partner companies. We always have one to three hand-picked  developers for each customer to ensure high quality and availability.</p>
        <img src={featureimage} alt="" />

        <div className="image">
        <button className='bg-blue-500 text-white p-3 m-3 rounded-md hover:bg-gray-800 hover:text-green-400'>Learn More</button>

        </div>
    </div>
    
</div>

<div className="container2 m-20 flex">
  <div className="qa">
{/*     <img src={QA} alt="" className='w-[400px] m-5 ' /> */}
  </div>
  <div className="content text-center">
    <h3 className='text-5xl font-bold justfy-center text-center mx-auto '>Dedicated QA Team</h3>
    <p className='w-[600px] m-10 text-2xl'>The production lead is your technical sherpa guiding the way. Team leads onboard developers and manage the development and quality assurance. The team lead is your team’s first point of contact, both are available on Slack.</p>
  </div>
</div>
</section>
</>
  )
}

export default Feature
