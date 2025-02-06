import { motion } from "framer-motion";
import React from "react";

interface HelloWorldProps {
  text?: string;
  className?: string;
}

const HelloWorld: React.FC<HelloWorldProps> = ({
  text = "Hello World!",
  className = "",
}) => {
  return (
    <div
      className={`w-full h-full min-h-[200px] bg-background flex items-center justify-center ${className}`}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground"
      >
        {text}
      </motion.h1>
    </div>
  );
};

export default HelloWorld;
