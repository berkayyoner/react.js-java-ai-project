import NavBar from "../../components/NavBar/NavBar";
import { translate } from "../../utils/translate";
import image from "../../assets/images/profile.png";
import "./Home.css";
import useLanguage from "../../hooks/useLanguage";

function Home() {
  const { lang, changeLang } = useLanguage();  

  return (
    <div className="home">
        <NavBar selectedButton="home" />
        <div className="cv">
          <div className="top-section">
            <h1 className="title">{translate(lang, "home.title")}</h1>
            <p className="description">{translate(lang, "home.description")}</p>
          </div>
          <div className="horizontal-line" />
            <div className="main-columns">

              <div className="column">
                <h2 className="title">{translate(lang, "home.education")}</h2>
                <ul className="list">
                  <li>
                    <h3 className="title">{translate(lang, "home.educationItem2")}</h3>
                    <p>{translate(lang, "home.educationItem2Description")}</p>
                    <p>2022 - 2024</p>
                  </li>
                  <li>
                    <h3 className="title">{translate(lang, "home.educationItem1")}</h3>
                    <p>{translate(lang, "home.educationItem1Description")}</p>
                    <p>2020 - 2022</p>
                  </li>
                </ul>
              </div>

              <a className="vertical-line"/>

              <div className="column">
                <h2 className="title">{translate(lang, "home.contact")}</h2>
                <div className="contact-section">
                  <div className="contact-item">
                    <h3 className="title">{translate(lang, "home.email")}</h3>
                    <a>berkayonerr2002@gmail.com</a>
                  </div>
                  <div className="contact-item">
                    <h3 className="title">{translate(lang, "home.linkedIn")}</h3>
                    <a href="https://www.linkedin.com/in/berkay-%C3%B6ner-a4599223a/" target="_blank" rel="noopener noreferrer" className="link">{translate(lang, "home.linkedInLink")}</a>
                  </div>
                </div>
              </div>

              <a className="vertical-line"/>

              <div className="column">
                <h2 className="title">{translate(lang, "home.experiences")}</h2>
                <ul>
                  
                </ul>
              </div>
            </div>
            <img src={image} alt="Profile" className="profile-pic" />
          </div>
    </div>
  );
}

export default Home;
