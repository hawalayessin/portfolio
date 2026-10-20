import React from "react";
import { Col, Row } from "react-bootstrap";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import { SiLinux, SiPowerbi, SiGithub, SiJetbrains, SiSage, SiMicrosoftexcel, SiTalend } from "react-icons/si";
import { useTranslation } from "../../i18n";

function Toolstack() {
  const { t } = useTranslation();
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={vsCode} alt="VS Code" className="tech-icon-images" />
        <div className="tech-icons-text">VS Code</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJetbrains fontSize={"24px"} style={{ color: "#FE315D" }} />
        <div className="tech-icons-text">IntelliJ</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" className="tech-icon-images" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub fontSize={"24px"} style={{ color: "#fff" }} />
        <div className="tech-icons-text">GitHub</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" className="tech-icon-images" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" className="tech-icon-images" />
        <div className="tech-icons-text">Postman</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux fontSize={"24px"} style={{ color: "#FCC624" }} />
        <div className="tech-icons-text">Linux</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} style={{ color: "#F2C811" }} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title={t("about_tool_sage")}>
        <SiSage fontSize={"24px"} style={{ color: "#00DC82", flexShrink: 0 }} aria-hidden="true" />
        <div className="tech-icons-text">Sage</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Microsoft Excel">
        <SiMicrosoftexcel fontSize={"24px"} style={{ color: "#33C481", flexShrink: 0 }} aria-hidden="true" />
        <div className="tech-icons-text">Excel</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Talend Open Studio">
        <SiTalend fontSize={"24px"} style={{ color: "#FF6D7A", flexShrink: 0 }} aria-hidden="true" />
        <div className="tech-icons-text">Talend</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
