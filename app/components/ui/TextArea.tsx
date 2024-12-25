import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
}
const TextArea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => {
  return (
    <textarea
      className={`w-full px-3 py-2 border border-gray-300 rounded-md text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${className}`}
      {...props}
    />
  );
};

export default TextArea;
