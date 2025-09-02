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
        <h1>Hello, I'm Berkay Öner 👋</h1>
        <p>It's my portfolio website.</p>
        <img src={image} alt="Profile" className="profile-pic" />
    </div>
  );
}

export default Home;
