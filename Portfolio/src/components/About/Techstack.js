import React from "react";
import { Col, Row } from "react-bootstrap";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Typescript from "../../Assets/TechIcons/Typescript.svg";
import Node from "../../Assets/TechIcons/Node.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Java from "../../Assets/TechIcons/Java.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import Redis from "../../Assets/TechIcons/Redis.svg";
import Docker from "../../Assets/TechIcons/Docker.svg";
import Mongo from "../../Assets/TechIcons/Mongo.svg";
import SQL from "../../Assets/TechIcons/SQL.svg";
import Kafka from "../../Assets/TechIcons/Kafka.svg";
import Postman from "../../Assets/TechIcons/Postman.svg";
import {
  SiAngular,
  SiFastapi,
  SiDjango,
  SiSymfony,
  SiPowerbi,
  SiFlutter,
  SiScikitlearn,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Languages */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="JavaScript" />
        <div className="tech-icons-text">JavaScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Typescript} alt="TypeScript" />
        <div className="tech-icons-text">TypeScript</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Java} alt="Java" />
        <div className="tech-icons-text">Java</div>
      </Col>

      {/* Frontend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="React" />
        <div className="tech-icons-text">React.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAngular fontSize={"24px"} style={{ color: "#DD0031" }} />
        <div className="tech-icons-text">Angular</div>
      </Col>

      {/* Backend */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Node} alt="Node.js" />
        <div className="tech-icons-text">Node.js</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFastapi fontSize={"24px"} style={{ color: "#009688" }} />
        <div className="tech-icons-text">FastAPI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango fontSize={"24px"} style={{ color: "#092E20" }} />
        <div className="tech-icons-text">Django</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSymfony fontSize={"24px"} style={{ color: "#fff" }} />
        <div className="tech-icons-text">Symfony</div>
      </Col>

      {/* Databases */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={SQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Mongo} alt="MongoDB" />
        <div className="tech-icons-text">MongoDB</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Redis} alt="Redis" />
        <div className="tech-icons-text">Redis</div>
      </Col>

      {/* Data / BI */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi fontSize={"24px"} style={{ color: "#F2C811" }} />
        <div className="tech-icons-text">Power BI</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn fontSize={"24px"} style={{ color: "#F89939" }} />
        <div className="tech-icons-text">scikit-learn</div>
      </Col>

      {/* DevOps */}
      <Col xs={4} md={2} className="tech-icons">
        <img src={Docker} alt="Docker" />
        <div className="tech-icons-text">Docker</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Kafka} alt="Kafka" className="tech-icon-images" />
        <div className="tech-icons-text">Kafka</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="Git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={Postman} alt="Postman" />
        <div className="tech-icons-text">Postman</div>
      </Col>

      {/* Mobile */}
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter fontSize={"24px"} style={{ color: "#54C5F8" }} />
        <div className="tech-icons-text">Flutter</div>
      </Col>
    </Row>
  );
}

export default Techstack;
