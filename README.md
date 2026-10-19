# Yassine Ben Hawala — Portfolio

Computer Engineering graduate, Business Intelligence specialization.
Software and analytics projects using React, FastAPI, PostgreSQL, SQL and Power BI.

**Live website:** https://portfoliohawala.vercel.app/

The React application lives in [`Portfolio/`](Portfolio/). Use Node.js 22+:

```sh
cd Portfolio
npm ci
npm start
```

Production compilation: `npm run build`. Run the four recruiter-path tests with
`npm test -- --watchAll=false --runInBand`. GitHub Actions runs both checks.
Tests cover project filters, source links, language persistence and homepage
navigation. They do not replace manual browser and PDF checks.

The homepage highlights three projects, with direct access to the CV and contact.
The complete gallery separates Full Stack/Web and BI/Data, while showing internship
source restrictions. French/English selection persists when browser storage permits;
the language is also declared on the page. Secondary routes load on demand.

## Selected work

- [DigMaco Analytics](https://github.com/hawalayessin/user-behavior-analytics):
  final-year project, with API, analytical warehouse, dashboards and an ETL component.
- [Stadium Reservation](https://github.com/hawalayessin/reservation-stade-module-mern-2026):
  academic MERN application.
- [AmanaFarm](https://github.com/hawalayessin/AmanaFarm): agricultural marketplace.
- [BI project documentation](bi-projects/README.md): FIFA World Cup and Car Sales.

Internship work may be described without publishing employer-owned source code.
The ETL component belongs to DigMaco and is not counted as a separate gallery project.

## Attribution

The application uses React, Bootstrap and the other libraries listed in its
package manifest. Preserve the original template and dependency attribution when
redistributing it. Project screenshots and claims should reflect work the author
can explain in an interview.
