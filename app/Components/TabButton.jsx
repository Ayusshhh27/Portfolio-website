import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  return (
    <button
      onClick={selectTab}
      className={`focus:outline-none transition-all duration-300 ${
        active ? "text-white" : "text-[#6B7280]"
      }`}
    >
      <p className="mr-3 font-semibold hover:text-white">{children}</p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className={`h-1 bg-gradient-to-r from-secondary-300 via-secondary-500 to-secondary-700 mt-2 mr-3`}
      ></motion.div>
    </button>
  );
};

export default TabButton;
