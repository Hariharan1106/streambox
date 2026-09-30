# 🎬 StreamBox Project Guide

This project is a movie and TV streaming website clone inspired by Hotstar. It is a front-end app, which means it runs only in the browser and does not use a real backend server or database.

The app lets users:
- browse movies and TV shows
- open detailed pages
- search for titles
- save favorites to a watchlist
- enjoy a cinematic intro animation

---

## What this project is using

### 1. React
React is the main building block of the app.

In simple words:
- it helps create the user interface
- the page is divided into small reusable parts called components
- examples: Navbar, Hero, MovieCard, MovieRow, MovieDetails, Watchlist

This project uses React 19.

### 2. Vite
Vite is the development tool that runs the project.

In simple words:
- it starts the local server
- it reloads the app fast while you edit files
- it builds the project for production when you are ready

Typical commands:
- npm install
- npm run dev
- npm run build

### 3. React Router DOM
This library helps the app act like it has multiple pages without reloading the browser.

In simple words:
- clicking links changes the URL
- the app swaps different pages like Home, Movies, TV Shows, Search, and Watchlist
- it is still a single-page app, but it feels like a multi-page site

This is set up in src/App.jsx.

### 4. Tailwind CSS
Tailwind is used for styling the app.

In simple words:
- you add classes directly in JSX
- it makes styling faster and cleaner
- you can make modern UI layouts without writing large CSS files

It is used heavily across the app to make it look like a modern streaming platform.

### 5. Context API
This project uses React Context to share data between parts of the app.

In simple words:
- the watchlist is stored in one common place
- different pages can read and update it easily
- this avoids passing data through many components manually

The logic lives in src/context/WatchlistContext.jsx.

### 6. localStorage
The app stores the watchlist in the browser.

In simple words:
- when a user adds a movie to the watchlist, it stays saved in the browser
- this is stored locally, not on any server
- if the user clears browser storage, the watchlist is removed

This is a simple way to save user preferences in a front-end project.

### 7. Static Data Files
The app does not fetch movie details from a live API.

Instead, it uses local JavaScript files in the src/data folder.

In simple words:
- the app already has movie and TV show data inside the code
- this is perfect for a demo or practice project
- the app is simple and fast because it does not need a backend

### 8. Component-Based Design
The project is organized into small, reusable UI pieces.

Examples:
- Navbar
- Hero
- MovieCard
- MovieRow
- TheatreIntro
- ParticleBackground

This keeps the project neat and easier to maintain.

---

## Project structure in plain language

- src/App.jsx: main app layout and route setup
- src/components/: reusable UI pieces
- src/context/: shared app state like watchlist
- src/data/: movie and TV show data
- src/pages/: full pages such as Home, Movies, Watchlist, Search, and Details
- src/index.css: global styling and Tailwind setup

---

## Simple summary

This project is a front-end React app that simulates a streaming website using:
- React for UI
- Vite for running and building
- React Router for page navigation
- Tailwind CSS for style
- Context API for shared state
- localStorage for saving favorites
- local data files for movie information

So in one sentence:
This is a movie and TV streaming clone built with React, Tailwind, browser-side storage, and local data.

---

## Final note

This project is a great example of a modern front-end app built without a backend. It is simple, clean, and beginner-friendly, which makes it easy to understand how a real web app is structured.

