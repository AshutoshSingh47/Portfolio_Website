import ProjectCards from "../cards/ProjectCards";

import "../../assets/styles/projects/Projects.css";

function Projects(props) {
  return (
    <section
      className={`projects ${props.isDark ? "dark" : ""}`}
      id="Projects"
    >
      <div className="container">
        <div className="projects-content">
          <p>My Projects</p>
          <h3>Each project is a unique piece of development 🧩</h3>
          <ProjectCards isDark={props.isDark} />
        </div>
      </div>
    </section>
  );
}

export default Projects;
