# Privacy Notes

This website is designed as a public personal portfolio. Anything included in the published folder can be viewed, downloaded, or inspected by visitors.

## Public Files

When deployed to GitHub Pages, these items become public:

- `index.html`
- `styles.css`
- `script.js`
- `assets/ermelito-calinga.png`
- `assets/CV_Ermelito_Calinga_26062026.docx`
- `assets/ermelito_portfolio_chatbot_qa_keywords.json`

The chatbot Q&A JSON is especially important to review because visitors can open the file directly from the browser.

## Chatbot Privacy

The chatbot runs in the visitor's browser using local JavaScript and the local Q&A JSON file. This version does not use an external AI API, backend database, analytics service, or message storage.

Visitor questions are not sent to a server by this website.

## Before Publishing

Review and remove anything you do not want public, including:

- Personal phone number, if you prefer email or LinkedIn only
- Home address or precise location, if present in the CV
- Private client, vendor, or employer details
- Internal project names that should not be public
- Sensitive troubleshooting examples
- API keys, passwords, tokens, or private URLs
- Notes inside the chatbot Q&A file that are not meant for employers

## CV File

The current site links to a `.docx` CV file. A PDF version is usually better for public sharing because it is easier to view in browsers and less likely to expose editable document structure.

If you create a PDF version later, update the CV links in `index.html` to point to the PDF file.

## No Secrets Policy

Never place secrets in this repository. Static websites expose all frontend files to visitors.
