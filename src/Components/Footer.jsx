import React from 'react'
import logo from '../assets/nerd-cloud.png'

const Footer = () => {
  return (

<>
<footer className=' text-center border mt-10'>
    <div className='items-center  '>
        <div className='text-center flex '>
            <div className='text-center'>
                  <a href="/">

      <img className="text-white text-2xl font-semibold  justify-start m-5 p-5 mx-10 " src={logo} />

                  </a>
            </div>
            <div className='items-center mx-auto justify-center m-5 p-5 flex flex-col space-y-2'>
    <a className="text-white hover:text-green-400" href="/">Home</a>
    <a className="text-white hover:text-green-400" href="/">About</a>
    <a className="text-white hover:text-green-400" href="/">Blog</a>
    <a className="text-white hover:text-green-400" href="/">Pricing</a>
    <a className="text-white hover:text-green-400" href="/">Handbook</a>
</div>

<div className='items-center mx-auto justify-center m-5 p-5 flex flex-col space-y-2'>
    <a className="text-white hover:text-green-400" href="/">Contact</a>
    <a className="text-white hover:text-green-400" href="/">Privacy Policy</a>
    <a className="text-white hover:text-green-400" href="/">Terms of Service</a>
    <a className="text-white hover:text-green-400" href="/">FAQ</a>
</div>

<div className='items-center mx-auto justify-center m-5 p-5 flex flex-col space-y-2'>
    <a className="text-white hover:text-green-400" href="/">PL 178 Helsinki, 00101 Finland</a>
    <a className="text-white hover:text-green-400" href="/">Nerdcloud Ltd</a>
    <a className="text-white hover:text-green-400" href="/">info@nerdcloud.co</a>
    <a className="text-white hover:text-green-400" href="/">Nerdcloud</a>
</div>
                </div>

                <div>
                    <div className='flex items-center text-center mx-auto mt-10  '>
                    <h5 className="no-margin text-center m-20 text-3xl font-bold  my-auto ">Get the latest update. <br/> Subscribe to our newsletter</h5>
                    <div className=''>
                        <div className=' '>
                        <form id="wf-form-Footer-Subscribe-Form" name="wf-form-Footer-Subscribe-Form" data-name="Footer Subscribe Form" method="get" data-wf-page-id="64b6e1e99f95f4df17a72cb3" data-wf-element-id="c676fd4c-b079-431d-2c2b-e1d8464c797d" aria-label="Footer Subscribe Form"><div class="footer-form-subscribe"><input type="email" className="form-input footer-subscribe w-input w-[300px] h-[50px] rounded bg-gray-800 text-white  p-5" maxlength="256" name="email-2" data-name="Email 2" placeholder="Enter Email" required=""  /><input type="submit" value="Submit" data-wait="Please wait..." className="button-primary-2 button-subscribe w-button bg-blue-600 text-white w-[150px] h-[50px] rounded " fdprocessedid="yhf3fk" /></div></form>
                        </div>
                    </div>
                    </div>

                   
                </div>
            </div>

</footer>

</>
    )
}

export default Footer