import "../../assets/styles/cards/ProjectCards.css";
import { ProjectStack } from "../../data/projectStack";

function ProjectCards(props) {
  return (
    <div className={`projects-grid ${props.isDark ? "dark" : ""}`}>
      {ProjectStack.map((project) => {
        const {
          className,
          imageClassName,
          description,
          githubLink,
          image,
          liveDemo,
          name,
          techStacks,
        } = project;
        return (
          <div key={name} className={className}>
            <div className="pro_img">
              <a href={liveDemo} target="_blank" rel="noreferrer">
                <img src={image} className={imageClassName}></img>
              </a>
            </div>
            <div className="pro_text">
              <h3>
                {name}
              </h3>
              <p>{description}</p>
              <ul className="stack">
                {techStacks.map((tech) => (
                  <span className="flex justify-center items-center border rounded-full bg-transparent h-6 px-3 text-xs">
                    {tech}
                  </span>
                ))}
              </ul>
              <div className="project-links">
                <a href={githubLink} target="_blank" rel="noreferrer">
                  Code
                  <i className="bi bi-github"></i>
                </a>
                <a href={liveDemo} target="_blank" rel="noreferrer">
                  Live Demo
                  <i className="bi bi-box-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProjectCards;
