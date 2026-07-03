# Ermelito Calinga Portfolio Website

Professional portfolio website for Ermelito Calinga, focused on Application Support Analyst, Software Support, Systems Analyst, and related IT support roles.

The site is a static HTML/CSS/JavaScript project and can be published directly with GitHub Pages.

## Features

- Responsive personal portfolio layout
- Professional profile sections for experience, skills, projects, resume, and contact
- CV-grounded chatbot using a local JSON Q&A knowledge base
- Keyword-sensitive matching for portfolio and role-fit questions
- Chat responses written in Ermelito's first-person voice
- Mobile chat focus mode where only the conversation scrolls
- No backend server or database required

## Project Structure

```text
.
├── index.html
├── styles.css
├── script.js
├── assets/
│   ├── CV_Ermelito_Calinga_26062026.docx
│   ├── ermelito-calinga.png
│   └── ermelito_portfolio_chatbot_qa_keywords.json
├── DEPLOYMENT.md
├── PRIVACY.md
├── README.md
└── .nojekyll
```

## Chatbot Knowledge Source

The chatbot uses `assets/ermelito_portfolio_chatbot_qa_keywords.json` as its main Q&A source. It is designed to answer only from the uploaded CV, portfolio content, and approved Q&A data.

Because this is a static website, the Q&A file is public when deployed. Do not place private notes, secrets, internal-only employer details, or API keys in that JSON file.

## Local Preview

You can preview the site by opening `index.html` in a browser, or by serving the folder locally with any static web server.

Example:

```powershell
python -m http.server 8765
```

Then open:

```text
http://127.0.0.1:8765/
```

## GitHub Pages

This site is ready for GitHub Pages. Upload the contents of this folder to a GitHub repository and enable Pages from the repository settings.

Recommended publishing source:

- Branch: `main`
- Folder: `/root`

See `DEPLOYMENT.md` for the step-by-step publishing guide.

## Privacy Reminder

Before publishing, review:

- CV file
- Phone number
- Email address
- LinkedIn URL
- Chatbot Q&A JSON
- Any project descriptions that may contain private or sensitive information

See `PRIVACY.md` for details.
