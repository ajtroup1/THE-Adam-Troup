import "../../styles/Projects.css"

function Projects(): JSX.Element {
  const handleLinkUser = (technology: string) => () => {
    switch (technology) {
      case "Go":
        window.open("https://github.com/ajtroup1/Clear", "_blank")
        break
      case "Python":
        window.open("https://github.com/ajtroup1/AI-Spotify-Recommender", "_blank")
        break
      case "C#":
        window.open("https://github.com/dmhunt5/FinalProjectFall2024", "_blank")
        break
      case "C++":
        window.open("https://github.com/ajtroup1/ClearV2", "_blank")
        break
      case "React":
        window.open("https://github.com/ajtroup1/C-Text", "_blank")
        break
      case "CSS":
        window.open("https://developer.mozilla.org/en-US/docs/Web/CSS", "_blank")
        break
      
      default:
        break
    }
  }
  return <div className="projects-main">
    <div className="projects-header">
      <p className="projects-header-title">Projects and Skills</p>
      <p className="projects-header-description">I've learned a lot while developing my personal projects, probably more than I did from any book.
        <br />Here are some of the more notable overarching ideas I've worked with:
        <br />1. Full-stack Web Development
        <br />2. Machine Learning & AI models
        <br />3. Mobile App Development
        <br />4. Creating my own programming language
        <br />5. Building solutions for real-world problems
      </p>
      <div className="familiar-technologies-container">
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("Go")}>
          <p className="familiar-technology-text">Go / Golang</p>
          <img src="https://go.dev/blog/go-brand/Go-Logo/PNG/Go-Logo_Blue.png" className="familiar-img" />
        </div>
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("Python")}>
          <p className="familiar-technology-text">Python</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png" className="familiar-img" />
        </div>
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("C#")}>
          <p className="familiar-technology-text">C#</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png" className="familiar-img" />
        </div>
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("C++")}>
          <p className="familiar-technology-text">C++</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" className="familiar-img" />
        </div>
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("React")}>
          <p className="familiar-technology-text">React</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png" className="familiar-img" />
        </div>
        <div className="familiar-technologies-img-container" onClick={handleLinkUser("CSS")}>
          <p className="familiar-technology-text">CSS</p>
          <img src="https://static-00.iconduck.com/assets.00/css-3-icon-726x1024-610441pl.png" className="familiar-img" />
        </div>
      </div>
    </div>
  </div>
}

export default Projects