import { useState } from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Card from './Components/Card'
import Feature from './Components/Feature'
import Pricing from './Components/Pricing'
import Details from './Components/Details'
import Quotes from './Components/Quotes'
import Footer from './Components/Footer'

function App() {



  return (
    <>

    <div className='heading'>
<Navbar/>      
<Home/>
<About/>
<Card/>
<Feature/>
<Pricing/>
<Details/>
<Quotes/>
<Footer/>

    </div>
      
    </>
  )
}

export default App
