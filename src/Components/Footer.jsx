import React from 'react'
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
   <>
    <hr className="border border-lightPrimary"/>
    <footer className='flex items-center justify-between bg-darkPrimary px-10 py-6'>
    <h1 className='text-lightPrimary text-xl font-black'>Minutize</h1>
    <p className='text-lightSecondary font-semibold'>Developed By <span className='text-lightPrimary'>Muthu Akalya</span></p>

    
</footer>
 
</>
  )
  }
export default Footer;