import "../../assets/styles/buttons/DownloadButton.css";
import Resume from "../../assets/myCV/Web_Dev_Resume.pdf";

function DownloadButton(props) {
  return (
    <a className={`button-horizontal ${props.isDark ? "dark" : ""}`} href={Resume} download="Ashutosh_Singh_Resume">Download CV
      <i class="bi bi-download"></i>
    </a>
  );
}

export default DownloadButton;
