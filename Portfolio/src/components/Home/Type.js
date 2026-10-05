import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "../../i18n";

function Type() {
  const { lang } = useTranslation();

  const strings =
    lang === "fr"
      ? [
          "Ingénieur Full Stack",
          "Développeur BI / ETL",
          "Data Engineer",
          "React · FastAPI · Python",
          "ML & IA Enthusiast",
        ]
      : [
          "Full Stack Engineer",
          "BI / ETL Developer",
          "Data Engineer",
          "React · FastAPI · Python",
          "ML & AI Enthusiast",
        ];

  return (
    <Typewriter
      key={lang}
      options={{
        strings,
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
