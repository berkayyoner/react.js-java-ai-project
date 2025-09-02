import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { translate } from "../../utils/translate";
import LanguageDropdown from "../LanguageDropdown/LanguageDropdown";
import useLanguage from "../../hooks/useLanguage";
import "./NavBar.css";
import logo from "../../assets/images/logo.png";

function NavBar({ selectedButton }) {
  const [highlightedButton, setHighlightedButton] = useState(null);
  const { lang, changeLang } = useLanguage();

  console.log("DEBUG LANG:", lang);

  useEffect(() => {
    setHighlightedButton(selectedButton);
  }, [selectedButton]);

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul>
        <li className={highlightedButton === "home" ? "navbar-highlighted" : ""}>
          <Link to="/">{translate(lang, "home")}</Link>
        </li>
        <li className={highlightedButton === "ai" ? "navbar-highlighted" : ""}>
          <Link to="/ai">{translate(lang, "ai")}</Link>
        </li>
        <li className={highlightedButton === "projects" ? "navbar-highlighted" : ""}>
          <Link to="/projects">{translate(lang, "projects")}</Link>
        </li>
        <li className={highlightedButton === "contact" ? "navbar-highlighted" : ""}>
          <Link to="/contact">{translate(lang, "contact")}</Link>
        </li>
        <li className={highlightedButton === "login" ? "navbar-highlighted" : ""}>
          <Link to="/login">{translate(lang, "login")}</Link>
        </li>
      </ul>

      {/* Language Selection */}
      <LanguageDropdown lang={lang} onChange={changeLang} />
    </div>
  );
}

export default NavBar;
