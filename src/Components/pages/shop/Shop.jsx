import React from 'react'
import './shop.css'
import { useNavigate, useParams } from 'react-router-dom'

const Shop = () => {
    const data = ["sneaker", "canvas", "shoes", "Tree glider", "warm shoe"]
    const navigate = useNavigate()
    const {product_type} = useParams()
  return (
    <div className='categories'>
        <p onClick={() => navigate(`/productdetails/${data[0]}`)}>sneakers</p>
        <p onClick={() => navigate(`/productdetails/${data[1]}`)}>canvas</p>
        <p onClick={() => navigate(`/productdetails/${data[2]}`)}>shoes</p>
        <p onClick={() => navigate(`/productdetails/${data[3]}`)}>Tree glider</p>
        <p onClick={() => navigate(`/productdetails/${data[4]}`)}>warm shoe</p>


    </div>
  )
}

export default Shop