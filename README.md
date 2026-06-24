# Portfolio

Single-page portfolio with a 3D project carousel built with React, Three.js, and Vite.

## Features

- **Project carousel** — Instagram-style swipe carousel with subtle 3D tilt, shadows, and smooth transitions
- **Click to open** — each project card links to its live app
- **Tech stack labels** — frontend, backend, and database shown below each screenshot
- **About section** — bio, skills, and contact links below the carousel

## Getting started

```bash
npm install
npm run dev
```

## Customization

Edit `src/data/projects.ts` to add your projects:

```ts
{
  id: 'my-app',
  name: 'My App',
  url: 'https://my-app.com',
  screenshot: '/projects/my-app.png',  // place image in public/projects/
  tech: {
    frontend: 'React · TypeScript',
    backend: 'Node.js',
    db: 'PostgreSQL',
  },
}
```

Update `src/components/AboutSection.tsx` with your bio, skills, email, and GitHub link.

## Stack

- [Vite](https://vite.dev/) + React + TypeScript
