import React from 'react'
import logo from "../../assets/logos/Logo.png";
import { Link } from 'react-router-dom'
import './Header.scss'


export default function Header() {
  return (
    <header>
      <div id='logo' className='logo'>
        <img src={logo} alt="logo" width={50} />
        {/* <h2 className='logo__name'>Recipe Spark</h2>       */}
      <Link to={"/"} className='logo__link'>
        Home</Link>
        </div>
    </header>
  )
}
