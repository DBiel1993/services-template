import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "md",
  className = "",
  children,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors";
  const variantClasses = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-700 text-gray-700 hover:bg-gray-100",
  };
  const sizeClasses = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-4 py-2",
    lg: "text-lg px-6 py-3",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
