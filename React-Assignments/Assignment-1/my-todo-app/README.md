#📌 To-Do List Application

##🚀 Overview

This is a simple To-Do List application built using React.js and Tailwind CSS. It allows users to add, edit, delete, and mark tasks as completed while persisting data in localStorage.

##✨ Features

- ✅ Add tasks to the list

- ✏️ Edit existing tasks

- 🗑️ Delete tasks

- ✅ Mark tasks as complete/incomplete

- 💾 Data persists in localStorage

- 🎨 Responsive UI with Tailwind CSS

## 🛠️ Tech Stack

- React.js (Functional Components & Hooks)

- Tailwind CSS (for styling)

- Vite (React project setup)

## 📂 Folder Structure

```sh
📦 todo-app
┣ 📂 src
┃ ┣ 📂 assets (icons/images)
┃ ┣ 📂 components
┃ ┃ ┣ 📄 Header.js
┃ ┃ ┣ 📄 ToDoList.js
┃ ┃ ┣ 📄 ToDoItem.js
┃ ┣ 📄 App.js
┃ ┣ 📄 main.jsx
┣ 📄 index.html
┣ 📄 package.json
┣ 📄 tailwind.config.js
┗ 📄 README.md
```

## 🚀 Installation & Setup

1.  Clone the repository

```sh
git clone https://github.com/yourusername/todo-app.git
cd todo-app
```

2. Install dependencies

```sh
npm install
```

3. Start the development server

```sh
npm run dev
```

4. Open in browser

```sh
http://localhost:5173
```

## 📌 Usage Guide

1. Add a Task: Type a task in the input field and click ADD +.

2. Mark as Completed: Click on a task to toggle between complete and incomplete.

3. Edit a Task: (To be implemented in future updates).

4. Delete a Task: Click the delete icon next to a task to remove it.

## 📜 Components Breakdown

- **App.js** - Main entry point that renders the ToDoList component.

- **ToDoList.js** - Manages the list of tasks, input field, and handles state.

- **ToDoItem.js** - Represents a single task with complete and delete functionality.

- **Header.js** - (To be added for better structure).