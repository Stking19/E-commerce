import React from 'react'
import './productdetails.css'
import { useParams } from 'react-router-dom'

const Productdetails = () => {
    const {product_name} = useParams()
  return (
    <div>PRODUCT DETAILS:{product_name}</div>
  )
}

export default Productdetails