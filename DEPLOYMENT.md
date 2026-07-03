# Deployment Guide

This portfolio is a static site and can be deployed with GitHub Pages.

## What To Upload

Upload the contents of the GitHub-ready publishing folder, not the whole working project.

Required public site files:

```text
index.html
styles.css
script.js
.nojekyll
assets/
README.md
PRIVACY.md
DEPLOYMENT.md
```

Inside `assets/`, include:

```text
CV_Ermelito_Calinga_26062026.docx
ermelito-calinga.png
ermelito_portfolio_chatbot_qa_keywords.json
```

Do not upload local drafts, sample inspiration images, temporary files, or unrelated project folders.

## GitHub Pages Steps

1. Create a new GitHub repository.
2. Upload the contents of the publishing folder to the repository root.
3. Commit the files to the `main` branch.
4. Go to repository `Settings`.
5. Open `Pages` in the sidebar.
6. Under `Build and deployment`, choose `Deploy from a branch`.
7. Select branch `main` and folder `/root`.
8. Save the Pages settings.
9. Wait for GitHub Pages to build and publish the site.

Your site URL will usually look like:

```text
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

For a personal GitHub Pages site, the repository can be named:

```text
YOUR-GITHUB-USERNAME.github.io
```

Then the site URL becomes:

```text
https://YOUR-GITHUB-USERNAME.github.io/
```

## After Publishing

Check these items on the live site:

- Home page loads correctly
- Photo displays
- CV download works
- Chatbot loads and answers from the Q&A JSON
- Mobile chat mode locks the page and only the conversation scrolls
- Contact links open correctly

## Notes

GitHub Pages expects an entry file such as `index.html` at the top level of the publishing source. This project already includes that file.

The `.nojekyll` file tells GitHub Pages to serve this as a plain static site.

Official GitHub references:

- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/quickstart
