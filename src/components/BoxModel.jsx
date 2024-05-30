import React, { useState } from 'react'

function BoxModel(props) {
    const [open , setIsOpen] = useState(true);
    const [hide , setHidden] = useState(true);
    


    const handleClick = () => {
        setIsOpen(false);
        setHidden(false);  
    }

    const hanleLeave = () => {
        setIsOpen(true)
        setHidden(true) 
    }

  
  return (
    <>
       <div className='w-screen h-screen justify-center items-center flex bg-gray-800  '>

        <div className={` bg-white  ${open ? "h-[200px] w-[300px] " : "h-[355px] w-[300px] "}   rounded-md`} onMouseEnter={handleClick} onMouseLeave={hanleLeave}>
            <img src={props.pic1} alt="" />


{/* text */}
        <div className={` ${hide ? "hidden" : "block"} animate-pulse transition-all duration-500 ` }>
    
            <h1 className='font-bold text-center mt-3'>{props.name}</h1>
            <p className={`text-center`}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Recusandae odio minima earum, 
            quis consequuntur facere unde nemo saepe accusamus commodi, quam ex beatae assumenda? Eum.</p>

        </div>
      
        </div>
      
        </div> 
    </>
  )
}
// hidden hover block

export default BoxModel