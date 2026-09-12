# 🧱 Dev Stack Builder

> Explore frontend, backend, database, and tooling technologies — compare them side by side and build your ideal development stack.

![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![DaisyUI](https://img.shields.io/badge/DaisyUI-5-5A0EF8?logo=daisyui&logoColor=white)

🔗 **Live Site:** [https://dev-stack-builder-one.vercel.app](https://dev-stack-builder-one.vercel.app)

---

## 📖 About the Project

Dev Stack Builder is a responsive React + TypeScript web app that helps developers browse frontend, backend, database, language, styling, and DevOps technologies, compare their ratings and difficulty levels, and put together a personalized "stack" for their next project — all with a clean, modern UI and a fully re-themeable gradient brand identity.

## 🛠️ Technologies Used

- **React 19** — component-based UI library
- **TypeScript** — static typing for safer, more predictable code
- **Vite** — fast build tool and dev server
- **Tailwind CSS v4 + DaisyUI** — utility-first styling and component classes
- **React-Toastify** — toast notifications for user actions
- **JSON** — technology data, loaded via `fetch`

## ✨ Features

1. **🧭 Browse & Compare Technologies** — A responsive card grid (3 columns on desktop, 2 on tablet, 1 on mobile) shows each technology's icon, badge, category, difficulty, and star rating, all loaded dynamically from a JSON file via `fetch` instead of being hardcoded.

2. **➕ Build Your Own Stack** — Clicking "Add to Stack" instantly adds a technology to the "Your Stack" sidebar panel, disables that card's button, and shows a toast notification. Trying to add the same technology twice shows a warning toast instead of duplicating it.

3. **❌ Manage Your Stack** — Each item in the sidebar can be removed individually with a ✕ button, or the entire stack can be cleared at once with "Remove All" — both actions are confirmed with a toast alert, and the empty state is shown when no technologies are selected.

## 🚀 Getting Started

Clone the repository and run it locally:

```bash
git clone https://github.com/kaziaurpon/Dev-Stack-Builder.git
cd Dev-Stack-Builder
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## ❓ React Questions

**1. What is JSX, and why is it used in React?**

JSX is a syntax extension that lets us write HTML-like markup directly inside JavaScript/TypeScript files. React uses it because it makes the structure of the UI easy to read and write in the same place as the logic that drives it, instead of juggling separate template files.

**2. What is the difference between props and state?**

Props are data passed *into* a component from its parent — the component receiving them cannot change them. State is data a component manages *internally*, using `useState`, and it can change over time in response to user actions or events, causing the component to re-render.

**3. What does the `useState` hook do, and where did you use it in this project?**

`useState` lets a functional component keep and update its own local data between renders. In this project it's used in `App.tsx` to store the fetched `technologies` list, the `loading` flag, and the array of `stack` items the user has added, and in `Navbar.tsx` to track whether the mobile menu is open.

**4. What does the `useEffect` hook do, and why did you need it to load the JSON data?**

`useEffect` runs side effects (like network requests) after a component renders, and can be limited to run only once (or when certain values change) using its dependency array. It's needed to load the JSON data because fetching is asynchronous — `useEffect` with an empty dependency array `[]` triggers the `fetch("/technologies.json")` call exactly once when the app first mounts, and updates state once the data arrives.

**5. Why does every item in a `.map()` list need a unique `key` prop?**

React uses the `key` to tell list items apart between renders, so it can correctly figure out which items were added, removed, or reordered instead of re-rendering the whole list from scratch. Without a stable unique key (here, each technology's `id`), React can mix up items and cause bugs or lose component state.

**6. What is conditional rendering? Show one place you used it (example: the empty stack message).**

Conditional rendering means showing different UI depending on some condition/state, instead of always rendering the same markup. In `YourStack.tsx`, `stack.length === 0` is checked: if true, an empty-state message is shown; otherwise the list of selected technologies and the "Remove All" button are rendered.

**7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?**

A parent passes data down to a child through props — for example, `App.tsx` passes `technologies`, `stackIds`, and `onAdd` down into `<TechGrid />`. To send something back up, the parent passes a *function* down as a prop (like `onAdd`); the child calls that function (e.g. `onClick={() => onAdd(tech)}`), which runs the parent's state-update logic — this is how `TechCard` notifies `App` that a technology should be added to the stack.