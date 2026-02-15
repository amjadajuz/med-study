import { useEffect, useState } from 'react';
import { BlockRenderer } from '../../components/BlockRenderer'
import Header from '../../components/Header'
import { jsonData } from '../../const/jsonData'

const Home = () => {
    const [scrollProgress, setScrollProgress] = useState(0);
    const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check for saved preference first, then system preference
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

  useEffect(() => {
    // Track scroll progress
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const maxScroll = documentHeight - windowHeight;
      const progress = (scrollTop / maxScroll) * 100;
      setScrollProgress(Math.min(progress, 100));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <div className='bg-background text-foreground w-full min-h-screen transition-colors duration-200'>
      <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} scrollbarProgress={scrollProgress} />
    <div className="px-[5%] md:px-[20%] py-10">
      {jsonData.blocks.map((block, index) => {
        return <BlockRenderer key={index} block={block} />
      })}
      </div>
    </div>
  )
}

export default Home