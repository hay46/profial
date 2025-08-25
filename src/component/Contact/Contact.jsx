import React, { useState } from "react";
import './Contact.css'
function Contact() {
  return (
    <div className="div-signup">
      <div className="signup-page">
        <h1>Contact page</h1>
      </div>
      <div className="div-form">
        <form action="">
          <input type="text" placeholder=" enter your name" />
          <input type="text" placeholder=" enter your email" />
          <input type="password" placeholder="Enter your password" />
        </form>
      </div>
      <div className="div-signup-login">
        <h1>Sign up</h1>
        <h2>login</h2>
      </div>
    </div>
  );
}
export default Contact;
