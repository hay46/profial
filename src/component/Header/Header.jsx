import React, { useState } from "react";
import "./Header.css";
import logo from "../../assets/haymanot photo.jpg";

function Header() {
  const [navbar, setNavbar] = useState(false); // ✅ Proper useState declaration

  return (
    <div className="portfolio">
      <nav>
        <ul>
          <li>
            <button>Portfolio</button>
          </li>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Service</a>
          </li>
          <li>
            <a href="#">Portfolio</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="contact-with-me-top">Contact with me</button>
      </nav>

      <div className="portfolio-image">
        <img src={logo} alt="Haymanot Ebabu" />
      </div>

      <div className="hero-page">
        <h1>
          <span>I'm Haymanot Ebabu</span>,<br />
          and also a Fullstack Web Developer
        </h1>
        <p>I am a frontend Web developer</p>
      </div>

      <div className="contact-with-me">
        <button className="contact">Contact with me</button>
        <button>My résumé</button>
      </div>
    </div>
  );
}

export default Header;
