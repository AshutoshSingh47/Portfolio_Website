import "../../assets/styles/buttons/Button.css";

function Button(props) {
  return (
    <div className={`button-horizontal ${props.isDark ? "dark" : ""}`}>
      Download CV
      <i class="bi bi-download"></i>
    </div>
  );
}

export default Button;
