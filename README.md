# SIAM IT LABS — GitHub Pages MVP

This is a static, responsive public-website MVP for GitHub Pages.

## Files
- `index.html` — homepage
- `about.html` — about page
- `services.html` — service overview
- `work.html` — portfolio / concept work
- `contact.html` — project enquiry form
- `assets/style.css` — responsive styling
- `assets/script.js` — mobile navigation and form email draft

## Deploy to GitHub Pages
1. Extract this ZIP file.
2. Upload all files and the `assets` folder to the **root** of your repository.
3. Keep `index.html` at the repository root.
4. Commit changes to `main`.
5. In repository Settings → Pages, select Deploy from a branch → `main` → `/ (root)`.

## Important MVP limitations
GitHub Pages hosts static files only. It does not execute PHP, run a backend, authenticate users securely, store leads in a database, or protect client files. The contact form currently opens the visitor's email application using `mailto:`; it does not submit to a server.

The secure admin dashboard, client portal, lead database, project/task management, private file storage, support tickets, audit logs, backups and server-side role permissions described in the SIAM IT LABS platform brief require a backend/API and database on a suitable hosting provider. Do not publish private client data in this static repository.

Before launch, replace `hello@siamitlabs.com` in `assets/script.js` with your real monitored business email.
