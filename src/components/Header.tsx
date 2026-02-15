import { Moon, Sun } from "lucide-react";

interface HeaderProps {
  toggleDarkMode: () => void;
  darkMode: boolean;
  scrollbarProgress: number;
}

const Header = ({ toggleDarkMode, darkMode, scrollbarProgress }: HeaderProps) => {
  return (
    <header className="sticky top-0 w-full h-[50px] px-[5%] md:px-[10%] lg:px-[20%] bg-background text-foreground flex items-center border-b border-border z-10">
      <div className="flex justify-between w-full py-2">
        <h1 className="text-xl font-bold">
        Header
        </h1>
        <button 
          onClick={toggleDarkMode} 
          className="cursor-pointer"
          aria-label="Toggle dark mode"
          title={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        >
          {!darkMode ? <Moon className="w-6  h-6" /> : <Sun className="w-6 h-6" />}
        </button>   
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150" style={{ width: `${scrollbarProgress}%` }}></div>
    </header>
  );
};

export default Header;
