import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
   
    <>
    <header className='flex items-center justify-between bg-darkPrimary px-10 py-6'>
        <Link to="/"><h1 className='text-lightPrimary text-xl font-black'>Minutize</h1></Link>
        

        <div className='flex space-x-5 items-center'> 
       <Link to="/login"> <button className='bg-lightSecondary px-5 py-2 text-sm font-semibold rounded-md'>Log-in</button></Link>
          <Link to="/signup">  <button className='bg-lightPrimary px-5 py-2 text-sm font-semibold rounded-md'>Sign-Up</button></Link>
           
        </div>
    </header>
     <hr className="border border-lightPrimary"/></>
    
  )
}

export default Header