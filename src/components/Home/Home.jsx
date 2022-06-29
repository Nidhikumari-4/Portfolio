import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoTitle from "../../assets/images/logo-n.png";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
// import Logo from "./Logo/Logo";
import LogoN from "../../assets/images/logo-n.png";
import "./Home.scss";
import Loader from "react-loaders";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text_animate");
  const nameArray = ["i", "d", "h", "i", ","];
  const jobArray = [
    "w",
    "e",
    "b",
    " ",
    "d",
    "e",
    "v",
    "e",
    "l",
    "o",
    "p",
    "e",
    "r",
    ".",
  ];

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home_page">
        <div className="text_zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="developer" />

            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Front End Developer</h2>
          <Link to="/contact" className="flat_button">
            CONTACT ME
          </Link>
        </div>
      </div>
      <div className="logo_container">
        <img className="solid_logo" src={LogoN} alt="Nidhi" />
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Home;
