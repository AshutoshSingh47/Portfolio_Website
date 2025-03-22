import { useState, useEffect } from "react";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Contact from "../contact/Contact";
import Footer from "../footer/Footer";
import { Link } from "react-scroll";
import "../../assets/styles/navbar/Navbar.css";
import TechStacks from "../tech_stacks";

function Navbar() {
  const [sticky, setSticky] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isDark, setisDark] = useState("");
  const [isActive, setisActive] = useState("");
  const [isHomeActive, setisHomeActive] = useState(true);
  const menuItems = [
    { id: 1, title: "Home" },
    { id: 2, title: "About" },
    { id: 3, title: "Skills" },
    { id: 4, title: "Projects" },
    { id: 5, title: "Contact" },
  ];

  function stickNavbar() {
    let windowHeight = window.scrollY;

    windowHeight > 20 ? setSticky("sticky") : setSticky("");
  }

  function manageActiveLinks(linkName) {
    if (linkName == "Home") {
      setisHomeActive(true);
    } else {
      setisHomeActive(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  useEffect(() => {
    document.body.style.backgroundColor = isDark ? "#282c34" : "";
    document.documentElement.classList.toggle("dark");
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, [isDark]);

  return (
    <>
      <navbar
        className={`navbar-top ${sticky} ${
          isDark ? "night-light-navbar-top" : ""
        }`}
      >
        <div
          className={`hamburger ${
            isOpen
              ? isDark
                ? "changeHamburgerColor"
                : "changeColor"
              : isDark
              ? "changeColor"
              : ""
          }`}
          onClick={() => setisOpen(!isOpen)}
        >
          <i className="bi bi-list"></i>
        </div>
        <div className={`App-logo ${isDark ? "dark-mode" : ""}`}>
          <span>Ashutosh Singh</span>
        </div>
        <ul
          className={`navbar-menu ${
            isDark ? "dark-mode changeHoverEffect" : ""
          } ${
            isOpen
              ? `responsive ${
                  isDark ? "changeMenuColor dark-mode-font changeLineColor" : ""
                }`
              : ""
          }`}
        >
          {menuItems.map((menu) => (
            <li key={menu.id} id={menu.id} className="navbar-item">
              <Link
                to={menu.title}
                spy={true}
                smooth={true}
                offset={-100}
                duration={300}
                className="links"
                onClick={() =>
                  `${isOpen ? setisOpen(!isOpen) : ""} ${setisActive(
                    menu.title
                  )} ${manageActiveLinks(menu.title)}`
                }
              >
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className={`extra-menu ${isDark ? "dark-mode" : ""}`}>
          <div
            className={`day-light ${isDark ? "dark" : ""} `}
            onClick={() => setisDark(!isDark)}
          >
            <i className="bi bi-brightness-high"></i>
            <i className="bi bi-moon"></i>
          </div>
        </div>
      </navbar>
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <TechStacks isDark={isDark} />
      <Projects isDark={isDark} />
      <Contact isDark={isDark} />
      <Footer />
    </>
  );
}

export default Navbar;
