import React from "react";
import Header from "./component/Header/Header.jsx";
import About from "./component/About/About.jsx";
import Home from "./component/Home/Home.jsx";
import Portfolio from "./component/portfolio/Portfolio.jsx";
import Contact from "./component/Contact/Contact.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <About />

      <h1 className="service">My Services</h1>

      <div className="abebe">
        <div className="web-development">
          <Home
            id="01"
            title="Web Development"
            para="I do some research before starting my development to choose the right way for the job."
            read="Read more"
          />
          <Home
            id="02"
            title="Fully Responsive"
            para="I design my websites for every screen size available and make sure they look great on every device."
            read="Read more"
          />
          <Home
            id="03"
            title="Beautiful Code"
            para="Working on projects, I write beautiful and clean code to make it readable for any partner or client."
            read="Read more"
          />
        </div>

        <div className="on-timet">
          <Home
            id="04"
            title="On Time"
            para="Always responsible to complete any given project on time."
            read="Read more"
          />
          <Home
            id="05"
            title="Quick Learner"
            para="I like to learn new things and I have the ability to learn quickly."
            read="Read more"
          />
          <Home
            id="06"
            title="Easy to Reach"
            para="I'm easy to reach and happy to help."
            read="Read more"
          />
        </div>
      </div>

      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
