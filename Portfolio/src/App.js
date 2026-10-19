import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { LanguageProvider, useTranslation } from "./i18n";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./recruiter.css";

const About = lazy(() => import("./components/About/About"));
const Projects = lazy(() => import("./components/Projects/Projects"));
const Resume = lazy(() => import("./components/Resume/ResumeNew"));

function SkipLink() {
  const { t } = useTranslation();
  return <a className="skip-link" href="#main-content">{t("skip_content")}</a>;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="App" id="scroll">
          <SkipLink />
          <Navbar />
          <ScrollToTop />
          <main id="main-content" tabIndex="-1">
          <Suspense fallback={<p className="resume-intro" role="status">Chargement… / Loading…</p>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/"/>} />
          </Routes>
          </Suspense>
          </main>
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
