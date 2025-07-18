import React, { useState } from "react";
import useLocalStorage from "./useLocalStorage";
import Button from "./Button";
import Card from "./Card";
import { FiPlus, FiTrash2 } from "react-icons/fi";

const FILTERS = {
  all: task => true,
  active: task => !task.completed,
  completed: task => task.completed,
};

function TaskManager() {
  const [tasks, setTasks] = useLocalStorage("tasks", []);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");

  const addTask = () => {
    if (input.trim()) {
      setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
      setInput("");
    }
  };

  const toggleTask = id => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(FILTERS[filter]);

  return (
    <div className="flex items-center justify-center min-h-[60vh] py-8 px-2">
      <Card className="w-full max-w-lg mx-auto shadow-2xl glass dark:glass-dark animate-fade-in">
        <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-indigo-600 via-purple-500 to-teal-400 bg-clip-text text-transparent tracking-tight drop-shadow font-poppins">Task Manager</h2>
        <div className="flex gap-2 mb-6">
          <input
            className="flex-1 px-4 py-2 border-2 border-indigo-200 dark:border-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-sm transition-all font-inter"
            type="text"
            value={input}
            onChange={e => setInput(e.target.value)}
            placeholder="Add a new task..."
            onKeyDown={e => e.key === 'Enter' && addTask()}
          />
          <Button onClick={addTask} className="h-10 bg-gradient-to-r from-indigo-500 to-teal-400 text-white shadow-md flex items-center gap-2"><FiPlus /> Add</Button>
        </div>
        <div className="flex justify-center gap-2 mb-6">
          <Button variant={filter === "all" ? "primary" : "secondary"} onClick={() => setFilter("all")} className="px-3">All</Button>
          <Button variant={filter === "active" ? "primary" : "secondary"} onClick={() => setFilter("active")} className="px-3">Active</Button>
          <Button variant={filter === "completed" ? "primary" : "secondary"} onClick={() => setFilter("completed")} className="px-3">Completed</Button>
        </div>
        <ul className="space-y-3 max-h-72 overflow-y-auto pr-1 custom-scrollbar">
          {filteredTasks.length === 0 && <li className="text-gray-400 text-center font-inter">No tasks found.</li>}
          {filteredTasks.map(task => (
            <li key={task.id} className="flex items-center justify-between bg-gradient-to-r from-indigo-100 via-purple-50 to-teal-50 dark:from-gray-800 dark:via-gray-900 dark:to-blue-900 rounded-lg px-4 py-2 shadow-sm group transition-all border border-indigo-100 dark:border-blue-900 animate-fade-in">
              <span
                className={`flex-1 cursor-pointer select-none text-lg transition-all font-inter ${task.completed ? "line-through text-gray-400" : "hover:text-indigo-700 dark:hover:text-teal-200"}`}
                onClick={() => toggleTask(task.id)}
              >
                {task.text}
              </span>
              <Button variant="danger" className="ml-3 opacity-70 group-hover:opacity-100 transition-opacity flex items-center gap-1" onClick={() => deleteTask(task.id)}>
                <FiTrash2 />
              </Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

export default TaskManager; 