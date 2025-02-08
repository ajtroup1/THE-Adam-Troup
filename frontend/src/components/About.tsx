import { JSX } from "react";

function About(): JSX.Element {
  return (
    <>
      <section id="banner">
        <div className="content">
          <header>
            <h1>I'm Adam Troup</h1>
            <p><em>And I'm from Huntsville, AL</em></p>
          </header>
          <p>As a developer I craft creative, valuable, and deatil-oriented solutions.</p>
        </div>
        <span className="image object">
          <img src="https://www.visittheusa.com/sites/default/files/styles/hero_l/public/images/hero_media_image/2018-11/4950e26fd923ce7c0e070910526f9be1.jpeg?h=2e3eca71&itok=ppoO6aiP" alt="" />
        </span>
      </section>
    </>
  )
}

export default About;