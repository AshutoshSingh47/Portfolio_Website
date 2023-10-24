import "../../assets/styles/buttons/SubmitButton.css";

function SubmitButton(props) {
  return (
    <button
      type="submit"
      className={`submit-button-horizontal ${props.isDark ? "dark" : ""}`}
    >
      Send
      <i className="bi bi-send"></i>
    </button>
  );
}

export default SubmitButton;
