import "../../styles/styles.css"

function Footer(): JSX.Element {
  return <>
    <footer className="footer-main">
      <div className="footer-container">
        <p className="">&copy; 2025 Adam Troup. All rights reserved.</p>
        <div className="footer-links">
          <div className="footer-link-container">
            <a href="https://github.com/ajtroup1" target="_blank" rel="noopener noreferrer" className="footer-link">
              GitHub
            </a>
            <img src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256" className="footer-icon" />
          </div>
          <div className="footer-link-container">
            <a href="https://www.linkedin.com/in/adam-troup/" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" className="footer-icon"/>
          </div>
          <div className="footer-link-container">
            <a href="mailto:ajtroup1@crimson.ua.edu" className="footer-link">
              Email
            </a>
            <img src="https://imaginethatcreative.net/blog/wp-content/uploads/2023/06/2250206.png" className="footer-icon"/>
          </div>
        </div>
      </div>
    </footer>
  </>
}

export default Footer