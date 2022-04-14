import React from "react";
import "./experience.css";
import { SiCheckmarx } from "react-icons/si";

function Experience() {
  
  return (
    <section id="experience">
      <h5>What Skills I have</h5>
      <h2>Work Experience</h2>

      <div className="container exp_container">
        <div className="experience_frontend">
          <h3>Frontend</h3>

          <div className="experience_content">
            <article className="experience_details">
              <SiCheckmarx />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>JavaScript</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>

        <div className="experience_backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiCheckmarx />
              <h4>HTML</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>CSS</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>JavaScript</h4>
              <small>Experienced</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>React</h4>
              <small>Intermediate</small>
            </article>
            <article className="experience_details">
              <SiCheckmarx />
              <h4>Bootstrap</h4>
              <small>Intermediate</small>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
