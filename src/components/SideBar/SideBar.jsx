import { Link, NavLink } from "react-router-dom";
import LogoN from "../../assets/images/logo-n.png";
import LogoSubtitle from "../../assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUser,
  faEnvelope,
  faCog,
  faBriefcase,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
  faTwitter,
  faDiscord,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./SideBar.scss";

const SideBar = () => {
  return (
    <div className="nav_bar">
      <Link className="logo" to="/">
        <img src={LogoN} alt="logo" />
        <img src={LogoSubtitle} alt="Nidhi" className="sub_logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} />
        </NavLink>

        <NavLink activeclassname="active" to="/about" className="about_link">
          <FontAwesomeIcon icon={faUser} />
        </NavLink>

        <NavLink activeclassname="active" to="/skills" className="skills_link">
          <FontAwesomeIcon icon={faCog} />
        </NavLink>

        <NavLink activeclassname="active" to="/work" className="work_link">
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>

        <NavLink
          activeclassname="active"
          to="/contact"
          className="contact_link"
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
      </nav>

      <ul>
        <li>
          <a href="https://www.linkedin.com/in/nidhikumari-4/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>

        <li>
          <a href="https://github.com/Nidhikumari-4" target="_blank">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </li>

        <li>
          <a href="https://twitter.com/nidhikumari_4" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>

        <li>
          <a href="https://instagram.com/nidhii.singh._" target="_blank">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>

        <li>
          <a
            href="https://discordapp.com/users/788763471990226984"
            target="_blank"
          >
            <FontAwesomeIcon icon={faDiscord} />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
