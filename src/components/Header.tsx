import React from "react";

type Props = {
  toggleDarkMode: () => void;
  darkMode: boolean;
  scrollbarProgress: number;
};

const Header = ({ toggleDarkMode, darkMode, scrollbarProgress }: Props) => {
  return (
    <header className="sticky top-0 w-[100vw] h-[50px] px-[20vw] bg-color-background flex items-center ">
      <div className="flex justify-between text-foreground">
        Header
        <button onClick={toggleDarkMode}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>   
      </div>
      <div className="absolute bottom-0 left-0 h-[2px] bg-primary transition-all duration-150" style={{ width: `${scrollbarProgress}%` }}></div>
    </header>
  );
};

export default Header;
