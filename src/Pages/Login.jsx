import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";





const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [value,setValue] = useState({})
  const validSubmit = (data) => {
    console.log(data);
    setValue(data)
    console.log(data)
  };

 
  signInWithEmailAndPassword(auth, value.email, value.password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  
 

 

  return (
    <div className="bg-darkPrimary h-screen flex items-center justify-center">
      <div className="bg-lightSecondary py-16 px-10 max-w-2xl mx-auto rounded-lg">
        <h1 className="text-darkPrimary text-3xl font-black py-5 text-center">
          Login
        </h1>

        <form
          action=""
          className="space-y-5"
          onSubmit={handleSubmit(validSubmit)}
        >
          <FormInput
            type="email"
            name="email"
            placeholder={"Your Email-Id"}
            register = {register("email", {
              required: "This field is required",
            })}
            className={`${
              errors.email ? "border border-red-500" : "border-none"
            }`}
          />

          {errors.email && (
            <small className="text-red-500">{errors.email.message}</small>
          )}

          <FormInput
            type="password"
            name="password"
            placeholder={"Your Password"}
            register =
            {register("password", {
              required: "This field is required",
            })}
            className={`${
              errors.password ? "border border-red-500" : "border-none"
            }`}
          />
            {errors.password && (
            <small className="text-red-500">{errors.password.message}</small>
          )}
         
          <Button label="Login " />
        </form>
      </div>
    </div>
  );
};

export default Login;
























// import React from 'react'
// import { Link } from 'react-router-dom'

// const Login = () => {
//   return (
//   <section className='bg-darkPrimary h-screen'>
//      <section className=' bg-lightSecondary px-10 py-10 text-center max-w-xl'>
//     <div className='space-y-3'><h1 className='font-black text-3xl'>Log in</h1>
//     <p>Welcome Back</p></div>
   
//    <form action="" className='space-y-5 my-5'>
//    <input type="text" placeholder='Enter your email-id'className='w-full px-5 py-2 bg-white text-gray rounded-md outline-none'/>
//     <input type="password" placeholder='Enter your Password' className='w-full px-5 py-2 bg-white text-gray rounded-md outline-none' required/>
//     <button className='bg-lightPrimary px-5 py-2 rounded-md w-full'>Log-in</button>
//    </form>

//     <p className='text-gray-500'>Need to Signup ? <Link to="/signup"> <span className='underline hover:cursor-pointer hover:text-black'>Create Account</span></Link></p>
//     <p></p>
//    </section>
//   </section>
//   )
// }

// export default Login