# Shawn Labs

An editable portfolio based on your Shawn Labs design direction and project backlog. No build tools or installation required.

## Edit your portfolio

Open `dist/content.js` and update your name, introduction, biography, and projects. Add your actual email, GitHub, LinkedIn, and résumé path in the empty fields. Links appear automatically when provided. Put a résumé PDF in `dist/` and set `resume: 'resume.pdf'`.

Project entries support `github` and `demo` URLs. Set status to the project's actual state, and change the headings in `dist/index.html` when replacing planned ideas with completed work. Concept visuals are illustrations, not product screenshots. No qualifications or completion claims have been invented. Your CV was not available in the accessible chats/files.

Change colors and layout in `dist/style.css`. Project filtering and details are in `dist/app.js`.

## Preview

Open `dist/index.html` in your browser, or serve the `dist` folder with a local static server.

## Publish to GitHub Pages

1. Create a public repository named YOUR-USERNAME.github.io.
2. Upload the files INSIDE `dist` to the root of that repository (index.html, style.css, app.js, content.js, and any assets). Do not upload credentials or the .openai directory.
3. Go to Settings → Pages → Deploy from a branch → main → /(root) → Save.
4. Your site will appear at https://YOUR-USERNAME.github.io.

Alternatively, keep this folder structure in a repository and use a GitHub Actions static-site workflow to deploy `dist`.

The private Sites deployment and your GitHub repository are separate. This package does not automatically create a GitHub repository.
