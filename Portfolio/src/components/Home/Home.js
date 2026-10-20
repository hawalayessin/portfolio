import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineArrowRight, AiOutlineMail, AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import myPhoto from "../../Assets/hawalaimg.png";
import ProjectCard from "../Projects/ProjectCards";
import { getProjects } from "../Projects/projectData";
import { useTranslation } from "../../i18n";

function Home() {
  const { t, lang } = useTranslation();
  const featured = getProjects(lang).filter(project => ["digmaco", "soa", "stadium"].includes(project.id));
  return (
    <>
      <section className="recruiter-hero" aria-labelledby="hero-name">
        <Container className="hero-layout">
          <div className="hero-copy">
            <p className="hero-eyebrow"><span aria-hidden="true" />{t("hero_eyebrow")}</p>
            <h1 id="hero-name">Yassine<br /><span>Ben Hawala.</span></h1>
            <p className="hero-role">{t("hero_role")}</p>
            <p className="hero-description">{t("hero_description")}</p>
            <div className="hero-actions">
              <Link className="portfolio-action action-primary" to="/project">{t("hero_projects")} <AiOutlineArrowRight aria-hidden="true" /></Link>
              <Link className="portfolio-action action-secondary" to="/resume">{t("hero_cv")}</Link>
              <a className="hero-contact" href="mailto:hawalayessin@gmail.com">{t("hero_contact")} <AiOutlineMail aria-hidden="true" /></a>
            </div>
            <ul className="hero-stack" aria-label={t("hero_stack")}>
              {["React", "FastAPI", "Node.js", "PostgreSQL", "Power BI"].map(skill => <li key={skill}>{skill}</li>)}
            </ul>
          </div>
          <figure className="hero-portrait">
            <img src={myPhoto} alt="Yassine Ben Hawala" width="360" height="420" loading="eager" decoding="async" />
            <figcaption><span>01 / SOFTWARE</span><span>02 / DATA & BI</span></figcaption>
          </figure>
        </Container>
      </section>
      <section className="featured-section" aria-labelledby="featured-heading">
        <Container>
          <div className="section-heading-row">
            <div><p className="section-eyebrow">{t("featured_eyebrow")}</p><h2 id="featured-heading">{t("featured_title")}</h2></div>
            <Link className="text-link" to="/project">{t("featured_all")} <AiOutlineArrowRight aria-hidden="true" /></Link>
          </div>
          <p className="section-intro">{t("featured_intro")}</p>
          <div className="featured-grid">
            {featured.map(project => <ProjectCard key={project.id} {...project} description={project.summary} />)}
          </div>
        </Container>
      </section>
      <section className="profile-overview" aria-labelledby="profile-heading">
        <Container className="profile-overview-grid">
          <div><p className="section-eyebrow">{t("profile_eyebrow")}</p><h2 id="profile-heading">{t("profile_title")}</h2><p>{t("profile_description")}</p><Link className="text-link" to="/about">{t("profile_more")} <AiOutlineArrowRight aria-hidden="true" /></Link></div>
          <div className="expertise-list">
            <article><span>01</span><div><h3>Full Stack</h3><p>{t("profile_web")}</p></div></article>
            <article><span>02</span><div><h3>BI & Data</h3><p>{t("profile_data")}</p></div></article>
          </div>
        </Container>
      </section>
      <section className="contact-section" aria-labelledby="contact-heading">
        <Container><p className="section-eyebrow">{t("contact_eyebrow")}</p><h2 id="contact-heading">{t("contact_title")}</h2><p>{t("contact_description")}</p><a className="contact-email" href="mailto:hawalayessin@gmail.com">hawalayessin@gmail.com <AiOutlineArrowRight aria-hidden="true" /></a><div className="contact-links"><a href="https://github.com/hawalayessin" target="_blank" rel="noreferrer"><AiFillGithub aria-hidden="true" /> GitHub</a><a href="https://www.linkedin.com/in/yessinbh" target="_blank" rel="noreferrer"><FaLinkedinIn aria-hidden="true" /> LinkedIn</a></div></Container>
      </section>
    </>
  );
}
export default Home;
