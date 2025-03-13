import React, { useRef, useState, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import todo_icon from "../assets/todo_icon.png";

function ToDoList() {
  const [todoList, setTodoList] = useState(() => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  });

  const inputRef = useRef();

  // Add Todo Functionality
  const addTodo = () => {
    const inputVal = inputRef.current.value.trim();
    if (!inputVal) return;

    const newTodo = { id: Date.now(), text: inputVal, isComplete: false };
    setTodoList((prevTodos) => [...prevTodos, newTodo]);
    inputRef.current.value = "";
  };

  // Delete Todo Functionality
  const deleteTodo = (id) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  // Toggle Function
  const toggle = (id) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  // Edit Todo Function
  const editTodo = (id, newText) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, text: newText } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/* Title */}
      <div className="flex items-center mt-6 gap-2">
        <img className="w-8" src={todo_icon} alt="To-Do Icon" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>

      {/* Input Box */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your task"
        />
        <button
          onClick={addTodo}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/* Todo List */}
      <div>
        {todoList.map((item) => (
          <ToDoItem
            key={item.id}
            text={item.text}
            id={item.id}
            isComplete={item.isComplete}
            deleteTodo={deleteTodo}
            toggle={toggle}
            editTodo={editTodo}
          />
        ))}
      </div>
    </div>
  );
}

export default ToDoList;
