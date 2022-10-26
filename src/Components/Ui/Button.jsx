import React from "react";
import { useParams } from "react-router-dom";

const Button = ({ children, className, type, onClick, width }) => {
  return (
    <button onClick={onClick} type={type} className={` ${width} rounded-full transition-all py-4 font-semibold cursor-pointer ${className} `}>
      {children}
    </button>
  );
};

export default Button;
