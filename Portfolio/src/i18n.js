import React, { createContext, useContext, useState } from "react";

const translations = {
  fr: {
    // Navbar
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_projects: "Projets",
    nav_resume: "CV",

    // Home
    home_greeting: "Bonjour !",
    home_iam: "JE SUIS",
    home_find_me: "Retrouvez-moi sur",
    home_connect: "N'hésitez pas à",
    home_connect2: "me contacter",

    // Home2 intro
    home2_title: "PERMETTEZ-MOI DE ME",
    home2_title_purple: "PRÉSENTER",
    home2_body1:
      "Ingénieur en Génie Informatique, diplômé de l'",
    home2_body1_purple: "École Polytechnique de Sousse",
    home2_body1b: " en ",
    home2_body1c_purple: "Business Intelligence",
    home2_body1d: ", avec un parcours en Génie Logiciel et Systèmes d'Information à l'",
    home2_body1e_purple: "ISIMM",
    home2_body1f: ".",
    home2_body2: "Je développe des solutions combinant ",
    home2_body2_purple: "Software Engineering, Data Analytics et Business Intelligence",
    home2_body2b: ", de la conception de pipelines ETL et d'API à la création de dashboards et d'interfaces modernes. Je travaille principalement avec ",
    home2_body2c_purple: "Python, FastAPI, React, PostgreSQL, SQL, Power BI et Docker",
    home2_body2d: ", avec un intérêt particulier pour la data, l'optimisation des processus et l'intelligence artificielle.",

    // About
    about_title: "Qui",
    about_title_purple: "suis-je ?",
    about_card_intro: "Bonjour ! Je suis",
    about_card_from: "de",
    about_card_from_city: "Monastir, Tunisie",
    about_card_job: "Ingénieur en Génie Informatique",
    about_card_school: "École Polytechnique de Sousse",
    about_card_track: "Business Intelligence",
    about_card_hobbies: "En dehors du code, j'aime :",
    about_card_h1: "Football & Sports ⚽",
    about_card_h2: "Musique & Culture 🎵",
    about_card_h3: "Voyages & Découvertes 🌍",
    about_card_quote: '"Les données sont la boussole de la décision."',
    about_education_title: "Formation",
    about_experience_title: "Expérience",
    about_certifications_title: "Certifications",
    about_education_1_year: "2023 – 2026",
    about_education_1_title: "Diplôme National d'Ingénieur en Génie Informatique",
    about_education_1_place:
      "École Polytechnique de Sousse (EPS), option Business Intelligence",
    about_education_2_year: "2020 – 2023",
    about_education_2_title: "Licence — Génie Logiciel & Systèmes d'Information",
    about_education_2_place: "ISIMM, Monastir, Tunisie",
    about_experience_1_year: "2025 – 2026",
    about_experience_1_title: "DigMaco Analytics — PFE",
    about_experience_1_desc: "Plateforme analytics full-stack · FastAPI · React · ML · Google Gemini",
    about_experience_2_year: "Juin – Août 2024",
    about_experience_2_title: "SEO Locale — Stage",
    about_experience_2_desc: "Symfony · React TypeScript · Google Business API",
    about_experience_3_year: "Jan – Juin 2023",
    about_experience_3_title: "NeuralBey — Stage",
    about_experience_3_desc: "E-learning · Symfony · ReactJS · Node.js",
    about_cert_1_year: "2026",
    about_cert_1_title: "Data Analytics — IT Specialist",
    about_cert_1_desc: "CertNexus / Certiport — Pearson VUE",
    about_cert_2_year: "2024",
    about_cert_2_title: "Microsoft Azure Fundamentals (AZ-900)",
    about_cert_2_desc: "Microsoft",
    about_cert_3_year: "2024",
    about_cert_3_title: "IT Specialist — Python · Certiport",
    about_cert_3_desc: "Certiport",
    about_cert_4_year: "2023",
    about_cert_4_title: "CCNA 1 & CCNA 2 — Cisco",
    about_cert_4_desc: "Cisco",
    cert_gallery_description: "Quelques preuves concrètes de mon parcours en data, cloud, Python et réseaux.",
    cert_gallery_zoom: "Cliquer pour agrandir",
    about_skillset: "Compétences",
    about_skillset_purple: "Techniques",
    about_tools: "Outils",
    about_tools_purple: "utilisés",

    // Projects
    projects_title: "Mes",
    projects_title_purple: "Projets",
    projects_subtitle: "Voici quelques projets sur lesquels j'ai travaillé.",
    projects_github: "GitHub",
    projects_demo: "Démo",

    // Resume
    resume_download: "Télécharger le CV",
    resume_title: "Mon",
    resume_title_purple: "Curriculum Vitae",
    resume_preview: "Aperçu du CV",
    resume_pdf: "PDF",

    // Footer
    footer_designed: "Conçu et développé par Yassine Ben Hawala",
  },
  en: {
    // Navbar
    nav_home: "Home",
    nav_about: "About",
    nav_projects: "Projects",
    nav_resume: "Resume",

    // Home
    home_greeting: "Hi There!",
    home_iam: "I'M",
    home_find_me: "Find Me On",
    home_connect: "Feel free to",
    home_connect2: "connect with me",

    // Home2 intro
    home2_title: "LET ME",
    home2_title_purple: "INTRODUCE MYSELF",
    home2_body1: "Computer Engineering graduate from",
    home2_body1_purple: "École Polytechnique de Sousse",
    home2_body1b: " in ",
    home2_body1c_purple: "Business Intelligence",
    home2_body1d: ", with a background in Software Engineering and Information Systems from ",
    home2_body1e_purple: "ISIMM",
    home2_body1f: ".",
    home2_body2: "I develop solutions combining ",
    home2_body2_purple: "Software Engineering, Data Analytics, and Business Intelligence",
    home2_body2b: ", from designing ETL pipelines and APIs to creating dashboards and modern interfaces. I primarily work with ",
    home2_body2c_purple: "Python, FastAPI, React, PostgreSQL, SQL, Power BI, and Docker",
    home2_body2d: ", with a particular interest in data, process optimization, and artificial intelligence.",

    // About
    about_title: "Know Who",
    about_title_purple: "I AM",
    about_card_intro: "Hi everyone! I'm",
    about_card_from: "from",
    about_card_from_city: "Monastir, Tunisia",
    about_card_job: "Computer Engineering graduate",
    about_card_school: "École Polytechnique de Sousse",
    about_card_track: "Business Intelligence",
    about_card_hobbies: "Outside of coding, I love:",
    about_card_h1: "Football & Sports ⚽",
    about_card_h2: "Music & Culture 🎵",
    about_card_h3: "Travel & Exploration 🌍",
    about_card_quote: '"Data is the compass of every good decision."',
    about_education_title: "Education",
    about_experience_title: "Experience",
    about_certifications_title: "Certifications",
    about_education_1_year: "2023 – 2026",
    about_education_1_title: "National Engineering Degree in Computer Engineering",
    about_education_1_place:
      "École Polytechnique de Sousse (EPS), Business Intelligence track",
    about_education_2_year: "2020 – 2023",
    about_education_2_title: "Bachelor's Degree — Software Engineering & Information Systems",
    about_education_2_place: "ISIMM, Monastir, Tunisia",
    about_experience_1_year: "2025 – 2026",
    about_experience_1_title: "DigMaco Analytics — Capstone Project",
    about_experience_1_desc: "Full-stack analytics platform · FastAPI · React · ML · Google Gemini",
    about_experience_2_year: "Jun – Aug 2024",
    about_experience_2_title: "SEO Locale — Internship",
    about_experience_2_desc: "Symfony · React TypeScript · Google Business API",
    about_experience_3_year: "Jan – Jun 2023",
    about_experience_3_title: "NeuralBey — Internship",
    about_experience_3_desc: "E-learning · Symfony · ReactJS · Node.js",
    about_cert_1_year: "2026",
    about_cert_1_title: "Data Analytics — IT Specialist",
    about_cert_1_desc: "CertNexus / Certiport — Pearson VUE",
    about_cert_2_year: "2024",
    about_cert_2_title: "Microsoft Azure Fundamentals (AZ-900)",
    about_cert_2_desc: "Microsoft",
    about_cert_3_year: "2024",
    about_cert_3_title: "IT Specialist — Python · Certiport",
    about_cert_3_desc: "Certiport",
    about_cert_4_year: "2023",
    about_cert_4_title: "CCNA 1 & CCNA 2 — Cisco",
    about_cert_4_desc: "Cisco",
    cert_gallery_description: "Concrete proof of my journey in data, cloud, Python, and networking.",
    cert_gallery_zoom: "Click to enlarge",
    about_skillset: "Professional",
    about_skillset_purple: "Skillset",
    about_tools: "Tools",
    about_tools_purple: "I Use",

    // Projects
    projects_title: "My Recent",
    projects_title_purple: "Works",
    projects_subtitle: "Here are a few projects I've worked on recently.",
    projects_github: "GitHub",
    projects_demo: "Demo",

    // Resume
    resume_download: "Download CV",
    resume_title: "My",
    resume_title_purple: "Resume",
    resume_preview: "CV Preview",
    resume_pdf: "PDF",

    // Footer
    footer_designed: "Designed and Developed by Yassine Ben Hawala",
  },
};

export const LanguageContext = createContext({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("fr");
  const t = (key) => translations[lang][key] || key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useTranslation() {
  return useContext(LanguageContext);
}
