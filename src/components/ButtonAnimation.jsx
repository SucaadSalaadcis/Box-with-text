import React from 'react'

function ButtonAnimation() {
  return (
    <>
    <div className='h-screen justify-center items-center flex'>
     <button className='hover:animate-pulse p-5 w-[190px] rounded-md  bg-gray-700 text-white  hover:bg-gradient-to-r from-purple-900 via-sky-500 to-pink-500 '>Hover Me!</button>
    </div>
    </>
  )
}

export default ButtonAnimation