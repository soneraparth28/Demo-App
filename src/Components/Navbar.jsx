import React from "react";
import logo from '../assets/nerd-cloud.png'
import Button from "./Button";


export default function Navbar(){
    return(
        <>

   


      <div className="   flex items-center justify-center">
      <img className="text-white text-2xl font-semibold  justify-start m-5 p-5 mx-10 " src={logo} />

        <ul className=" bg-gray-800 mx-10 px-10 p-5  flex space-x-6 border rounded-md  ">
          <li><a href="#" className="text-white hover:text-green-400">Home</a></li>
          <li><a href="#" className="text-white hover:text-green-400">About</a></li>
          <li><a href="#" className="text-white hover:text-green-400">Pricing</a></li>
          <li><a href="#" className="text-white hover:text-green-400">Blog</a></li>
          <li><a href="#" className="text-white hover:text-green-400">FAQ</a></li>

          <li><a href="#" className="text-white hover:text-green-400">Contact</a></li>
        </ul>
        <Button/>
      </div>
        </>
    )
}