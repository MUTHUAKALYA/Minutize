import React from 'react'

const Header = () => {
  return (
   
    <header className='flex items-center justify-between bg-darkPrimary px-10 py-6'>
        <h1 className='text-lightPrimary text-xl font-black'>Minutize</h1>
        <ul className='flex space-x-8 text-lightSecondary font-bold text-lg'>
            <li>Home</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>

        <div className='flex space-x-5 items-center'> 
        <button className='bg-lightSecondary px-5 py-2 text-sm font-semibold rounded-md'>Log-in</button>
            <button className='bg-lightPrimary px-5 py-2 text-sm font-semibold rounded-md'>Sign-Up</button>
           
        </div>
    </header>
    
  )
}

export default Header