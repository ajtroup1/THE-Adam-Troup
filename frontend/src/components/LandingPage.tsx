import { useEffect, useState } from "react";
import Headshot from "../assets/images/IMG_0035.jpg";

const features = [
  { id: 1, title: "Aliquam", description: "Lorem ipsum dolor sit amet." },
  { id: 2, title: "Tempus", description: "Donec eget ex magna." },
  { id: 3, title: "Magna", description: "Integer volutpat at velit et pulvinar." }
];

const LandingPage = () => {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  useEffect(() => {
    // Add any JavaScript initialization here if needed
  }, []);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };

  return (
    <div id="wrapper">

      <div id="main">
        <div className="inner">

          <header id="header">
            <button className="hamburger" onClick={toggleSidebar}>
              ☰
            </button>
            <a href="index.html" className="logo"><strong>Adam Troup</strong><br />Professional Protfolio</a>
            <ul className="icons">
              <li><a href="https://github.com/ajtroup1" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
              <li><a href="https://www.linkedin.com/in/adam-troup/" className="icon brands fa-linkedin"><span className="label">LinkedIn</span></a></li>
              <li><a href="mailto:ajtroup@crimson.ua.edu" className="icon solid fa-envelope"><span className="label">Email</span></a></li>
            </ul>
          </header>

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
              <article>
                <a href="#" className="image"><img src="images/pic01.jpg" alt="" /></a>
                <h3>Clear - A Talking Programming Language</h3>
                <p>Clear is an interpreted language made in Go. The "Talking" aspect of it comes from the log that it produces. This log details every step the program took in turning your code into something that the computer can understand.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic02.jpg" alt="" /></a>
                <h3>Automatic Go Documentation Generator</h3>
                <p>This project reads specialized comments within your Go source code and generates a robust documentation for it. Leave <a href="http://doxygen.nl/" target="_blank">Doxygen</a>-style comments to give Information to the program.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic03.jpg" alt="" /></a>
                <h3>AI-Powered Spotify Song Queuer</h3>
                <p>Feeds the user's mood, the current weather in the user's location, and the time of day into an AI model that will automatically queue a song on Spotify relevant to those parameters. For example, on a rainy day when the user is feeling sad and it's night, maybe it would queue blues music. </p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
              <article>
                <a href="#" className="image"><img src="images/pic04.jpg" alt="" /></a>
                <h3>C-Text Code Editor</h3>
                <p>Code editor with necessary functions such as: file editing, workspace architecture, terminal integration, markdown renderer, and more. Powered by <a href="https://electron-vite.org" target="_blank">Electron Vite</a>.</p>
                <ul className="actions">
                  <li><a href="#" className="button">More</a></li>
                </ul>
              </article>
            </div>
          </section>

        </div>
      </div>

      {/* SIDEBAR */}
      {sideBarOpen && (
        <div id="sidebar">
          <div className="inner">
            <div className="close-sidebar-container">
              <button className="close-sidebar" onClick={toggleSidebar}>
                Close
              </button>
            </div>

            <nav id="menu">
              <header className="major">
                <h2>Menu</h2>
              </header>
              <ul>
                <li><a href="index.html">Homepage</a></li>
                <li><a href="generic.html">My Skillset</a></li>
                <li><a href="elements.html">Projects</a></li>
                <li><a href="#">Resume</a></li>
                <li><a href="#">About Me</a></li>
              </ul>
            </nav>

            {/* <section>
              <header className="major">
                <h2>Ante interdum</h2>
              </header>
              <div className="mini-posts">
                <article>
                  <a href="#" className="image"><img src="images/pic07.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                  <a href="#" className="image"><img src="images/pic08.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
                <article>
                  <a href="#" className="image"><img src="images/pic09.jpg" alt="" /></a>
                  <p>Aenean ornare velit lacus, ac varius enim lorem ullamcorper dolore aliquam.</p>
                </article>
              </div>
              <ul className="actions">
                <li><a href="#" className="button">More</a></li>
              </ul>
            </section> */}

            <section>
              <header className="major">
                <h2>Get in touch</h2>
              </header>
              <ul className="contact">
                <li className="icon solid fa-envelope"><a href="mailto:ajtroup1@crimson.ua.edu">ajtroup1@crimson.ua.edu</a></li>
                <li className="icon solid fa-phone">(256) 746-6217</li>
                <li className="icon solid fa-home">The University of Alabama <br />
                  Tuscaloosa, AL 35487</li>
              </ul>
            </section>
          </div>
        </div>
      )}

      <script src="@/assets/js/jquery.min.js"></script>
      <script src="@/assets/js/browser.min.js"></script>
      <script src="@/assets/js/breakpoints.min.js"></script>
      <script src="@/assets/js/util.js"></script>
      <script src="@/assets/js/main.js"></script>
    </div>


  );
};

interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => (
  <div className="col-4 col-12-mobile">
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

export default LandingPage;
