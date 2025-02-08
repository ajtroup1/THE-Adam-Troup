import { JSX } from "react";
import '../assets/css/fontawesome-all.min.css'
import { projects } from "../data/data";

function Projects(): JSX.Element {

  return (
    <>
      <section>
        <header className="major">
          <h2>Projects</h2>
        </header>
        <div className="posts">
          {projects.map((project, index) => (
            <article key={index} id={`project-${index}`}>
              <a href={project.link} className="image"><img src={project.image} alt={project.title} /></a>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <ul className="actions">
                <li><a href={project.link} className="button" target="_blank">Link<a href={project.link} className="icon brands fa-github ml-git" target='_blank'><span className="label">GitHub</span></a></a></li>
              </ul>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}

export default Projects;