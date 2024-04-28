import React from "react";
import NavigationButtons from "./NavigationButtons";

const Header2 = () => {
  return (
    <div className="bg-white p-4">
      <div className="w-36 h-20">
        <img src="../logo.png" alt="Logo" />
      </div>

      <NavigationButtons />
    </div>
  );
};

export default Header2;
