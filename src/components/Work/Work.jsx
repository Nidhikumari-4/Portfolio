import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Work.scss";
import WorkData from "../../data/data";

const Work = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  const renderWork = (work) => {
    console.log(work);
    return (
      <div className="images_container">
        {work.map((work, id) => {
          return (
            <div className="image_box" key={id}>
              <img src={work.cover} className="work_image" alt="portfolio" />
              <div className="content">
                <p className="title">{work.title}</p>
                <h4 className="description">{work.description}</h4>
                <button className="btn" onClick={() => window.open(work.url)}>
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <>
      <div className="container work_page">
        <h1 className="page_title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={[
              "W",
              "o",
              "r",
              "k",
              "",
              "&",
              "",
              "E",
              "x",
              "p",
              "e",
              "r",
              "i",
              "e",
              "n",
              "c",
              "e",
            ]}
            idx={15}
          />
        </h1>

        <div>{renderWork(WorkData)}</div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Work;
