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
      "Ingénieur en Génie Informatique diplômé de l'",
    home2_body1_purple: "École Polytechnique de Sousse",
    home2_body1b: ", spécialisé en ",
    home2_body1c_purple: "Business Intelligence",
    home2_body1d: ".",
    home2_body2: "Je maîtrise",
    home2_body2_purple: " React, FastAPI, Python, PostgreSQL et les pipelines ETL",
    home2_body2b: " — et j'adore construire des systèmes data robustes et des interfaces modernes.",
    home2_body3: "Mon projet phare :",
    home2_body3_purple: " DigMaco Analytics",
    home2_body3b: " — une plateforme full-stack d'analyse comportementale avec ML intégré et génération de rapports par IA (Google Gemini).",

    // About
    about_title: "Qui",
    about_title_purple: "suis-je ?",
    about_card_intro: "Bonjour ! Je suis",
    about_card_from: "de",
    about_card_from_city: "Monastir, Tunisie",
    about_card_job: "Ingénieur Informatique",
    about_card_school: "École Polytechnique de Sousse",
    about_card_hobbies: "En dehors du code, j'aime :",
    about_card_h1: "Football & Sports ⚽",
    about_card_h2: "Musique & Culture 🎵",
    about_card_h3: "Voyages & Découvertes 🌍",
    about_card_quote: '"Les données sont la boussole de la décision."',
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
    home2_body1: "I am a Computer Engineering graduate from",
    home2_body1_purple: "École Polytechnique de Sousse",
    home2_body1b: ", specializing in ",
    home2_body1c_purple: "Business Intelligence",
    home2_body1d: ".",
    home2_body2: "I'm proficient in",
    home2_body2_purple: " React, FastAPI, Python, PostgreSQL, and ETL pipelines",
    home2_body2b: " — and I love building robust data systems and modern user interfaces.",
    home2_body3: "My flagship project:",
    home2_body3_purple: " DigMaco Analytics",
    home2_body3b: " — a full-stack behavioral analytics platform with integrated ML and AI-powered report generation (Google Gemini).",

    // About
    about_title: "Know Who",
    about_title_purple: "I AM",
    about_card_intro: "Hi everyone! I'm",
    about_card_from: "from",
    about_card_from_city: "Monastir, Tunisia",
    about_card_job: "Computer Engineer",
    about_card_school: "École Polytechnique de Sousse",
    about_card_hobbies: "Outside of coding, I love:",
    about_card_h1: "Football & Sports ⚽",
    about_card_h2: "Music & Culture 🎵",
    about_card_h3: "Travel & Exploration 🌍",
    about_card_quote: '"Data is the compass of every good decision."',
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
