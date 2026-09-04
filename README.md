# SolveSphere

**SIH26043 — Platform to Crowdsource Societal Challenges and Collaborative Problem Solving**

> Identify Problems. Connect People. Build Solutions. Create Measurable Impact.

## Included

- React 18 frontend with responsive civic-tech UI
- Tailwind CSS CDN configuration and custom CSS
- SolveSphere logo embedded and reused across the experience
- Role selection at login: Citizen, Student, Mentor, Admin
- Email-code authentication integration with Hatchable auth
- Role-based dashboards and navigation
- Admin challenge accept / deny / priority controls
- Admin user, team, solution and report views
- Citizen challenge reporting with image/video upload controls
- Student team creation and final solution submission controls
- Mentor solution review, approval and change-request workflow
- Challenge filters for category, location, status, priority and newest/oldest
- Notifications for new challenges, progress and mentor feedback
- Profile role and contribution views

## Structure

```text
public/
  index.html
  login.html
  app.js
  theme.css
hatchable.toml
```

The current Hatchable build is a frontend prototype with local browser state for demo interactions and Hatchable email authentication hooks. Replace demo persistence with your production REST/database service when the backend is connected.
