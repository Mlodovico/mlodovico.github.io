import React, { useEffect, useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineMail,
} from "react-icons/ai";
import { FiArrowUpRight, FiDownload, FiMenu, FiX } from "react-icons/fi";

import "./styles.css";

import ProfileImage from "../../assets/profile_image_square.jpeg";
import WorkImage from "../../assets/back-profile-image.jpeg";
import degree from "../../assets/degree.pdf";
import webCourseJavascript from "../../assets/webcourse-javascript.jpg";
import javaSpringDegree from "../../assets/java-spring-degree.pdf";
import swiftDegree from "../../assets/swift-degree.pdf";
import ResumeEn from "../../assets/resumeEn.pdf";
import Resume from "../../assets/resume-2026.pdf";

import { Card } from "../../components/Card";
import { LanguageSwitcher } from "../../components/LanguageSwitcher";

import { enUs } from "../../ling/en-us";
import { ptBR } from "../../ling/pt-br";
import { esES } from "../../ling/es-es";

const EMAIL = "contatomlodovico@yahoo.com";
const WHATSAPP = "https://wa.me/5519983230985";
const GITHUB = "https://github.com/Mlodovico";
const LINKEDIN = "https://www.linkedin.com/in/murilo-lodovico-509398167/";

const NAV = [
  { id: "about", key: "navAbout" },
  { id: "experience", key: "navExperience" },
  { id: "skills", key: "navSkills" },
  { id: "projects", key: "navProjects" },
  { id: "education", key: "navEducation" },
  { id: "contact", key: "navContact" },
];

const detectLang = () => {
  try {
    const saved = localStorage.getItem("portfolio-lang");
    if (saved === "pt") return ptBR;
    if (saved === "es") return esES;
    if (saved === "en") return enUs;
    const nav = navigator.language || "";
    if (nav.startsWith("pt")) return ptBR;
    if (nav.startsWith("es")) return esES;
    return enUs;
  } catch {
    return ptBR;
  }
};

function App() {
  const [ling, setLing] = useState(detectLang);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("about");

  const resumeFile = ling.code === "en" ? ResumeEn : Resume;

  const handleLang = (next) => {
    setLing(next);
    localStorage.setItem("portfolio-lang", next.code);
    setMenuOpen(false);
  };

  useEffect(() => {
    document.documentElement.lang =
      ling.code === "pt" ? "pt-BR" : ling.code === "es" ? "es" : "en";
    document.title = ling.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", ling.metaDescription);
  }, [ling]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "Petshop API",
      subtitle: ling.projects.petshop,
      link: "https://github.com/Mlodovico/petshop-backend-nest",
      tags: ["NestJS", "TypeORM", "MySQL"],
    },
    {
      title: "Check Ins",
      subtitle: ling.projects.checkIns,
      link: "https://github.com/Mlodovico/check-ins",
      tags: ["Java", "Spring Boot"],
    },
    {
      title: "Go Barber",
      subtitle: ling.projects.goBarber,
      link: "https://github.com/Mlodovico/goBarber",
      tags: ["React", "React Native", "Node"],
    },
    {
      title: "Git Hunter",
      subtitle: ling.projects.gitHunter,
      link: "https://github.com/Mlodovico/gitHunter",
      tags: ["React"],
    },
    {
      title: "Most Used Words",
      subtitle: ling.projects.mostUsedWords,
      link: "https://github.com/Mlodovico/most-used-words",
      tags: ["Vue.js"],
    },
    {
      title: "Habits",
      subtitle: ling.projects.habits,
      link: "https://github.com/Mlodovico/habits",
      tags: ["React"],
    },
  ];

  const courseLinks = [
    javaSpringDegree,
    webCourseJavascript,
    swiftDegree,
    null,
    null,
  ];

  const closeAndGo = () => setMenuOpen(false);

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        {ling.skipToContent}
      </a>

      <header className="nav">
        <div className="nav__inner">
          <a className="nav__logo" href="#top" onClick={closeAndGo}>
            ML
          </a>
          <nav className="nav__links" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "location" : undefined}
              >
                {ling[item.key]}
              </a>
            ))}
          </nav>
          <div className="nav__aside">
            <LanguageSwitcher current={ling} onChange={handleLang} />
            <a className="btn btn--ghost nav__resume" href={resumeFile} target="_blank" rel="noopener noreferrer">
              <FiDownload size={14} />
              {ling.resume}
            </a>
            <button
              className="nav__menu-btn"
              type="button"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              onClick={() => setMenuOpen((open) => !open)}
            >
              {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
              <span className="sr-only">
                {menuOpen ? ling.closeMenu : ling.openMenu}
              </span>
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div
          className="mobile-menu"
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={ling.openMenu}
        >
          <nav>
            {NAV.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeAndGo}>
                {ling[item.key]}
              </a>
            ))}
          </nav>
          <LanguageSwitcher current={ling} onChange={handleLang} />
        </div>
      )}

      <main id="main">
        <section className="hero" id="top">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="pulse" aria-hidden="true" />
              {ling.currentBadge} · {ling.availability}
            </p>
            <h1>
              Murilo
              <span>Lodovico</span>
            </h1>
            <p className="hero__role">{ling.role}</p>
            <p className="hero__lead">{ling.heroLead}</p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#experience">
                {ling.ctaExperience}
              </a>
              <a
                className="btn btn--ghost"
                href={resumeFile}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiDownload size={16} />
                {ling.ctaResume}
              </a>
              <a className="btn btn--text" href="#contact">
                {ling.ctaContact}
                <FiArrowUpRight size={16} />
              </a>
            </div>
          </div>
          <div className="hero__visual">
            <img
              src={ProfileImage}
              alt="Retrato ilustrado de Murilo Lodovico"
            />
          </div>
        </section>

        <section className="stats" aria-label="Highlights">
          <article>
            <strong>{ling.statYears}</strong>
            <span>{ling.statYearsLabel}</span>
          </article>
          <article>
            <strong>{ling.statStack}</strong>
            <span>{ling.statStackLabel}</span>
          </article>
          <article>
            <strong>{ling.statWork}</strong>
            <span>{ling.statWorkLabel}</span>
          </article>
        </section>

        <section className="section" id="about">
          <div className="section__head">
            <p className="eyebrow">{ling.aboutEyebrow}</p>
            <h2>{ling.aboutTitle}</h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p>{ling.aboutP1}</p>
              <p>{ling.aboutP2}</p>
              <p>{ling.aboutP3}</p>
            </div>
            <figure className="about-photo">
              <img
                src={WorkImage}
                alt="Murilo trabalhando no notebook em um ambiente remoto"
              />
            </figure>
          </div>
          <h3 className="subsection-title">{ling.principlesTitle}</h3>
          <div className="principles">
            {ling.principles.map((item) => (
              <article key={item.title}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section__head">
            <p className="eyebrow">{ling.experienceEyebrow}</p>
            <h2>{ling.experienceTitle}</h2>
          </div>
          <ol className="timeline">
            {ling.experience.map((job) => (
              <li key={`${job.company}-${job.period}`}>
                <p className="timeline__period">{job.period}</p>
                <span className="timeline__dot" aria-hidden="true" />
                <div className="timeline__body">
                  <h3>{job.company}</h3>
                  <p className="timeline__role">{job.role}</p>
                  <p>{job.description}</p>
                  <ul>
                    {job.tags.map((tag) => (
                      <li key={tag}>{tag}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="section" id="skills">
          <div className="section__head">
            <p className="eyebrow">{ling.skillsEyebrow}</p>
            <h2>{ling.skillsTitle}</h2>
          </div>
          <div className="skills-grid">
            {ling.skillGroups.map((group) => (
              <article key={group.title}>
                <h3>{group.title}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section__head">
            <p className="eyebrow">{ling.projectsEyebrow}</p>
            <h2>{ling.projectsTitle}</h2>
            <p className="section__intro">{ling.projectsIntro}</p>
          </div>
          <div className="cards-grid">
            {projects.map((project) => (
              <Card
                key={project.title}
                title={project.title}
                subtitle={project.subtitle}
                link={project.link}
                tags={project.tags}
                cta={ling.viewProject}
              />
            ))}
          </div>
        </section>

        <section className="section" id="education">
          <div className="section__head">
            <p className="eyebrow">{ling.educationEyebrow}</p>
            <h2>{ling.educationTitle}</h2>
          </div>
          <div className="education-grid">
            <a
              className="degree-card"
              href={degree}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="eyebrow">{ling.degreeLabel}</p>
              <h3>{ling.degreeTitle}</h3>
              <p className="degree-card__meta">
                {ling.degreeSchool} · {ling.degreePeriod}
              </p>
              <p>{ling.degreeDescription}</p>
              <span className="project-card__cta">{ling.viewCertificate}</span>
            </a>
            <div>
              <h3 className="subsection-title">{ling.coursesTitle}</h3>
              <ul className="course-list">
                {ling.courses.map((course, index) => {
                  const href = courseLinks[index];
                  const content = (
                    <>
                      <strong>{course.title}</strong>
                      <span>{course.subtitle}</span>
                    </>
                  );
                  return (
                    <li key={course.title}>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer">
                          {content}
                        </a>
                      ) : (
                        <div>{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
              <div className="spoken">
                <h3 className="subsection-title">{ling.languagesTitle}</h3>
                <p>{ling.langEnglish}</p>
                <p>{ling.langSpanish}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section__head">
            <p className="eyebrow">{ling.contactEyebrow}</p>
            <h2>{ling.contactTitle}</h2>
            <p className="section__intro">{ling.contactLead}</p>
          </div>
          <div className="contact__actions">
            <a className="btn btn--primary" href={`mailto:${EMAIL}`}>
              <AiOutlineMail size={18} />
              {ling.contactEmail}
            </a>
            <a
              className="btn btn--ghost"
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ling.contactWhatsapp}
            </a>
            <a
              className="btn btn--ghost"
              href={LINKEDIN}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={18} />
              LinkedIn
            </a>
            <a
              className="btn btn--ghost"
              href={GITHUB}
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub size={18} />
              GitHub
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Murilo Lodovico · {ling.footer}</p>
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;
