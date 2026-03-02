import React from 'react'

const Button = ({className, btntxt}) => {
  return (
    <button className={`px-7 py-6 bg-blue-700 hover:bg-blue-300 text-white font-bold  rounded-full  ${className}`}>{btntxt}</button>
  )
}

export default Button