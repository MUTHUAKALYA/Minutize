import React from 'react'

const TextArea = ({name,placeholder,register}) => {
  return (
    <textarea name={name} placeholder={placeholder} {...register} className='w-full px-5 py-2 rounded-md outline-none'></textarea>
  )
}

export default TextArea