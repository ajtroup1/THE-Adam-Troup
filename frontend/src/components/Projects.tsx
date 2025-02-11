import { JSX } from "react";
import '../assets/css/fontawesome-all.min.css'
import { projects } from "../data/data";

function Projects(): JSX.Element {
  const handleLinkOpen = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <>
      <section>
        <header className="major">
          <h2>Projects</h2>
        </header>
        <div className="posts">
          {projects.map((project, index) => (
            <article key={index} id={`project-${index}`} className="project">
              <a href={project.link} className="image"><img src={project.image} alt={project.title} /></a>
              <h3>{project.title}</h3>
              <p><em>{project.description}</em></p>
              <p>{project.detail ? project.detail : ""}</p>
              <div className="project-tech-icons-container">
                {project.technologies ? (
                  project.technologies.map((tech, index) => (
                    <div className="project-tech-icon-container" key={index}>
                      <img src={tech.icon} className="project-tech-icon" onClick={() => handleLinkOpen(tech.link)} />
                    </div>
                  ))
                ) : ""}
              </div>
              <ul className="actions" style={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
                <li><a href={project.link} className="button git-proj-link" target="_blank">Link<a href={project.link} className="icon brands fa-github ml-git" target='_blank'><span className="label">GitHub</span></a></a></li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects;