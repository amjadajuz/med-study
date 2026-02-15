import { useEffect, useState } from "react";


const useScrollPosition = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      animationFrameId = requestAnimationFrame(() => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.scrollY;
        const maxScroll = documentHeight - windowHeight;
        const progress = (scrollTop / maxScroll) * 100;
        setScrollProgress(Math.min(progress, 100));
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return { scrollProgress };
};

export default useScrollPosition;
