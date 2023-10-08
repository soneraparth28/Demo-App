import React from 'react'
import feature1 from '../assets/feature1.svg'
import chart from '../assets/chart.svg'
import cycle from '../assets/cycle.svg'


const About = () => {
  return (

    <section className='feature relative overflow-hidden'>
<div className="container text-center w-container">

        <div className='flex'>
            <h1 className=' font-bold  text-8xl   color-white m-6 p-4'>90% of our <br/> customers start by <br/> scaling front-end <br/> development</h1>
  <a className="bg-green-500 hover:bg-green-800 text-black hover:text-white m-5 p-4 rounded cursor-pointer  h-[50px]">Insights from our experts</a>
</div>
            <div>
              <div className='w-layout-grid  flex w-[1000px] mx-auto'>
                <div className="feature-item  flex border">
                  <div className="feature-image">
                    <img src={feature1} alt="" />
                  </div>

                  <div className="feature-content inline w-[800px] h-[500px] my-auto bg-gray-800">
                    <h3 className='font-extrabold text-6xl my-auto mt-20 m-5'>Easy to use </h3>
                   <p className='m-10 text-white'> NerdCloud's dynamic service adjusts to your technological requirements and budget, providing seamless integration with your existing environment. Onboarding of handpicked, senior-level developers is expertly managed, ensuring time-efficient and hassle-free collaboration.</p>
                   
                  </div>
                </div>
</div>
                <div className='border h-[600px] w-[400px] m-12   '>

                  <div className="feature-image2"><br/>
                    <img src={chart} alt="chartimage" className='w-[300px] m-10 ' />
                  </div>
                  <div className="feature-content2 w-[300px] m-10">
                  <h3 className="heading-h3 text-5xl font-bold m-10">Flexible</h3>
                  <p className='font-bold'>Depending on the subscription, we offer a 30-day risk-free cancellation policy and a limited roll-over of unused hours. Recognizing the fluctuating nature of development needs, we provide a fast ramp-up after low activity periods, ensuring unmatched flexibility.</p>

                  </div>
                </div>


<div className='border w-[400px] h-[600px] m-12'>
  <div className='feature-image3'>
    <img src={cycle} alt="cycle" className='w-[300px] m-10' />
  </div>
  <div className="feature-content2 w-[300px] m-10">
                  <h3 className="heading-h3 text-5xl font-bold m-10">Reliable</h3>
                  <p className='font-bold'>We pledge to consistently deliver high-quality, reliable code that aligns with your specifications, with our QA team scrutinizing every detail for optimal quality. With a 2-day development SLA, we ensure swift turnaround times without sacrificing quality.</p>

                  </div>
</div>

              </div>
              </div>

              <div className='items-center mx-auto text-center'>
                <h1 className='text-5xl text-center font-bold'>Seamlessly adapting to your Tech Environment</h1>
                <button className='bg-blue-500 text-white p-3 m-3 rounded-md hover:bg-gray-800 hover:text-green-400 items-center mx-auto justify-center'>Learn More</button>

              </div>




    </section>
  )
}

export default About
