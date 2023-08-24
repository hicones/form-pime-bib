import React from "react";

interface FormContainerProps {
  children: React.ReactNode;
}

export const FormContainer = ({ children }: FormContainerProps) => {
  return (
    <div className="w-full flex flex-col justify-center gap-8">{children}</div>
  );
};
