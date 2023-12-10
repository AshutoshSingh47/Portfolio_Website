import htmlLogo from "../../assets/icons/html-logo-96.svg";
import cssLogo from "../../assets/icons/css-logo.svg";
import javascriptLogo from "../../assets/icons/javascript-logo.svg";
import reactLogo from "../../assets/images/logo192.png";
import javaLogo from "../../assets/icons/java.svg";
import androidLogo from "../../assets/icons/android.svg";
import sasslogo from "../../assets/icons/sass-logo.svg";
import typescriptlogo from "../../assets/icons/typescript-logo.svg";
import mongodblogo from "../../assets/icons/mongodb-logo.svg";
import tailwindcsslogo from "../../assets/icons/tailwindcss-logo.svg";
import nodejslogo from "../../assets/icons/nodejs-logo.svg";

import "../../assets/styles/cards/CircularCard.css";

function CircularCard(props) {
  const boxStyles = {
    "--i1": 1,
    "--i2": 2,
    "--i3": 3,
    "--i4": 4,
    "--i5": 5,
    "--i6": 6,
    "--i7": 7,
    "--i8": 8,
    "--i9": 9,
    "--i10": 10,
    "--i11": 11,
  };

  return (
    <ul className={`icon ${props.isDark ? "dark" : ""}`}>
      <li className="box" style={{ "--i": boxStyles["--i1"] }}>
        <img src={htmlLogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i2"] }}>
        <img src={cssLogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i3"] }}>
        <img src={javascriptLogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i4"] }}>
        <img src={typescriptlogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i5"] }}>
        <img src={reactLogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i6"] }}>
        <img src={tailwindcsslogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i7"] }}>
        <img src={sasslogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i8"] }}>
        <img src={nodejslogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i9"] }}>
        <img src={mongodblogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i10"] }}>
        <img src={javaLogo} alt="html"></img>
      </li>
      <li className="box" style={{ "--i": boxStyles["--i11"] }}>
        <img src={androidLogo} alt="html"></img>
      </li>
    </ul>
  );
}

export default CircularCard;
