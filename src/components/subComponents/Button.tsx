import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  outline?: boolean;
}

const Button = ({ className, text, type, onClick, outline }: ButtonProps) => {
  return (
    <button
      className={`w-48 h-16 rounded-[2rem] text-center text-xl font-bold hover:text-white hover:bg-primary ${className} ${
        outline ? "border-2 border-primary" : ""
      }`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
