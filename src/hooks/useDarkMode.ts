import React, { useEffect, useState } from "react";

const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(false);

 
   useEffect(() => {
     const savedTheme = localStorage.getItem("theme");
     let isDark = false; 
 
     if (savedTheme) {
       isDark = savedTheme === "dark";
     } else {
       isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
     }
 
     setDarkMode(isDark);
     if (isDark) {
       document.documentElement.classList.add("dark");
     } else {
       document.documentElement.classList.remove("dark");
     }
   }, []);
 

  return { darkMode, setDarkMode };
};

export default useDarkMode;
