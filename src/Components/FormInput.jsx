import React from 'react'

const FormInput = ({type,name,placeholder,register}) => {
    return (
      <>
      <input type={type} name={name} placeholder={placeholder} {...register} className='w-full px-5 py-2 rounded-md outline-none '/>
      </>
    )
  }

export default FormInput