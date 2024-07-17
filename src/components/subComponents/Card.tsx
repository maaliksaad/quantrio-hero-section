import React from "react";
interface CardProps {
  className?: string;
  children?: React.ReactNode;
}

const Card = ({ className, children }: CardProps) => {
  return (
    <div
      className={` rounded-[1.25rem] bg-white shadow-sm items-center p-4 gap-6 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
