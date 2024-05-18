import React, { useState, useEffect } from "react";
import ChatComponent from "./components/ChatComponent";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? "bg-zinc-900" : "bg-zinc-100"}`}>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white dark:bg-zinc-800 bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg w-full m-20">
          <h1 className="text-4xl font-bold text-center mb-6 text-zinc-900 dark:text-zinc-100">
            AH VoiceGPT
          </h1>
          <ChatComponent />
        </div>
      </div>
    </div>
  );
};

export default App;
