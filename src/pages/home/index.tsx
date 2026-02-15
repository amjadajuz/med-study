import { useEffect, useState } from 'react';
import { BlockRenderer } from '../../components/blocks/BlockRenderer'
import Header from '../../components/common/Header'
import { jsonData } from '../../const/jsonData'
import SkeletonLoader from '../../components/common/SkeletonLoader';
import type { Block } from '../../types/blocks';
import { TIMINGS } from '../../const/config';
import useScrollPosition from '../../hooks/useScrollPosition';
import useDarkMode from '../../hooks/useDarkMode';

const Home = () => {
    const { scrollProgress } = useScrollPosition();
    const { darkMode, setDarkMode } = useDarkMode();
    const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, TIMINGS.INITIAL_LOAD_DELAY); 
    
    return () => clearTimeout(timer);
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
    
    <div className="px-[5%] md:px-[10%] lg:px-[20%] py-10">
      {isLoading ? (
        <div className='flex flex-col gap-[24px]'>
          <SkeletonLoader width="100%" height="48px" variant="text" />
          <SkeletonLoader width="100%" height="72px" variant="text" />
          <div className='flex gap-[16px]'>
            <SkeletonLoader width="50%" height="200px" variant="text" />
            <SkeletonLoader width="50%" height="200px" variant="text" />
          </div>
        </div>
      ) : (
        <>
          {(jsonData.blocks as Block[]).map((block, index) => (
            <BlockRenderer key={index} block={block} />
          ))}
        </>
      )}
    </div>
    </div>
  )
}

export default Home