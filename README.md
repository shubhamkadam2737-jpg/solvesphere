# SolveSphere

**SIH26043 — Platform to Crowdsource Societal Challenges and Collaborative Problem Solving**

> Identify Problems. Connect People. Build Solutions. Create Measurable Impact.

SolveSphere is now a standalone professional **Vite + React + TypeScript** application. Hatchable is not required.

## Architecture

```text
solvesphere/
├── index.html
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── .env.example
├── .gitignore
└── src/
    ├── App.tsx
    ├── main.tsx
    ├── vite-env.d.ts
    ├── components/
    │   ├── Layout.tsx
    │   ├── Logo.tsx
    │   └── ProtectedRoute.tsx
    ├── context/
    │   └── AuthContext.tsx
    ├── data/
    │   └── mockData.ts
    ├── db/
    │   └── schema.sql
    ├── lib/
    │   └── storage.ts
    ├── pages/
    │   ├── Home.tsx
    │   ├── Login.tsx
    │   ├── Dashboard.tsx
    │   ├── Challenges.tsx
    │   ├── ChallengeDetails.tsx
    │   ├── Teams.tsx
    │   ├── Solutions.tsx
    │   ├── Notifications.tsx
    │   ├── Profile.tsx
    │   ├── Admin.tsx
    │   └── NotFound.tsx
    ├── services/
    │   ├── api.ts
    │   └── auth.ts
    ├── styles/
    │   └── index.css
    └── types/
        └── index.ts
```

## Features

- Citizen / Student / Mentor / Admin role-based access
- Protected routes and role-aware Admin console
- Challenge discovery and priority/status tracking
- Challenge details and solution readiness
- Team workspace
- Solution submission/review workflow foundation
- Notifications and profile pages
- Axios API service with bearer-token interceptor
- PostgreSQL/Supabase-ready database schema
- Standalone email + 6-digit demo-code authentication abstraction
- Responsive SolveSphere branding and supplied logo

## Run locally

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Backend / database

The frontend is intentionally separated from the backend through `src/services/api.ts`. Set `VITE_API_URL` in `.env` when a backend is available. The SQL schema in `src/db/schema.sql` is PostgreSQL-compatible and can be used with Supabase or another PostgreSQL service.

The current authentication implementation is a development/demo adapter. For production, connect `src/services/auth.ts` to a real email/OTP or passwordless authentication backend and issue signed access/refresh tokens. Never store passwords in frontend localStorage.
