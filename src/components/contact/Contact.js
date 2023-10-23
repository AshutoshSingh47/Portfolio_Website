import SubmitButton from "../buttons/SubmitButton";
import "../../assets/styles/contact/Contact.css";

function Contact(props) {
  return (
    <section className={`contact ${props.isDark ? "dark" : ""}`} id="Contact">
      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <div className="social-media-stack">
              <a
                href="https://www.instagram.com/ashu050502/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-instagram"></i>
              </a>
              <a
                href="mailto:ashutoshsingh.iimt@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-envelope"></i>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100043153356207"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-singh-64b7371b1/"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/AshutoshSingh47"
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="contact-form">
            <p>Contact Me</p>
            <form id="form" action="">
              <div className="input-box">
                <label for="name" className="focus-input">
                  <i class="bi bi-person"></i>
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="input-box">
                <label for="email">
                  <i class="bi bi-envelope-at"></i>
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                ></input>
              </div>
              <div className="input-box">
                <label for="message">
                  <i class="bi bi-chat"></i>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                ></textarea>
              </div>
            </form>
            <SubmitButton isDark={props.isDark} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
