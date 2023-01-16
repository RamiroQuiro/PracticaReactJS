import { motion } from "framer-motion";
import * as React from "react";

const variants = {
  rotate: {
    rotate: [0, 20, 0],
    scale: [1, 1.3, 1.2],
    transition: { duration: 0.75 },
    fill: "#EA580C",
  },
  // You can do whatever you want here, if you just want it to stop completely use `rotate: 0`
  stop: {
    rotate: [0, 30, 0],
    scale: [1.2, 1.3, 1],
    transition: { duration: 0.75 },
    fill: "#22272E",
  },
};

const variantPAth={
  rotate:{
    opacity:1,

  },
  stop:{
    opacity:0
  }
}
const SvgComponent = ({ isToggle }) => (
  <svg
    // onClick={()=>{setIsToggle(!isToggle)}}
    // fill="#1A73E9"
    width={40}
    height={40}
    className="mx-auto"
    viewBox="0 0 64 64"
    xmlns="http://www.w3.org/2000/svg"
  ><motion.g variants={variants} animate={isToggle ? "rotate" : "stop"}>
    <motion.path
    variants={variantPAth}
    animate={isToggle ? "rotate" : "stop"}
    d="M8 12a3 3 0 1 0-3 3 3.003 3.003 0 0 0 3-3Zm-3 1a1 1 0 1 1 1-1 1.001 1.001 0 0 1-1 1Z" />
    <circle cx={38} cy={22} r={2} />
    <circle cx={24} cy={22} r={2} />

    
      <path
      
      d="M31 8A24.027 24.027 0 0 0 7 32v22.209A3.795 3.795 0 0 0 10.791 58h15.015a3.2 3.2 0 0 0 3-2.1c.73.067 1.464.1 2.194.1a24 24 0 0 0 0-48Zm-5.194 48H15V46h1a1 1 0 0 0 .94-.66 38.822 38.822 0 0 1 3.294-7.313 1.002 1.002 0 0 1 .763.904l-.984 5.904A1 1 0 0 0 21 46h4.806A1.195 1.195 0 0 1 27 47.194V48h-2a1 1 0 0 0 0 2h2v2h-2a1 1 0 0 0 0 2h2v.806A1.195 1.195 0 0 1 25.806 56ZM31 54c-.665 0-1.335-.03-2-.09v-6.716A3.198 3.198 0 0 0 25.806 44H22.18l.805-4.835A.979.979 0 0 0 23 39a3.003 3.003 0 0 0-3-3c-.615 0-1.745 0-4.7 8H9V34h3a1 1 0 0 0 0-2H9a22 22 0 1 1 22 22ZM54.7 53.456a1 1 0 0 0-1.414 0l-.767.767-.767-.767a1 1 0 0 0-1.414 1.414l.767.767-.767.767a1 1 0 1 0 1.414 1.414l.767-.767.767.767a1 1 0 1 0 1.414-1.414l-.767-.767.767-.767a1 1 0 0 0 0-1.414Z" />
    <circle cx={58} cy={45} r={1} />
    <path
    
    d="M39.264 29H22.736a2.192 2.192 0 0 0-.854 4.21 24.121 24.121 0 0 0 18.236 0 2.192 2.192 0 0 0-.854-4.21ZM52 6a1 1 0 0 0 1-1V4a1 1 0 0 0-2 0v1a1 1 0 0 0 1 1ZM52 8a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1ZM49 8h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2ZM55 6h-1a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2Z" />
    </motion.g>
  </svg>
);

export default SvgComponent;
