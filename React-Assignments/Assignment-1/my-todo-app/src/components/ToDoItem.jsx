import React, { useState } from 'react';
import tick from '../assets/tick.png';
import not_tick from '../assets/not_tick.png';
import delete_icon from '../assets/delete.png';

function ToDoItem({ text, id, isComplete, deleteTodo, toggle, editTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTodo(id, newText);
    }
    setIsEditing(false);
  };

  return (
    <div className="bg-slate-100 flex items-center my-3 p-2 pl-2 pr-2 gap-2 rounded-md">
      <div className="flex flex-1 items-center cursor-pointer" onClick={() => toggle(id)}>
        <img src={isComplete ? tick : not_tick} alt="Status" />
        {isEditing ? (
          <input
            className="ml-4 p-1 text-slate-800 border rounded"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}
            onKeyDown={(e) => e.key === "Enter" && handleEdit()}
            autoFocus
          />
        ) : (
          <p className={`text-slate-800 ml-4 text-[17px] ${isComplete ? "line-through text-slate-500" : ""}`}>
            {text}
          </p>
        )}
      </div>
      <button className="text-blue-500 text-sm px-2" onClick={() => setIsEditing(true)}>✏️</button>
      <img onClick={(e) => { e.stopPropagation(); deleteTodo(id); }} className="w-3.5 cursor-pointer" src={delete_icon} alt="Delete" />
    </div>
  );
}

export default ToDoItem;
