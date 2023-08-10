import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, className, href }) => {
  return (
    <Link
      to={href}
      className={`text-base font-normal bg-primary text-white rounded-md px-3 py-2 ${className} w-max inline-block`}
    >
      {children}
    </Link>
  );
};

export default Button;
