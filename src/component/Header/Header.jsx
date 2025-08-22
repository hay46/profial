import React from 'react'
import './Header.css'
import logo from '../../assets/haymanot photo.jpg'
function Header() {
  return (
    <div className="portfolio">
      <nav>
        <ul>
          <button>portfolio</button>
          <li className="">
            {" "}
            <a href="">Home</a>
          </li>
          <li className="">
            <a href="">About</a>
          </li>
          <li className="">
            <a href="">Service</a>
          </li>
          <li className="">
            <a href="">portfolio</a>
          </li>
          <li className="">
            <a href="">Contact</a>
          </li>
        </ul>
        <button className="contact-with-me-top">Contact with me</button>
      </nav>
      <div className="portfolio-image">
        <img src={logo} alt="" />
      </div>
      <div className='hero-page'>
        <h1>
        
          <span>i'm haymanot ebabu</span>,<br />and also Fullstack Web Developer
        </h1>
        <p>I am a frontend Web developer</p>
      </div>
<div className='contact-with-me'>
  <button className='contact'>contact with me </button>
  <button>My reasum</button>
</div>
    </div>
  );
}

export default Header
