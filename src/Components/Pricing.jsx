import React from 'react'
import Card from './Card'

const Pricing = () => {
  return (
    <>
    
    <section>

        <div className="heading text-7xl font-bold text-center text-white mt-20">Ready to get started?</div>
        <p className='text-white text-center mt-10 text-3xl'>Choose your plan now</p>


        <div className="layout-pricing">
            <div className="cards">
                <div className="pricing-header">

<Card/>
<Card/>
<Card/>
                </div>
            </div>
        </div>

        <div className="layout items-center justify-center text-center">
            <h3 className="heading-4 mt-20 text-center font-bold text-4xl">Can't find the perfect fit?</h3>
            <p className='text-center text-white text-2xl m-5'>Don't worry! Get in touch with our team today, and we'll work together to create a solution to fit your specific needs.</p>
            <button className='bg-blue-500 text-white p-3 m-5 rounded-md hover:bg-gray-800 hover:text-green-400 items-center mx-auto justify-center '>Learn More</button>

        </div>

        <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Elastic development solutions</h2>
        <p className="mt-2 text-white items-start">Our service subscriptions provide various means to scale development, offering the utmost flexibility to match your fluctuating needs. We can pause and ramp up development according to your velocity demands</p>

       

       

        
      </div>
    </div>
   
    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Dedicated QA team</h2>
        <p className="mt-2 text-white items-start">We have dedicated quality assurance team based in Finland for every client. They handle all technical tasks, break down user stories, manage your development pipeline, and serve as your first point of contact.</p>

       

       

        
      </div>
    </div>
    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Complimentary onboarding</h2>
        <p className="mt-2 text-white items-start">Enjoy a smooth start with our complimentary onboarding. Our QA team will manage the onboarding of developers, development coordination, and quality assurance, ensuring a seamless transition.</p>

       

       

        
      </div>
    </div>
    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 mx-auto text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Real-time progress tracking</h2>
        <p className="mt-2 text-white items-start">With our synced Kanban, you can track the progress of your front-end development in real time. Stay updated on the status of your tasks at any moment.</p>

       

       

        
      </div>
    </div>
    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Senior developers at your service</h2>
        <p className="mt-2 text-white items-start">We only work with senior developers and hand-pick the perfect match for your project. Our partners include more than 70 vetted companies, ensuring a wide array of front-end coding languages, frameworks, and libraries</p>

       

       

        
      </div>
    </div>

    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Swift and quality deliverables</h2>
        <p className="mt-2 text-white items-start">Our service level agreement (SLA) stands at 2 days. We guarantee extremely fast delivery without compromising quality, thanks to our developers' proficiency in using tools like GitHub's Copilot, cloud staging and testing.</p>

       

       

        
      </div>
    </div>

    <div className=" rounded-lg shadow-lg w-[400px] h-[300px] m-5 inline-flex text-center items-center bg-[#051023] text-white ">
      <div className="px-6 py-8">
        <h2 className="text-2xl font-semibold text-white">Wide range of development tasks, but not all</h2>
        <p className="mt-2 text-white items-start">We handle many types of development tasks including building user interfaces, integrations, software maintenance, refactoring, bug fixing, and more. Simply assign tasks in your project management tool and our developers will get to work.</p>

       

       

        
      </div>
    </div>

   
    </section>
    
    </>
  )
}

export default Pricing