import { useEffect, useState } from "react";
import Headshot from "../assets/images/IMG_0035.jpg";
import { projects } from "../data/data";

const LandingPage = () => {
  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <h1>Hi, I’m Adam Troup, <br />
              a developer</h1>
            <p>BA - Management Information Systems 2025<br />
              <em>The University of Alabama</em></p>
          </header>
          <p>As a developer I craft creative, valuable, and deatil-oriented solutions.</p>
          <ul className="actions">
            <li><a href="/projects" className="button big">View some of my projects</a></li>
          </ul>
        </div>
        <span className="image object">
          <img src={Headshot} alt="" />
        </span>
      </section>

      <section>
        <header className="major">
          <h2>My Skillset</h2>
        </header>
        <div className="features">
          <article>
            <span className="icon solid fa-server"></span>
            <div className="content">
              <h3>Backend Development</h3>
              <p>Many APIs written in C#, Python, and Go. An extensive understanding of MVC architecture and how it applies to different languages/frameworks. Implementation of external APIs such as <a href="https://developer.spotify.com/documentation/web-api" target="_blank">Spotify</a> and <a href="https://www.weatherapi.com/" target="_blank">Weather</a>. Implementation of and adherence to best security standards (JWT, OAuth2).</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-desktop"></span>
            <div className="content">
              <h3>Frontend Development</h3>
              <p>Extensive use of frontend design utilizing raw CSS, tailwind, React component-based styling, and other styling libraries. Understanding of CSS properties, best practices, tools, and how to best utilize CSS's features.</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-mobile-alt"></span>
            <div className="content">
              <h3>Mobile App Development </h3>
              <p>Experience with React Native developing a responsive UI that calls a diverse range of backend functionality.</p>
            </div>
          </article>
          <article>
            <span className="icon solid fa-cog"></span>
            <div className="content">
              <h3>Machine Learning</h3>
              <p>Implementation of many types of AI models using <a href="https://www.tensorflow.org/" target="_blank">Tensorflow</a> and <a href="https://pytorch.org/" target="_blank">Pytorch</a>. This includes a wide range of model types: <a href="https://www.geeksforgeeks.org/binary-cross-entropy-log-loss-for-binary-classification/" target="_blank">Binary Crossentropy</a>, <a href="https://www.youtube.com/watch?v=aircAruvnKk" target="_blank">Neural Networks / Deep Neural Networks</a>, <a href="https://www.ibm.com/think/topics/decision-trees#:~:text=A%20decision%20tree%20is%20a,internal%20nodes%20and%20leaf%20nodes." target="_blank">Decision Trees</a>, <a href="https://www.geeksforgeeks.org/ml-linear-regression/" target="_blank">Linear Regression</a>, <a href="https://www.ibm.com/think/topics/random-forest" target="_blank">Random Forest</a>, and <a href="https://arxiv.org/abs/1706.03762" target="_blank">NLP / LLM</a>.</p>
            </div>
          </article>
        </div>
      </section>

      <section>
        <header className="major">
          <h2>Some Projects I Have Developed</h2>
        </header>
        <div className="posts">
          {projects.map((project, index) => (
            <article key={index} id={`project-${index}`}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="actions">
                <li><a href={`/projects#project-${index}`} className="button">More</a></li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default LandingPage;
