import React, { useState, useEffect } from 'react';
import './Header.css';
import { useNavigate } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { BsQuestionCircle } from "react-icons/bs";
import { HiShoppingCart } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa";

const Header = () => {
  const navigate = useNavigate();

   const handleNavigate = () =>{
    setTimeout(() =>{
       navigate("/login")
    }, 3000)
  }

  const brand = ["Men", "Women", "Socks", "Men's sales", "Women's sales"]
  const [isCartOpen, setIsCartOpen] = useState(false); 

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const headText = [
    "Weather The Storm (in style): The Runner Chelsea Protect is Here. Shop Men | Shop Women",
    "Free Shipping On Orders Over $75. Free Returns."
  ];

  const [data, setData] = useState(0);

  const myNextText = () => {
    setData((data + 1) % headText.length);
  };

  const myMusText = () => {
    setData((data - 1 + headText.length) % headText.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      myMusText();
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Header Section */}
      <div className='head1'>
        <h3>{headText[data]}</h3>
        <button onClick={myNextText}><FaAngleRight /></button>
      </div>
      <div className='head2'>
        <div className='headerText'>
          <p>MEN</p>
          <p>WOMEN</p>
          <p>SOCKS</p>
          <span>SALE</span>
        </div>

        <div className='Logo'></div>

        <div className='headerText2'>
          <p>SUSTAINABILITY</p>
          <p>RERUN</p>
          <p>STORES</p>
          <div className='headIcons'>
            <IoSearch />
            <FiUser onClick={handleNavigate}/>
            <BsQuestionCircle />
            <HiShoppingCart onClick={toggleCart} /> {/* Toggle Sidebar */}
          </div>
        </div>
      </div>

      {/* Sliding Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? "open" : ""}`}>
        <button className="close-btn" onClick={toggleCart}>×</button>
        <HiShoppingCart />
        <p>You're $75 away from free shipping!</p>
        <div className='bar'></div>
        <span>Your Cart is Empty</span>
        <div className='butts'>
          <div className='button' onClick={() => navigate(`/shop/${brand[0]}`)}>SHOP MEN'S</div>
          <div className='button' onClick={() => navigate(`/shop/${brand[1]}`)}>SHOP WOMEN'S</div>
          <div className='button' onClick={() => navigate(`/shop/${brand[2]}`)}>SHOP SOCKS</div>
          <div className='button' onClick={() => navigate(`/shop/${brand[3]}`)}>SHOP MEN'S SALE</div>
          <div className='button' onClick={() => navigate(`/shop/${brand[4]}`)}>SHOP WOMEN'S SALE</div>
        </div>
      </div>
    </>
  );
};

export default Header;