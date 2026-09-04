# SolveSphere

**SIH26043 — Platform to Crowdsource Societal Challenges and Collaborative Problem Solving**

> Identify Problems. Connect People. Build Solutions. Create Measurable Impact.

## Source code

This repository contains the current SolveSphere frontend/source mirror used for the Hatchable deployment.

```text
solvesphere/
├── hatchable.toml
├── README.md
└── public/
    ├── index.html      # Main SPA shell / homepage entry
    ├── app.js          # React application logic, role workspaces and interactions
    ├── theme.css       # Responsive visual system and component styling
    └── login.html      # Role-select email verification login page
```

## Implemented product areas

- Citizen, Student, Mentor and Admin role workspaces
- Login as Citizen / Student / Mentor / Admin
- Email verification authentication flow
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

The current source is a browser-first static React implementation. Serve the `public/` directory with any static web server.

Example:

```bash
npx serve public
```

The app is written to work with Hatchable's browser-injected authentication and can be extended with REST APIs and persistent database storage when moving beyond the prototype.
