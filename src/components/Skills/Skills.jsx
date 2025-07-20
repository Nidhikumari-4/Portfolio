import React from "react";
import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import "./Skills.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faBootstrap,
  faSass,
  faGithub,
  faFigma,
  faAngular,
  faNodeJs,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";

const Skills = () => {
  const [letterClass, setLetterClass] = useState("text_animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text_animate_hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container skills_page">
        <div className="text_zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={["S", "k", "i", "l", "l", "s"]}
              idx={15}
            />
          </h1>
          <p>
            Proficient in modern frontend technologies such as {" "}
            <span class="tech_tag">React.js</span>,
            <span class="tech_tag">Next.js</span>,
            <span class="tech_tag">Angular</span>,
            and styling frameworks including {" "}
            <span class="tech_tag">Tailwind CSS</span>,
            <span class="tech_tag">Bootstrap</span>,
            <span class="tech_tag">Sass/SCSS</span>,
            <span class="tech_tag">Material UI</span>.
          </p>

          <p>
            Skilled in backend development using {" "}
            <span class="tech_tag">Node.js</span> with {" "}
            <span class="tech_tag">MongoDB</span> and {" "}
            <span class="tech_tag">PostgreSQL</span>, and experienced in integrating cloud platforms like {" "}
            <span class="tech_tag">Firebase</span> and {" "}
            <span class="tech_tag">Vercel</span> for seamless deployment and scalability.
          </p>

          <p>
            Strong programming foundation in {" "}
            <span class="tech_tag">C++</span>, {" "}
            <span class="tech_tag">Java</span>, {" "}
            <span class="tech_tag">JavaScript</span>, {" "}
            <span class="tech_tag">TypeScript</span>, and {" "}
            <span class="tech_tag">Python</span>. Adapt at using tools such as {" "}
            <span class="tech_tag">Git</span>, {" "}
            <span class="tech_tag">GitHub</span>, {" "}
            <span class="tech_tag">Postman</span>, {" "}
            <span class="tech_tag">Figma</span>, and {" "}
            <span class="tech_tag">VS Code</span> to support collaborative development and efficient workflow.
          </p>

          <p>
            Also familiar with {" "}
            <span class="tech_tag">React Native</span> for cross-platform mobile development.
          </p>

          <p>
            Visit my
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nidhikumari-4/" rel="noreferrer"
            >
              {" "}
              LinkedIn{" "}
            </a>
            and
            <a target="_blank" href="https://github.com/Nidhikumari-4" rel="noreferrer">
              {" "}
              Github{" "}
            </a>
            profile for more details.
          </p>
        </div>

        <div className="logos_container">
          <div className="logos">
            <p>
              <FontAwesomeIcon icon={faBootstrap} color="#8F0DFF" />
            </p>
            <p>
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </p>
            <p>
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </p>
            <p>
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </p>
            <p>
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </p>
            <p>
              <FontAwesomeIcon icon={faSass} color="#CD6799" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </p>
            <p>
              <FontAwesomeIcon icon={faGithub} color="#050505" />
            </p>
            <p>
              <FontAwesomeIcon icon={faNodeJs} color="#68A063" />
            </p>
            <p>
              <FontAwesomeIcon icon={faAngular} color="#8A3324" />
            </p>
            <p>
              <FontAwesomeIcon icon={faFigma} color="#fff" />
            </p>
            <p>
              <FontAwesomeIcon icon={faStackOverflow} color="#cc5500" />
            </p>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};

export default Skills;
