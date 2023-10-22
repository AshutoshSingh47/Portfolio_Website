import "../../assets/styles/buttons/DownloadButton.css";

function DownloadButton(props) {
  return (
    <div className={`button-horizontal ${props.isDark ? "dark" : ""}`}>
      Download CV
      <i class="bi bi-download"></i>
    </div>
  );
}

export default DownloadButton;
