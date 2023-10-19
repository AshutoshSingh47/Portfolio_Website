import CircularCard from "../cards/CircularCard";
import "../../assets/styles/skills/Skill.css";

function Skill(props) {
  return (
    <section className="skill" id="Skills">
      <div className="container">
        <div className="skill-content">
          <div className="platform-ring">
            <CircularCard isDark={props.isDark} />
            <div className="centre">
              <h3>My Skills</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skill;
