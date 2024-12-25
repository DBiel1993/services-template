import React from "react";
import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input: React.FC<InputProps> = ({ className, ...props }) => {
  return (
    <input
      className={clsx(
        "py-2 px-4 border rounded bg-gray-900 text-white focus:ring-2 focus:ring-blue-400",
        className
      )}
      {...props}
    />
  );
};
