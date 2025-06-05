# React ToDo List

[![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)](https://react.dev/)
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)](https://vite.dev/)
<br/>
[![License](https://img.shields.io/badge/License-MIT-green.svg)](./LICENSE)
![W3C](https://img.shields.io/w3c-validation/html?targetUrl=https%3A%2F%2Fcptblackmore-reacttodolist.netlify.app%2F)
[![Netlify Status](https://api.netlify.com/api/v1/badges/7285daaa-8f77-4875-8435-67345826f5c3/deploy-status)](https://app.netlify.com/projects/cptblackmore-reacttodolist/deploys)

- [Русская версия README](./README.md)

A functional task manager with a minimalist interface. Built from scratch with React, including most components and business logic.

> [Live Demo](https://cptblackmore-reacttodolist.netlify.app/)

###### Other projects

[![JobTracker](https://img.shields.io/badge/JobTracker-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker) [![JobTracker Server](https://img.shields.io/badge/JobTracker-Server-96b9ff.svg?logo=data:image/svg%2bxml;base64,PHN2ZyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHZpZXdCb3g9JzAgMCA3MiA3Mic+DQogIDxyZWN0IHdpZHRoPSc3MicgaGVpZ2h0PSc3Micgcng9JzgnIGZpbGw9JyMzNzVFOTcnIC8+DQogIDxnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKDUsIDUpJyBmaWxsPScjRUFGMkZGJz4NCiAgICA8cGF0aCBkPSdNMTEuNDAgNDlRNy44NSA0OSA0Ljg4IDQ3LjY3UTEuOTAgNDYuMzUgMCA0My45MEw0LjUwIDM4LjUwUTUuOTUgNDAuNDAgNy41NSA0MS4zOFE5LjE1IDQyLjM1IDExLjAwIDQyLjM1UTE1Ljk1IDQyLjM1IDE1Ljk1IDM2LjU1TDE1Ljk1IDE5LjkwTDMuNjUgMTkuOTBMMy42NSAxMy40MEwyNC4wMCAxMy40MEwyNC4wMCAzNi4xMFEyNC4wMCA0Mi42MCAyMC44MCA0NS44MFExNy42MCA0OSAxMS40MCA0OVpNMzkuMjUgNDguNDBMMzkuMjUgMjAuMDBMMjguMDUgMjAuMDBMMjguMDUgMTMuNDBMNTguNTUgMTMuNDBMNTguNTUgMjAuMDBMNDcuMzUgMjAuMDBMNDcuMzUgNDguNDBMMzkuMjUgNDguNDBaJy8+DQogIDwvZz4NCjwvc3ZnPg==)](https://github.com/cptblackmore/jobtracker-server) [![React ToDo List](https://img.shields.io/badge/React_ToDo_List-13877b?logo=react)](https://github.com/cptblackmore/reacttodolist)

## Features

- Add, edit, delete, and mark tasks as completed.

    <img src="https://github.com/user-attachments/assets/3c22bb67-a631-44a9-aaa1-0f0bedd7021c" width="370px" alt="Add, edit, delete, mark tasks"/>

- Filter tasks via search and/or category selection.

    <img src="https://github.com/user-attachments/assets/219c96c3-542d-47e0-a28d-563adac6667a" width="370px" alt="Filter tasks"/>

- Drag-and-drop task reordering via touch, mouse, or keyboard (`Space` + `↑`/`↓`).

    <img src="https://github.com/user-attachments/assets/a86690d8-026b-477f-abd2-ba47c1080f7a" width="370px" alt="Drag-n-drop tasks"/>

- Undo and redo any action performed on the list.

    <img src="https://github.com/user-attachments/assets/27753b1a-b295-4bfe-8a45-816501aea91c" width="370px" alt="Undo/redo task list actions"/>

- Theme selection (light/dark).

    <img src="https://github.com/user-attachments/assets/8c3bad21-65f2-4c96-b1c2-cbe15f4e0160" width="370px" alt="Theme selection"/>

## Stack

#### Languages and architecture

- **HTML / CSS / JS**
- **React 18.3.1**

#### Building and development

- **Vite** for bundling and dev server
- **ESLint** with **Prettier** setup for consistent code style

#### Styling

- **styled-jsx** (CSS-in-JS)
- **SCSS** (used for nesting and maintaining a clean style structure)

#### Libraries

- [nanoid](https://github.com/ai/nanoid) — generates short unique IDs
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) — drag-n-drop API ([react-beautiful-dnd](https://github.com/atlassian/react-beautiful-dnd) fork)
- [use-undo](https://github.com/homerchen19/use-undo) — manages undo/redo history state
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) — controls focus behavior in modals

#### Design and UX

- **Responsive layout** for all screen sizes
- **Hotkeys** for reordering, undo/redo, navigation, etc.
- **Drag-n-drop** (support across devices)

## Getting Started

0. Make sure you have:
    - Node.js **v18 or later** — [download from nodejs.org](https://nodejs.org/)
    - Git — [download from git-scm.com](https://git-scm.com/)
1. Clone the repository: `git clone https://github.com/cptblackmore/reacttodolist`
2. Navigate into the directory: `cd reacttodolist`
3. Install dependencies: `npm install`
4. Start the project: `npm run dev -- --host`
5. Vite will display local network access links in the terminal:
    - `http://localhost:5173` — for the current device
    - `http://<Network-IP>:5173` — for devices on the same LAN (e.g. smartphone testing)

## Project Highlights

- **Drag-and-drop**: supported via tap, pointer, and keyboard (`Space` to select, `↑`/`↓` to move).
- **Hotkey support**: `Delete` — remove task, `Ctrl+E` — edit, `Enter` — mark as done. Task focus is keyboard-navigable via `↑`/`↓`
- **Storage**: tasks and selected theme persist in `localStorage`. Undo/redo history is session-only.
- **Theme switching**: implemented with React Context, making it accessible at any nesting level.
- **Render Props pattern**: selection logic is encapsulated in a smart wrapper, allowing UI variations (themes, categories) without duplicating behavior.

## Future Improvements

- **Split theme selection**: split light/dark toggle from color scheme selection, and add labels for each option.
- **Empty task warning**: notify users when trying to save a task with an empty title.
- **Task deletion confirmation**: require a second click on the delete icon to avoid accidental removals.
- **Auto-expanding inputs**:  make inputs responsive to content or switch to an auto-resizing `textarea`
- **Hotkey support & reference**: extend the hotkey list and add a UI hint for all available shortcuts.

## Author

**Victor** _aka_ **captain_blackmore**

- [Telegram](https://t.me/captain_blackmore)
- [Github](https://github.com/cptblackmore)

## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

### Acknowledgements

This project makes use of the following open-source libraries:

- [nanoid](https://github.com/ai/nanoid) - Licensed under the [MIT](https://github.com/ai/nanoid?tab=MIT-1-ov-file#readme).
- [@hello-pangea/dnd](https://github.com/hello-pangea/dnd) - Licensed under the [Apache 2.0](https://github.com/hello-pangea/dnd?tab=License-1-ov-file#readme).
- [use-undo](https://github.com/homerchen19/use-undo) - Licensed under the [MIT](https://github.com/homerchen19/use-undo?tab=MIT-1-ov-file#readme).
- [react-focus-lock](https://github.com/theKashey/react-focus-lock) - Licensed under the [MIT](https://github.com/theKashey/react-focus-lock?tab=MIT-1-ov-file#readme).
