import React, { useEffect, useState } from 'react'
import './Loadscreen.css'
import { DotLoader  } from 'react-spinners';

const Loadscreen = () => {
  const [loading, setLoading] = useState(true)

useEffect(()=> {
    setTimeout(()=>{
        setLoading(false)
    },5000)
}, [])


  return (
   <>
      {
        loading? <h1> <DotLoader /> </h1> : null
      }
   </>
  )
}

export default Loadscreen