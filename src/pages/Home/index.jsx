import React, { useState } from "react";

import { Player } from "@lottiefiles/react-lottie-player";

import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineFileText,
  AiOutlineInstagram,
} from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";
import { GrDocumentPdf } from "react-icons/gr";

import "./styles.css";

import develop1 from "../../assets/develop_1.json";
import ProfileImage from "../../assets/profile_image_square.jpeg";
import ProfileFrontImage from "../../assets/back-profile-image.jpeg";
import degree from "../../assets/degree.pdf";
import webCourseJavascript from "../../assets/webcourse-javascript.jpg";
import javaSpringDegree from "../../assets/java-spring-degree.pdf";
import javaSpringDatabaseDegree from "../../assets/completed-java-curse.pdf";
import swiftDegree from "../../assets/swift-degree.pdf";
import ResumeEn from "../../assets/resumeEn.pdf";
import Resume from "../../assets/resume.pdf";

import { Card } from "../../components/Card";
import { OptionsModal } from "../../components/OptionsModal";

import { enUs } from "../../ling/en-us";

function App() {
  const [ling, setLing] = useState(enUs);
  const [toggleModal, setToggleModal] = useState(false);

  const handleSwitchBetweenLanguages = (langSelected) => {
    setLing(langSelected);
  };

  const handleToggleResume = () => {
    if (ling.type !== "English") {
      return Resume;
    } else {
      return ResumeEn;
    }
  };

  const techs = [
    "React",
    "React Native",
    "Node",
    "Angular",
    "Swift",
    "Java",
    "Python",
    "JavaScript",
    "Typescript",
    "Nest",
    "NextJS",
    "Multicloud",
    "Docker",
    "Git",
    "MySQL",
    "MongoDB",
    "Swagger",
    "EC2",
    "S3",
  ];

  const projects = [
    {
      title: "Petshop API",
      subtitle: ling.petshopDescription,
      link: "https://github.com/Mlodovico/petshop-backend-nest",
    },
    {
      title: "Check Ins",
      subtitle: ling.checkInsDescription,
      link: "https://github.com/Mlodovico/check-ins",
    },
    {
      title: "Go Barber",
      subtitle: ling.goBarberDescription,
      link: "https://github.com/Mlodovico/goBarber",
    },
    {
      title: "Git Hunter",
      subtitle: ling.gitHunterDescription,
      link: "https://github.com/Mlodovico/gitHunter",
    },
    {
      title: "Most Used Words",
      subtitle: ling.mostUsedWorldsDescription,
      link: "https://github.com/Mlodovico/most-used-words",
    },
    {
      title: "Habits",
      subtitle: ling.habitsDescription,
      link: "https://github.com/Mlodovico/habits",
    },
  ];

  const degrees = [
    {
      title: ling.degree,
      subtitle: ling.degreeDescription,
      link: degree,
    },
    {
      title: "Web Course",
      subtitle: ling.webCourseDegreeDescription,
      link: webCourseJavascript,
    },
    {
      title: "Swift",
      subtitle: ling.swiftDegreeDescription,
      link: swiftDegree,
    },
    {
      title: "Java Spring",
      subtitle: ling.javaSpringDegreeDescription,
      link: javaSpringDegree,
    },
    {
      title: "Java Spring Database",
      subtitle: ling.javaSpringDatabaseDegreeDescription,
      link: javaSpringDatabaseDegree,
    },
    {
      title: "IntelliJ IDEA Tricks",
      subtitle: ling.intelliJCourseDescription,
      link: degree,
    },
  ];

  return (
    <div className="App">
      <div className="container">
        <div className="category-sector">
          <div>
            <div className="data-sector">
              <img
                className="profile-image"
                src={ProfileImage}
                alt="Profile_Image"
              />
              <div>
                <p>Murilo Lodovico</p>
                <p>{ling.firtsSubtitle}</p>
                <p>{ling.yearsOld}</p>
                <p>Campinas - SP/Brasil</p>
              </div>
            </div>

            <div className="separator" />

            <h4 className="title">{ling.socialMedia}</h4>
            <div className="list">
              <a href="https://github.com/Mlodovico">
                <AiFillGithub
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                Github
              </a>
              <a href="https://www.linkedin.com/in/murilo-lodovico-509398167/">
                <AiFillLinkedin
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                Linkedin
              </a>
              <a href={handleToggleResume()}>
                <AiOutlineFileText
                  style={{ marginRight: 5, verticalAlign: "middle" }}
                />
                {ling.resume}
              </a>
            </div>

            <div className="separator" />

            <h4 className="title">{ling.knowledges}</h4>
            <div className="knowledge">
              {techs.map((tech) => (
                <p key={tech}>{tech}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="mobile-sector-only">
          <img
            className="profile-image"
            src={ProfileImage}
            alt="Profile-Image"
          />
          <div className="profile-text">
            <h4>Murilo Lodovico</h4>
            <p>{ling.firtsSubtitle}</p>
            <div className="profile-list">
              <a
                className="link"
                style={{ background: "black" }}
                href="https://github.com/Mlodovico"
              >
                <span>
                  <AiFillGithub size={20} style={{ marginRight: 5 }} /> Github
                </span>
              </a>
              <a
                className="link"
                href="https://www.linkedin.com/in/murilo-lodovico-509398167/"
              >
                <span>
                  <AiFillLinkedin size={20} style={{ marginRight: 5 }} />{" "}
                  Linkedin
                </span>
              </a>
              <a
                style={{
                  background: "#833ab4",
                }}
                className="link"
                href="https://instagram.com/mlodovico?igshid=OGQ5ZDc2ODk2ZA=="
              >
                <span>
                  <AiOutlineInstagram size={20} style={{ marginRight: 5 }} />{" "}
                  Instagram
                </span>
              </a>
            </div>
          <div>
            <a
              className="resume-link"
              href={handleToggleResume()}
            >
              <span>
                <GrDocumentPdf size={20} style={{ marginRight: 5 }} />{" "}
                {ling.resume}
              </span>
            </a>
          </div>
          </div>
          <div className="options-div">
            <button
              className="options-button"
              onClick={() => setToggleModal(!toggleModal)}
            >
              <FiAlignJustify size={30} />
            </button>
          </div>

          {toggleModal && (
            <OptionsModal language={handleSwitchBetweenLanguages} />
          )}
        </div>

        <div className="body-sector">
          <div className="options-div-web">
            <button
              className="options-button"
              onClick={() => setToggleModal(!toggleModal)}
            >
              <FiAlignJustify size={30} />
            </button>
            {toggleModal && window.innerWidth >= 1000 && (
              <OptionsModal language={handleSwitchBetweenLanguages} />
            )}
          </div>

          <h3 className="title-body">{ling.portfolio}</h3>
          <p>{ling.secondDivFirstSubtitle}</p>
          <p>{ling.secondDivFirstParagraph}</p>

          <Player src={develop1} className="player" loop autoplay />

          <p>{ling.secondDivSecondParagraph}</p>
          <div className="profile-front-image-view">
            <img
              className="profile-image"
              src={ProfileFrontImage}
              alt="Profile_Image"
            />
          </div>

          <div className="certificacion-container">
            <p>{ling.firstScrollviewCardCardTitle}</p>
            <div className="card">
              {projects.map((project, index) => (
                <Card
                  key={index}
                  title={project.title}
                  subtitle={project.subtitle}
                  link={project.link}
                />
              ))}
            </div>
          </div>
          <div className="certificacion-container">
            <p>{ling.secondScrollviewCardTitle}</p>
            <div className="card">
              {degrees.map((degree, index) => (
                <Card
                  key={index}
                  title={degree.title}
                  subtitle={degree.subtitle}
                  link={degree.link}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
