import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {
  return (
    <main className='h-screen'>
        <section class="bg-darkPrimary dark:bg-gray-900 h-screen flex justify-center items-center">
    <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div class="mr-auto place-self-center lg:col-span-7">
            <h1 class="max-w-2xl mb-4  font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white text-lightSecondary">Quickly write and Share Notes</h1>
            <p class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">With this meeting notes app you quickly write meeting notes and share the agenda with your team.</p>
          

           <div className='flex space-x-6'>
           <Link to="/viewminutes"><button className='bg-lightSecondary px-5 py-2 hover:font-semibold'>View minutes</button></Link>
           <Link to="/createminutes"> <button className='bg-lightPrimary px-5 py-2 hover:font-semibold'>Create new minutes </button></Link>
           </div>
           
        </div>
        {/* <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
      <img src="https://www.shutterstock.com/shutterstock/videos/17090095/thumb/9.jpg?ip=x480" alt="hero-section-image" />
        </div>                 */}
    </div>
</section>
    </main>
  )
}

export default HeroSection