
import { useForm } from "react-hook-form";
import FormInput from "../Components/FormInput"
import Button from "../Components/Button"
import TextArea from "../Components/TextArea";
import {  setDoc, doc } from "firebase/firestore"; 
import { db } from "../Firebase/config";
// import { collection, addDoc, setDoc, doc } from "firebase/firestore"; 
// import { useEffect } from "react";


const CreateMinutes = () => {
  const { register, handleSubmit, reset } = useForm();

  const validSubmit = (data) => {
     alert(`New minutes has been added`)
    const querySnapshot = setDoc(doc(db,"minutes",data.organisationName),data)
   console.log(data)


    reset();
  };

 
  

  return (

    <section className="bg-darkPrimary h-screen flex items-center justify-center">
          <div className="bg-gray-50 max-w-2xl mx-auto  p-10 rounded-lg">
        <h1 className="text-center text-2xl py-3 font-black mb-5 text-darkPrimary">
          Add new meeting minutes
        </h1>
        <form
          action=""
          className="space-y-5"
          onSubmit={handleSubmit(validSubmit)}
        >
          
           
          <FormInput
          type="text"
            name="organisationName"
            placeholder={"Name of the organisation"}
            register={register("organisationName")}
          />
           
         
          <FormInput
          type="date"
            name="recipename"
            placeholder={"Date"}
            register={register("date")}
          />
          <FormInput
          type="text"
            name="location"
            placeholder={"Enter the location"}
            register={register("location")}
          />
          <FormInput
          type="text"
            name="startTime"
            placeholder={"Enter Start time"}
            register={register("startTime")}
          />

          <FormInput
          type="text"
            name="endTime"
            placeholder={"Enter end time"}
            register={register("endTime")}
          />
          <TextArea
          name="agenda"
          placeholder={"Agenda of the meeting"}
          register={register("agenda")}
          />
          <Button label="Submit " />
        </form>
      </div>
    </section>
   
  );
};

export default CreateMinutes;
