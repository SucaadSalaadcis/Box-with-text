import React, { useEffect, useRef, useState } from 'react'

function Timer() {
    const [start , setStart] = useState(0)



    setInterval(() => setStart(start +1),1000);
    
    
 
    
  return (
    <>
        <div className='h-screen justify-center items-center flex bg-black'>
    
          <div className='bg-fuchsia-300 w-[200px] h-[100px] rounded-md text-black font-bold'>
            <p className='pl-[30%] pt-3'>00:00:<span>{start}</span></p>
            <div className='pt-5'>
            <button  className='ml-1 border-2 border-red-800 rounded-lg w-[50px]'>Start</button>
            <button className='ml-5 border-2 border-lime-800 rounded-lg w-[50px]'>Stop</button>
            <button className='ml-5 border-2 border-blue-800 rounded-lg w-[50px]'>Reset</button>
            </div>
            </div>  

        </div>

    </>
  )
}

export default Timer