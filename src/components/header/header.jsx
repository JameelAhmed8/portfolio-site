import React from "react";
import "./header.css";
import CTA from './CTA'
import Me from '../../assets/me.png'
import Socilas from './socials'

function Header () {
  return (
    <header>
      <div className="header__container">
        <h5>Hello I'm</h5>
        <h1>Jameel Ahmed</h1>
        <h5 className="text-light">Full-Stack Developer</h5>
        <CTA/>
        <Socilas/>

        <div>
          <img src={Me} className="me"></img>
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
