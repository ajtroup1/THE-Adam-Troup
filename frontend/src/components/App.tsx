import { useState, useEffect, JSX } from 'react'
import '../assets/css/main.css'
import '../assets/css/fontawesome-all.min.css'
import { Routes, Route } from 'react-router-dom'
import LandingPage from './LandingPage'
import Projects from './Projects'
import Resume from './Resume'
import About from './About'

function App(): JSX.Element {
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);
  useEffect(() => {
    // Add any JavaScript initialization here if needed
  }, []);

  const toggleSidebar = () => {
    setSideBarOpen(!sideBarOpen);
  };
  return (
    <>
      <div id="wrapper">
        <div id="main">
          <div className="inner">

            {/* HEADER */}
            <header id="header">
              <button className="hamburger" onClick={toggleSidebar}>
                ☰
              </button>
              <a href="index.html" className="logo"><strong>Adam Troup</strong><br />Professional Protfolio</a>
              <ul className="icons">
                <li><a href="https://github.com/ajtroup1" className="icon brands fa-github" target='_blank'><span className="label">GitHub</span></a></li>
                <li><a href="https://www.linkedin.com/in/adam-troup/" className="icon brands fa-linkedin" target='_blank'><span className="label">LinkedIn</span></a></li>
                <li><a href="mailto:ajtroup@crimson.ua.edu" className="icon solid fa-envelope" target='_blank'><span className="label">Email</span></a></li>
              </ul>
            </header>

            {/* RENDER BODY HERE */}
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/projects" element={<Projects />} />
              <Route path='/resume' element={<Resume />} />
              <Route path='/about' element={<About />} />
            </Routes>

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
                  <li><a href="/">Homepage</a></li>
                  <li><a href="/projects">Projects</a></li>
                  <li><a href="/resume">Resume</a></li>
                  <li><a href="/about">About Me</a></li>
                </ul>
              </nav>

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
      </div>
    </>
  )
}

export default App
