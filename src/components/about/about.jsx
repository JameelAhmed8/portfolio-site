import React from "react";
import "./about.css";
import ME from "../../assets/me-about.jpg";
import { FiAward } from "react-icons/fi";
import { HiOutlineUsers } from "react-icons/hi";
import { VscFolderOpened } from "react-icons/vsc";

function About() {
  return (
    <section id="about">
      <h5>Know More</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}></img>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiAward className="about__icon" />
              <h5>Experience</h5>
              <small>6+ Months Industry Experience</small>
            </article>
            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients All Over the World</small>
            </article>

            <article className="about__card">
              <HiOutlineUsers className="about__icon" />
              <h5>Clients</h5>
              <small>20+ Clients All Over the World</small>
            </article>

            <article className="about__card">
              <VscFolderOpened className="about__icon" />
              <h5>Projects</h5>
              <small>30+ Completed</small>
            </article>
          </div>

          <p>
            I am a Computer Science graduate with fundamental knowledge of the
            software development process and skills to create highly scalable
            applications. Learning and growing my knowledge base is very
            important for me as a person. I firmly believe in quality over
            quantity. Coding is an art, and I love to be the perfect craftsman.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
