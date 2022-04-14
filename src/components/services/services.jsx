import React from "react";
import "./services.css";
import { BsStackOverflow } from "react-icons/bs";

function Services() {
  return (
    <section id="services">
      <h5>Services</h5>
      <h2>What Services I Provide</h2>
      <div className="container services_container">
        <div className="container_frontend">
          <article className="services_info">
            <a className="btn btn-primary">
              <BsStackOverflow /> Fullstack Development
            </a>
          </article>

          <article className="services_info">
            <a className="btn btn-primary">
              <BsStackOverflow /> Automation/Testing
            </a>
          </article>
          <article className="services_info">
            <a className="btn btn-primary">
              <BsStackOverflow /> Data Science
            </a>
          </article>
          <article className="services_info">
            <a className="btn btn-primary">
              <BsStackOverflow />
              Andriod
            </a>
          </article>
        </div>

        <dvi className="container_backend"></dvi>
      </div>
    </section>
  );
}

export default Services;
