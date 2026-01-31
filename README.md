# Playwright Automation Testing – Singlish to Sinhala Translator

##  Project Overview

This project was developed as part of **IT3040 – ITPM (Year 3, Semester 1) Assignment 1**.
The objective of this assignment is to test the accuracy and usability of a real-world Singlish-to-Sinhala translation system using **Playwright automation**.

The selected application under test:
🔗 [https://www.swifttranslator.com/](https://www.swifttranslator.com/)

This project focuses only on:

* Functional testing of Singlish → Sinhala conversion
* UI behavior validation
* Robustness testing under different input conditions

Backend APIs, performance, and security testing are **not** included as per assignment requirements.

---

##  Testing Objectives

* Verify correct Singlish to Sinhala conversion
* Identify scenarios where the system fails or behaves incorrectly
* Validate UI behavior such as real-time output updates
* Test robustness across different input types and formats

---

##  Test Coverage

The automated test scenarios cover:

* Sentence structures (simple, compound, complex)
* Interrogative and imperative sentences
* Positive and negative sentence forms
* Greetings, requests, and responses
* Polite vs informal language
* Word combinations and collocations
* Joined vs segmented word inputs
* Tense variations
* Singular and plural forms
* Mixed Singlish + English inputs
* Slang and informal language
* Punctuation and numeric formats
* Input length variations (short, medium, long)
* Formatting scenarios (spaces, line breaks, paragraphs)
* One UI-related real-time behavior test

---

##  Tools & Technologies

* Playwright
* JavaScript / Node.js
* VS Code
* GitHub

---

##  Project Structure

```
playwright-assignment/
│
├── tests/                # Automated test scripts
├── playwright.config.js  # Playwright configuration
├── package.json          # Project dependencies
└── README.md             # Project documentation
```

---

## ⚙️ Installation Instructions

###  Clone the Repository

```bash
git clone https://github.com/randilkumal/playwright-assignment.git
cd playwright-assignment
```

###  Install Dependencies

```bash
npm install
```

###  Install Playwright Browsers

```bash
npx playwright install
```

---

## Running the Tests

Run all tests:

```bash
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View HTML test report:

```bash
npx playwright show-report
```

---

##  Test Case Types

* Positive Functional Tests
* Negative Functional Tests
* UI Behavior Tests
* Robustness Validation Tests

---

##  Execution Method

1. Enter Singlish text into the input field
2. Observe real-time Sinhala output
3. Compare expected vs actual results
4. Record pass/fail status

---

##  Notes

* The system may not fully support slang or shorthand inputs
* English technical terms are expected to remain unchanged
* Tests are designed according to assignment guidelines

---

##  Author

**Student Name:** Ranush
**Course:** BSc (Hons) in Information Technology
**Module:** IT3040 – ITPM

---

##  License

This project is created for academic purposes only.
