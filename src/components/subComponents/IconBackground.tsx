import React from "react";
interface IconBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  notificaton?: boolean;
  noticationNumber?: number;
}
const IconBackground = ({
  children,
  className,
  notificaton,
  noticationNumber,
}: IconBackgroundProps) => {
  return (
    <div
      className={`relative min-w-[3.75rem] min-h-[3.75rem] bg-secondary rounded-full flex justify-center items-center ${className}}`}
    >
      {notificaton ? (
        <div className=" absolute top-0 right-0 min-w-4 min-h-4 bg-primary rounded-full flex justify-center items-center border-2 border-white">
          <span className="text-[#f7fafc] text-[0.375rem] font-bold">
            {noticationNumber}
          </span>
        </div>
      ) : null}
      {children}
    </div>
  );
};

export default IconBackground;
