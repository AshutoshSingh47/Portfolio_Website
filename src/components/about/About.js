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
            <h4>A dedicated Full-Stack Developer based in Gorakhpur, India</h4>
            <p>
              What sets me apart is my genuine curiosity and eagerness to learn.
              I thrive in dynamic and fast-paced environments that encourage
              innovation and creativity. I am confident in my ability to quickly
              adapt to new technologies and frameworks, ensuring efficient and
              high-quality software solutions. I am not only passionate about
              delivering exceptional results but also about continuously
              improving my skills and expanding my knowledge base.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
