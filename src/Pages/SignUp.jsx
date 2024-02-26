import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import FormInput from "../Components/FormInput";
import Button from "../Components/Button";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/config";

const SignUp = () => {
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


  createUserWithEmailAndPassword(auth, value.email, value.password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Your account has been created")
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

 

  return (
    <div className="bg-darkPrimary h-screen flex items-center justify-center">
      <div className="bg-lightSecondary py-16 px-10 max-w-2xl mx-auto rounded-lg">
        <h1 className="text-darkPrimary text-3xl font-black py-5 text-center">
          Sign Up
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
          <FormInput
            type="password"
            name="confirmPassword"
            placeholder={"Confirm Password"}
            register={register("confirmPassword", {
              required: "This field is required",
            })}
            className={`${
              errors.confirmPassword ? "border border-red-500" : "border-none"
            }`}
          />
          {errors.confirmPassword && (
            <small className="text-red-500">{errors.confirmPassword.message}</small>
          )}
          <Button label="Sign-up " />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
