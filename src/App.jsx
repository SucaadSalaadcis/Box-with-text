import React from 'react'
import BoxModel from './components/BoxModel'
// images
import img1 from "./assets/img/1.jpg"
import img2 from "./assets/img/6.jpg"
import img3 from "./assets/img/3.jpg"

function App() {
  return (
    <>

    <div className='flex'>
    <BoxModel pic1={img1} name="Sara" />
    <BoxModel pic1={img2} name="Sawda" />
    <BoxModel pic1={img3} name="Sahuur" />

    </div>
    </>
  )
}

export default App