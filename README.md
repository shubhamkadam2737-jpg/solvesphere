# SolveSphere

**SIH26043 — Platform to Crowdsource Societal Challenges and Collaborative Problem Solving**

> Identify Problems. Connect People. Build Solutions. Create Measurable Impact.

## Standalone source code

SolveSphere is now stored in this GitHub repository as a standalone frontend. **Hatchable configuration and Hatchable authentication dependencies have been removed from the repository.**

```text
solvesphere/
├── README.md
└── public/
    ├── index.html      # Main React SPA shell / homepage entry
    ├── app.js          # React application logic, role workspaces and interactions
    ├── theme.css       # Responsive visual system and component styling
    └── login.html      # Standalone role-select login page
```

## Implemented product areas

- Citizen, Student, Mentor and Admin role workspaces
- Login as Citizen / Student / Mentor / Admin
- Email/code-style login flow for the prototype
- Challenge reporting and lifecycle/status tracking
- Challenge filters: category, location, status, priority, newest/oldest
- Challenge photos and video upload UI
- Student team creation and team workspace
- Student final solution submission with files and demo video
- Mentor solution review, approval and change requests
- Admin challenge accept/deny, priority and status controls
- Admin user, team, solution and platform report views
- Notifications for new challenges, team activity, mentor feedback and progress
- Profile with current role and contribution metrics
- SolveSphere logo and civic-tech branding
- Responsive React UI with Tailwind CDN utilities and Lucide icons

## Run locally

The current frontend is a browser-first static React implementation. No Hatchable runtime is required for the demo login flow.

From the repository root, serve the `public/` folder with any static web server, for example:

```bash
npx serve public
```

You can also use VS Code Live Server or another static HTTP server.

## Important prototype note

The current login is a **frontend demo authentication flow**: it accepts a 6-digit demo code and stores the selected profile in browser `localStorage`. For production, connect it to a real authentication provider/backend and database rather than storing authentication state only in the browser.

## Tech

- React 18
- JavaScript
- Tailwind CSS CDN utilities
- Lucide icons
- HTML/CSS
- Browser localStorage for prototype state
