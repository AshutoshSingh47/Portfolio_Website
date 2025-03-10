import emoji from "../../assets/images/work-emoji.png";
import sideimg from "../../assets/images/about-me-img.webp";
import text from "../../assets/icons/rotate.svg";
import "../../assets/styles/about/About.css";

function About(props) {
  return (
    <section className={`about ${props.isDark ? "dark" : ""}`} id="About">
      <div className="container">
        <div className="about-content">
          <div className="about-img-side">
            <img src={emoji} alt="work-emoji" className="work-emoji"></img>
            <img src={sideimg} alt="side-img" className="side-img"></img>
            <span>
              <img src={text} alt="text"></img>
            </span>
          </div>
          <div className="about-text-side">
            <h3>ABOUT ME</h3>
            <h4>A dedicated Front-End Developer based in Bangalore, India</h4>
            <p>
              I am a <font>Front-End Developer</font> with a strong focus on
              creating responsive, user-friendly, and visually appealing web
              applications. My skill set includes <font>HTML</font>,{" "}
              <font>CSS</font>, <font>JavaScript</font>, <font>TypeScript</font>
              , <font>React.js</font>, <font>Next.js</font>,{" "}
              <font>Tailwind CSS</font>, <font>SASS</font>,{" "}
              <font>TanStack</font>, <font>Shadcn</font>, <font>D3.js</font> and{" "}
              <font>Git</font>, I enjoy translating ideas and designs into
              seamless digital experiences. Let’s work together to bring your
              vision to life!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
