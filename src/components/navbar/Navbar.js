import logo from "../../assets/icons/logo.svg";
import { useState, useEffect } from "react";
import Home from "../home/Home";
import About from "../about/About";
import Skill from "../skills/Skill";
import Projects from "../projects/Projects";
import { Link } from "react-scroll";

import "../../assets/styles/navbar/Navbar.css";

function Navbar() {
  const [sticky, setSticky] = useState("");
  const [isOpen, setisOpen] = useState(false);
  const [isDark, setisDark] = useState("");
  const [isActive, setisActive] = useState("");
  const [isSearch, setisSearch] = useState("");
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
        <img src={logo} className="App-logo" alt="logo"></img>
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
            <li
              id={menu.id}
              className={`navbar-item ${
                menu.title == "Home" ? (isHomeActive ? "active" : "") : ""
              }${
                isActive == menu.title
                  ? isActive != "Home"
                    ? "active"
                    : ""
                  : ""
              }`}
            >
              <a href={`${menu.title}`} className="links"></a>
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
          <div
            className={`search-button ${isSearch ? "dark" : ""}`}
            onClick={() => setisSearch(!isSearch)}
          >
            <i className="bi bi-search search"></i>
            <i class="bi bi-x-lg"></i>
            <div
              className={`search-bar ${isDark ? "dark" : ""}`}
              onClick={(e) => e.stopPropagation()}
            >
              <input type="text" id="text" placeholder="Search..."></input>
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>
      </navbar>
      <Home isDark={isDark} />
      <About isDark={isDark} />
      <Skill isDark={isDark} />
      <Projects isDark={isDark} />
    </>
  );
}

export default Navbar;
