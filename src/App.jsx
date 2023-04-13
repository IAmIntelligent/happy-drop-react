import { useState } from 'react'
import {Navbar,Carousel,About, ImageGallery, Testimonials, Contact, Footer} from '../src/index'
import image from "./assets/corner_leaves.jpg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App relative'>
      <div className={`absolute w-[400px] h-[400px] bg-[url(${image})]`}  ></div>
      <Navbar/>
      <Carousel/>
      <About/>
      <ImageGallery/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
