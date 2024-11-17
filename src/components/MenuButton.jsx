import React from "react";
import { motion } from "framer-motion";



const MenuButton = ({ setIsOpen, isOpen }) => {
  
const handleClick = () => {
  
    setIsOpen((prev) => !prev);
  
}  
  
  return (
    <button
      onClick={handleClick}
      className="min-w-[60px] flex justify-center align-middle items-center sm:hidden"
    >
      <div className="flex flex-col space-y-2.5 items-center justify-center p-3 h-[60px] max-w-[40px] ">
        <motion.div
          className="bg-costumYellow w-[35px]"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ originX: 0.24, originY: 0.5, height: "2px" }}
        />
        <motion.div
          className="bg-costumYellow w-[35px]"
          initial={{ rotate: 0 }}
          animate={{ rotate: isOpen ? -45 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ originX: 0.24, originY: 0.5, height: "2px" }}
        />
      </div>
    </button>
  );
};

export default MenuButton;
