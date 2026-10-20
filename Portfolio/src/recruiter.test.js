import React from "react";
import { render, screen, fireEvent, cleanup, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { LanguageProvider } from "./i18n";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar";

function renderPage(page) {
  return render(<LanguageProvider><MemoryRouter>{page}</MemoryRouter></LanguageProvider>);
}
beforeEach(() => localStorage.clear());

test("a recruiter can narrow projects to data and switch back to all work", () => {
  renderPage(<Projects />);
  expect(screen.getAllByRole("article")).toHaveLength(9);
  fireEvent.click(screen.getByRole("button", { name: "BI & Data" }));
  expect(screen.getAllByRole("article")).toHaveLength(4);
  expect(screen.getByRole("heading", { name: "DigMaco Analytics" })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "Stadium Reservation — MERN" })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("button", { name: "Tous", exact: true }));
  expect(screen.getAllByRole("article")).toHaveLength(9);
});

test("web projects show source links and distinguish internship work", () => {
  renderPage(<Projects />);
  fireEvent.click(screen.getByRole("button", { name: "Full Stack & Web" }));
  expect(screen.getAllByRole("article")).toHaveLength(5);
  expect(screen.getByRole("link", { name: "GitHub — Stadium Reservation — MERN" })).toHaveAttribute("href", "https://github.com/hawalayessin/reservation-stade-module-mern-2026");
  expect(screen.getAllByText("Stage · Code non public")).toHaveLength(2);
});

test("language choice persists across visits and updates document language", () => {
  renderPage(<><Navbar /><Projects /></>);
  fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
  expect(screen.getByRole("button", { name: "All", exact: true })).toBeInTheDocument();
  expect(document.documentElement.lang).toBe("en");
  cleanup();
  renderPage(<Projects />);
  expect(screen.getByRole("button", { name: "All", exact: true })).toBeInTheDocument();
});

test("home provides paths to work, resume, contact and real project repositories", () => {
  renderPage(<Home />);
  expect(screen.getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getByRole("link", { name: /Explorer mes projets/ })).toHaveAttribute("href", "/project");
  expect(screen.getByRole("link", { name: "Consulter mon CV" })).toHaveAttribute("href", "/resume");
  expect(screen.getByRole("link", { name: /Me contacter/ })).toHaveAttribute("href", "mailto:hawalayessin@gmail.com");
  expect(screen.getByRole("link", { name: "GitHub — DigMaco Analytics" })).toHaveAttribute("href", "https://github.com/hawalayessin/user-behavior-analytics");
  expect(screen.getByRole("heading", { name: "Stadium Reservation — MERN" })).toBeInTheDocument();
});

test("SOAEXA is featured with its demo, source and real screenshots", () => {
  renderPage(<Home />);
  const project = screen.getByRole("heading", { name: "SOAEXA - Console de transactions" }).closest("article");
  expect(within(project).getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", "https://github.com/hawalayessin/SOAEXA");
  expect(project.querySelector('a[href="https://soaexa-console.vercel.app"]')).toHaveAttribute("target", "_blank");
  expect(within(project).getByRole("img")).toHaveAttribute("src", "/projects/soaexa/preview.png");
});

test("Talend belongs to Data with a documented diagram and translated details", () => {
  renderPage(<><Navbar /><Projects /></>);
  fireEvent.click(screen.getByRole("button", { name: "BI & Data" }));
  const card = screen.getByRole("heading", { name: "ETL Talend - Clients & Ventes" }).closest("article");
  expect(within(card).getByText("Formation · Data Engineering")).toBeInTheDocument();
  expect(within(card).getByRole("img")).toHaveAttribute("src", "/projects/talend/pipeline.png");
  expect(within(card).getByText(/job distinct réalise des agrégations/)).toBeInTheDocument();
  expect(within(card).queryAllByRole("link")).toHaveLength(0);
  fireEvent.click(within(card).getByRole("button", { name: /Voir les captures/ }));
  expect(screen.getByText(/Schéma reconstitué à partir des jobs Talend/)).toBeInTheDocument();
  cleanup();
  renderPage(<><Navbar /><Projects /></>);
  fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
  expect(screen.getByRole("heading", { name: "Talend ETL - Customers & Sales" })).toBeInTheDocument();
});

test("SmartShop has a live demo and Talend remains last in both languages", () => {
  renderPage(<><Navbar /><Projects /></>);
  const card = screen.getByRole("heading", { name: "SmartShop - Catalogue Angular" }).closest("article");
  expect(within(card).getByRole("link", { name: /GitHub/ })).toHaveAttribute("href", "https://github.com/hawalayessin/SmartphoneShop");
  expect(card.querySelector('a[href="https://smartshop-angular-demo.vercel.app"]')).toHaveAttribute("target", "_blank");
  expect(within(screen.getAllByRole("article").slice(-1)[0]).getByRole("heading")).toHaveTextContent("ETL Talend");
  fireEvent.click(screen.getByRole("button", { name: "Switch to English" }));
  expect(screen.getByRole("heading", { name: "SmartShop - Angular Catalogue" })).toBeInTheDocument();
  expect(within(screen.getAllByRole("article").slice(-1)[0]).getByRole("heading")).toHaveTextContent("Talend ETL");
});
