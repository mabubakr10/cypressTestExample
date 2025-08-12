# Cypress + Cucumber (v6) E2E Test Suite

End‑to‑end tests for using **Cypress 6.x** with **Gherkin** feature files, plus **Cucumber JSON**, **cucumber-html-reporter**, and **Allure** reports.

> This README is tailored to your current dependencies:  
> - cypress **^6.9.1**  
> - cypress-cucumber-preprocessor **^2.5.5**  
> - @shelex/cypress-allure-plugin **^1.8.5**  
> - allure-commandline **^2.13.0**  
> - cucumber-html-reporter **^5.2.0**

---

## Project Structure

```
.
├─ cypress/
│  ├─ integration/
│  │  └─ signUp.feature            # Gherkin feature(s)
│  ├─ fixtures/
│  │  ├─ locators.json
│  │  └─ profiles.json
│  ├─ plugins/
│  │  └─ index.js                  # Preprocessor + Allure writer
│  └─ support/
│     ├─ commands.js               # Custom commands
│     ├─ index.js                  # Global hooks + Allure init
│     └─ step_definitions/         # Step definitions (JS)

├─ cypress.json                    # Cypress v9- config (you have this)
├─ package.json
└─ README.md
```

> If `locators.json` / `profiles.json` are at repo root, move them into `cypress/fixtures/` (recommended).

---

## Requirements

- **Node 14–16 LTS** (Cypress 6 has best support here)
- **npm** (or yarn/pnpm)
- Optional: Chrome/Edge/Firefox installed for cross‑browser runs

---

## Install

```bash
npm ci
# or: npm install
```

---

## Configuration

Your `package.json` already contains the **cypress-cucumber-preprocessor** block that enables **Cucumber JSON** output here:
```
cypress/cucumber-json/*.cucumber
```

### `cypress.json` (example)
Ensure features are discovered and Allure is on:
```json
{
  "baseUrl": "http://localhost:3000",
  "testFiles": "**/*.feature",
  "video": true,
  "screenshotsFolder": "cypress/screenshots",
  "videosFolder": "cypress/videos",
  "env": {
    "TAGS": "not @wip",
    "allure": true
  }
}
```

### `cypress/plugins/index.js`
Wire the Cucumber preprocessor and the Allure writer:
```js
/// <reference types="cypress" />
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {
  // Cucumber preprocessor for .feature files
  on('file:preprocessor', cucumber());

  // Allure results writer (required for @shelex plugin)
  require('@shelex/cypress-allure-plugin/writer')(on, config);

  return config;
};
```

### `cypress/support/index.js`
Initialize Allure and load commands:
```js
// Allure commands
import '@shelex/cypress-allure-plugin';

// Custom commands
import './commands';

// Place global before/after hooks here if needed
```

---

## Writing Steps

Place step definition files under `cypress/support/step_definitions/`.

**Example:** `cypress/support/step_definitions/signUp.steps.js`
```js
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

Given('I am on the signup page', () => {
  cy.visit('/signup');
});

When('I submit valid details', () => {
  cy.fixture('locators.json').then(({ signup }) => {
    cy.get(signup.email).type('user@example.com');
    cy.get(signup.password).type('Secret123!');
    cy.get(signup.submit).click();
  });
});

Then('I should see the dashboard', () => {
  cy.url().should('include', '/dashboard');
});
```

---

## Running Tests

### Interactive (dev)
```bash
npm run cy:open
```
> Use the UI runner for time‑travel debugging.

### Headless (CI‑style)
```bash
npx cypress run
```
or a specific feature:
```bash
npx cypress run --spec "cypress/integration/signUp.feature"
```

### Run by Tags
Tag scenarios in `.feature` (e.g., `@smoke`, `@wip`) and execute:
```bash
npx cypress run --env TAGS='@smoke and not @wip'
```

---

## Reports

### 1) Cucumber JSON → HTML (cucumber-html-reporter)

You already emit Cucumber JSON to `cypress/cucumber-json/`. Generate a pretty HTML report using a small script.

**Create** `reporter/writer.js` (or use your existing file):
```js
/* eslint-disable */
const reporter = require('cucumber-html-reporter');
const path = require('path');
const fs = require('fs');

const jsonDir = path.join(__dirname, '..', 'cypress', 'cucumber-json');
const reportDir = path.join(__dirname, '..', 'reports', 'cucumber-html');

if (!fs.existsSync(reportDir)) {
  fs.mkdirSync(reportDir, { recursive: true });
}

const options = {
  theme: 'bootstrap',
  jsonDir,
  output: path.join(reportDir, 'index.html'),
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "Cypress": "6.x",
    "Platform": process.platform,
    "Parallel": "No",
    "Executed": "Local"
  }
};

reporter.generate(options);
console.log('Cucumber HTML report generated at', path.join(reportDir, 'index.html'));
```

**Run after tests:**
```bash
node reporter/writer.js
```

### 2) Allure Report

Allure results will be saved to `allure-results/` by the plugin.

**Generate & open report:**
```bash
npx allure generate --clean
npx allure open
```
The generated static report lives in `allure-report/`.

> Tip: In CI, you can archive `allure-report/` or publish it as a job artifact.

---

## Suggested `package.json` Scripts

Add these to make life easier:
```json
{
  "scripts": {
    "cy:open": "cypress open",
    "cy:run": "cypress run",
    "cy:run:chrome": "cypress run --browser chrome",
    "cy:run:tags": "cypress run --env TAGS='@smoke and not @wip'",
    "report:cucumber": "node reporter/writer.js",
    "report:allure": "allure generate --clean && allure open",
    "clean": "rimraf allure-results allure-report cypress/screenshots cypress/videos reports"
  }
}
```

---

## Conventions

- Use stable selectors like `data-cy="..."`.
- Keep features focused; prefer tags (`@smoke`, `@regression`, `@wip`) for selection.
- Reuse fixtures for test data; avoid committing secrets.
- Use `cy.intercept()` to stub external calls where appropriate.

---

## Troubleshooting

- **Feature files not running** → Ensure `"testFiles": "**/*.feature"` and preprocessor wiring in `plugins/index.js`.
- **Tag filtering ignored** → Pass `--env TAGS='...'` on the CLI (read by the preprocessor).
- **Allure report empty** → Confirm `env.allure=true`, `@shelex` plugin imported in `support/index.js`, and writer set in `plugins/index.js`.
- **Node version issues** → Prefer Node 14–16 for Cypress 6 projects.

---

## Upgrading (Optional)

If you later migrate to Cypress 10+, you will:
- Move to `cypress.config.js` and `e2e/` folder
- Replace/upgrade the Cucumber adapter to one compatible with Cypress 10+
- Update Allure plugin wiring accordingly

---

**Happy testing!**
