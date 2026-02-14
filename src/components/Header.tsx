import { Moon, Sun } from "lucide-react";
import React from "react";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  scrollbarProgress: number;
};

const Header = ({ toggleDarkMode, darkMode, scrollbarProgress }: Props) => {
  return (
    <header className="sticky top-0 w-full h-[50px] px-[20vw] bg-background text-foreground flex items-center border-b border-border">
      <div className="flex justify-between w-full">
        Header
        <button onClick={toggleDarkMode} className="cursor-pointer">
          {!darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
        </button>   
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150" style={{ width: `${scrollbarProgress}%` }}></div>
    </header>
  );
};

export default Header;
