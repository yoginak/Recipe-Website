import React from 'react'
import logo from "../../assets/logos/Logo.png";
import { Link } from 'react-router-dom'
import './Header.scss'


export default function Header() {
  return (
    <header className='header'>
      <div id='logo' className='logo'>
      <Link to={"/"} className='logo__link'>
  <img className='logo__img' src={logo} alt="logo" />
</Link>
<div className='logo__text'>
<p className='logo__name'>Recipe Spark</p>
<p className='logo__emoji'> 👨‍🍳🍳👩‍🍳</p> 
</div> 
        {/* <img className='logo__img' src={logo} alt="logo" width={50} />
        <h2 className='logo__name'>Elevate Your Cooking</h2>      
      <Link to={"/"} className='logo__link'>
        Home</Link> */}
        </div>
    </header>
  )
}
