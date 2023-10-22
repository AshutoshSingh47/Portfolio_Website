import "../../assets/styles/buttons/SubmitButton.css";

function SubmitButton(props) {
  return (
    <div className={`submit-button-horizontal ${props.isDark ? "dark" : ""}`}>
      Submit
      <i class="bi bi-send"></i>
    </div>
  );
}

export default SubmitButton;
