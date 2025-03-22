import { useRef, useState } from "react";
import SubmitButton from "../buttons/SubmitButton";
import Toast from "../toast_notification/Toast";
import "../../assets/styles/contact/Contact.css";

import emailjs, { send } from "@emailjs/browser";

function Contact(props) {
  const form = useRef();

  const [isProgress, setisProgress] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zawv8tp",
        "template_w7ymaqj",
        form.current,
        "sSEdNW_wtiwERy7Gn"
      )
      .then(
        (result) => {
          e.target.reset();
          setisProgress("success");
        },
        (error) => {
          console.log(error.text);
          setisProgress("failure");
        }
      );
  };

  return (
    <section className={`contact ${props.isDark ? "dark" : ""}`} id="Contact">
      <div className="container flex flex-col-reverse md:flex-row">
        <div className="flex flex-col flex-1 gap-6 py-10">
          <h1 className="text-4xl text-[var(--heading-color)] font-semibold">
            Contact Me
          </h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-3">
              <a
                className="font-medium dark:text-white hover:underline hover:underline-offset-2 w-fit"
                href="mailto:ashu050502@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                Email : ashu050502@gmail.com
              </a>
              <div className="flex gap-3 text-gray-500 dark:text-white">
                <a
                  href="https://www.linkedin.com/in/ashutoshsinghdeveloper/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-linkedin text-xl"></i>
                </a>
                <a
                  href="https://github.com/AshutoshSingh47"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="bi bi-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-content w-full md:w-1/2">
          <div className="contact-form">
            <p>Get in Touch</p>
            <span>Let’s collaborate. Get in touch today!</span>
            <form
              id="form"
              action="./"
              method="POST"
              ref={form}
              onSubmit={sendEmail}
            >
              <div className="input-box">
                <label
                  for="name"
                  className="absolute top-1/2 -translate-y-2/4 left-4"
                >
                  <i className="bi bi-person"></i>
                </label>
                <input
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Name"
                  required
                ></input>
              </div>
              <div className="input-box">
                <label
                  for="email"
                  className="absolute top-1/2 -translate-y-2/4 left-4"
                >
                  <i className="bi bi-envelope-at"></i>
                </label>
                <input
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Email"
                  required
                ></input>
              </div>
              <div className="input-box">
                <label for="message" className="absolute top-4 left-4">
                  <i className="bi bi-chat"></i>
                </label>
                <textarea
                  name="message"
                  id="message"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>
              <SubmitButton isDark={props.isDark} />
            </form>
          </div>
          <Toast
            isDark={props.isDark}
            isProgress={isProgress}
            setisProgress={setisProgress}
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
