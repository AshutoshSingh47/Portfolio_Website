import DownloadButton from "../buttons/DownloadButton";

import "../../assets/styles/home/Home.css";

function Home(props) {
  return (
    <section className="home" id="Home">
      <div className="container">
        <div className="content">
          <div className="content-main">
            <div className={`profile-info ${props.isDark ? "dark" : ""}`}>
              <h1>Full-Stack Developer</h1>
              <p>
                Hi, I'm <font>Ashutosh Singh</font> and I am a passionate
                Full-Stack Developer based in Gorakhpur, India.
              </p>
              <span>
                <a
                  aria-label="linkedin"
                  rel="noreferrer"
                  target="_blank"
                  href="https://www.linkedin.com/in/ashutosh-singh-64b7371b1/"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  aria-label="github"
                  rel="noreferrer"
                  target="_blank"
                  href="https://github.com/AshutoshSingh47"
                >
                  <i className="bi bi-github"></i>
                </a>
              </span>
              <DownloadButton isDark={props.isDark} />
            </div>
            <div className={`profile-img ${props.isDark ? "dark" : ""}`}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
