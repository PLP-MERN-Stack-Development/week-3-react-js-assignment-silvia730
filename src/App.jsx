import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import { ThemeProvider, useTheme } from "./ThemeContext";
import TaskManager from "./components/TaskManager";
import PostsPage from "./pages/Posts";
import "./index.css";

function HomeWithTasks() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <div className="flex justify-end mb-4">
        <button
          onClick={toggleTheme}
          className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
      <TaskManager />
    </>
  );
}

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<HomeWithTasks />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
