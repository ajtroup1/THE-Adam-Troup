import "../../styles/styles.css"

function Navbar(): JSX.Element {
  return <>
    <nav>
      <div className="nav__content">
        <div className="logo"><a href="/">Adam Troup</a></div>
        <input type="checkbox" name="check" id="check" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/resume">Resume</a></li>
          <li><a href="/projects">Projects & Skills</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </>
}

export default Navbar