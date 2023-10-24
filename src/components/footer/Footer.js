import "../../assets/styles/footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footerc">
          <h3>Copyright © 2023. All rights reserved.</h3>
          <div className="footerc_socials">
            <a
              href="https://www.linkedin.com/in/ashutosh-singh-64b7371b1/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
            <a
              href="https://github.com/AshutoshSingh47"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
