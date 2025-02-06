import React from "react";
import HelloWorld from "./HelloWorld";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-background flex items-center justify-center p-4">
      <HelloWorld />
    </div>
  );
};

export default HomePage;
