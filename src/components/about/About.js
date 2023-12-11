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
            <h4>A dedicated Full-Stack Developer based in Bangalore, India</h4>
            <p>
              As a versatile Full Stack Developer with expertise in a wide array
              of technologies. My skills encompass <font>HTML</font>,{" "}
              <font>CSS</font>, <font>JavaScript</font>, <font>TypeScript</font>
              , <font>React.js</font>, <font>Tailwind CSS</font>,{" "}
              <font>SASS</font>, <font>Node.js</font> and <font>MongoDB</font>,{" "}
              allowing me to create seamless and visually appealing web
              experiences. Additionally, my proficiency extends to{" "}
              <font>Java</font> and Android application development, including{" "}
              <font>Android(AOSP)</font> and{" "}
              <font>Android Automotive Operating System (AAOS)</font>. As a
              designer and developer, I blend creativity with technical prowess
              to deliver exceptional results. Let's collaborate and bring your
              ideas to life with innovation and expertise!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
