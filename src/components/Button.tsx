import React from "react";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
  return (
    <>
      <div onClick={onClick}>{text}</div>
    </>
  );
};

export default Button;
