import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import { useTranslation } from "../../i18n";

function AboutCard() {
  const { t } = useTranslation();
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t("about_card_intro")} <span className="purple">Yassine Ben Hawala</span> {t("about_card_from")} <span className="purple">{t("about_card_from_city")}</span>.
            <br />
            {t("about_card_job")} — <span className="purple">{t("about_card_school")}</span>, {t("about_card_track")}.
            <br />
            <br />
            {t("about_card_hobbies")}
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> {t("about_card_h1")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about_card_h2")}
            </li>
            <li className="about-activity">
              <ImPointRight /> {t("about_card_h3")}
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>{t("about_card_quote")}</p>
          <footer className="blockquote-footer">Yassine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
