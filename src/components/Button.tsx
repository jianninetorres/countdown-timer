import React from "react";

interface ButtonProps {
  type: "button" | "submit" | "reset" | undefined;
  text: string;
  onClick: any;
}

const Button: React.FC<ButtonProps> = ({
  type,
  text,
  onClick,
}): JSX.Element => {
  return (
    <>
      <button type={type} onClick={onClick}>
        {text}
      </button>
    </>
  );
};

export default Button;
