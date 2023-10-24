import "../../assets/styles/cards/ProjectCards.css";

import EComMinimalistScreenshot from "../../assets/images/e-com_minimalist_screenshot.webp";
import PGLifeWebsite from "../../assets/images/PG_Life_Website.jpg";
import FitNationX from "../../assets/images/FitNationX.jpeg";
import Meme_Sharing_App from "../../assets/images/Meme_Sharing_App.png";

function ProjectCards(props) {
  return (
    <div className={`projects-grid ${props.isDark ? "dark" : ""}`}>
      <div className="pro pro_1 undefined">
        <div className="pro_img">
          <a
            href="https://minimalist-e-commerce.vercel.app/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={EComMinimalistScreenshot}
              className="E_Com_Minimalist_Website_img"
            ></img>
          </a>
        </div>
        <div className="pro_text">
          <h3>
            Ecommerce
            <span className="date-class">(October 2023)</span>
            🛒
          </h3>
          <p>
            With a focus on simplicity and clean design, this store prioritize
            user experience, making it easy for customers to find and purchase
            the products they need.
          </p>
          <div className="stack">
            <p>React</p>
            <p>Vanilla CSS</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/AshutoshSingh47/Minimalist-E-Commerce"
              target="_blank"
              rel="noreferrer"
            >
              Code
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://minimalist-e-commerce.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pro pro_1 reversed-proj">
        <div className="pro_img">
          <a
            href="https://ashutoshsingh47.github.io/PG_Life/home.html"
            target="_blank"
            rel="noreferrer"
          >
            <img src={PGLifeWebsite} className="PG_Life_Website_img"></img>
          </a>
        </div>
        <div className="pro_text">
          <h3>
            PG Life
            <span className="date-class">(September 2023)</span>
            🏠
          </h3>
          <p>
            The PG Life Website is an innovative front-end project dedicated to
            simplifying the search for ideal Paying Guest accommodations.
          </p>
          <div className="stack">
            <p>JavaScript</p>
            <p>Bootstrap</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/AshutoshSingh47/PG_Life"
              target="_blank"
              rel="noreferrer"
            >
              Code
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://ashutoshsingh47.github.io/PG_Life/home.html"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pro pro_1 undefined">
        <div className="pro_img">
          <a
            href="https://github.com/AshutoshSingh47/E-Commerce"
            target="_blank"
            rel="noreferrer"
          >
            <img src={FitNationX} className="FitNationX_Website_img"></img>
          </a>
        </div>
        <div className="pro_text">
          <h3>
            FitNationX
            <span className="date-class">(May 2023)</span>
            🏋️
          </h3>
          <p>
            FitNationX is a comprehensive resource for fitness information,
            membership options, and an ECommerce platform for gym equipments and
            supplements to help users achieve their fitness goals.
          </p>
          <div className="stack">
            <p>PHP</p>
            <p>MySQL</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/AshutoshSingh47/E-Commerce"
              target="_blank"
              rel="noreferrer"
            >
              Code
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="pro pro_1 reversed-proj">
        <div className="pro_img" id="meme_sharing_project_img">
          <a
            href="https://appetize.io/app/vxjjun2p5zbku7wewbrtnuc2ee?device=pixel4&osVersion=11.0&scale=75"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={Meme_Sharing_App}
              className="Meme_Sharing_App_image"
            ></img>
          </a>
        </div>
        <div className="pro_text">
          <h3>
            Meme Sharing
            <span className="date-class">(February 2023)</span>
            😆
          </h3>
          <p>
            Meme Sharing is a dynamic app where humor knows no bounds. Discover
            a world of laughter as you explore, create, and share hilarious
            memes instantly. Connect with friends, spark conversations, and
            spread joy, all with a tap!
          </p>
          <div className="stack">
            <p>Java</p>
            <p>Volley library</p>
          </div>
          <div className="project-links">
            <a
              href="https://github.com/AshutoshSingh47/Meme_Sharing_App"
              target="_blank"
              rel="noreferrer"
            >
              Code
              <i className="bi bi-github"></i>
            </a>
            <a
              href="https://appetize.io/app/vxjjun2p5zbku7wewbrtnuc2ee?device=pixel4&osVersion=11.0&scale=75"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
              <i className="bi bi-box-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
