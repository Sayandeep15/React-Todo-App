# 📝 React Todo App 

A simple and elegant To-Do list web application built with **React**. Manage your daily tasks with ease — add, delete, edit, and check off completed todos. Your data stays intact even after page reloads thanks to **localStorage**.

---

## 🚀 Features

- ✅ **Add, Edit, and Delete Todos**  
  Easily manage your list of tasks.

- 📌 **UUID-based Unique ID Generation**  
  Each task is assigned a globally unique identifier using [`uuid`](https://www.npmjs.com/package/uuid) to ensure precise task manipulation and storage.
- 🌒 **Dark Mode / Light Mode Toggle**  
  Toggle between dark and light themes using a custom slider switch. The selected mode is saved in `localStorage` and persists across reloads.

- 💾 **Local Storage Integration**  
  Todos are persisted in `localStorage`, ensuring tasks remain after page reload or browser restart.

- ✔️ **Mark Tasks as Completed**  
  Tasks can be toggled as complete/incomplete with a checkbox.

- 👀 **Toggle Visibility for Finished Tasks**  
  A “Show Finished” checkbox allows users to filter out completed tasks from the list for a cleaner interface.

- 🎨 **Styled with Tailwind CSS**  
  Modern UI built with responsive and interactive Tailwind classes. Includes subtle hover effects and layout responsiveness. 

---

## 🛠️ Tech Stack

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [UUID](https://www.npmjs.com/package/uuid)
- [React Icons](https://react-icons.github.io/react-icons/)
- [LocalStorage API](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/react-todo-app.git
cd react-todo-app
npm install
npm start
