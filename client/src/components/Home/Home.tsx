import "../../styles/styles.css"

function Home(): JSX.Element {
  return <>
    <div className="section__container">
      <div className="content">
        <p className="subtitle">HELLO</p>
        <h1 className="title">
          I'm <span>Adam</span>,<br />a Software Developer
        </h1>
        <p className="description">
          Welcome to my portfolio. I am a developer with a passion for
          creating impressive, unique, and valuable technial solutions.
          I have developed a wide range of websites and applications using
          the best languages and frameworks. View the <a href="/projects">Project</a> tab to
          see what projects I have been working on!<br /><br />
          Thanks for visiting!<br /> - Adam Troup
        </p>
      </div>
      <div className="image">
        <img src="../../src/assets/IMG_0035.jpg" alt="profile" id=""/>
      </div>
    </div>
  </>
}

export default Home