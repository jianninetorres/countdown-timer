import React from "react";
import styled from "styled-components";

const ButtonStyles = styled.button`
  margin-top: 32px;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1.5rem;
  background-color: green;
  color: white;
  cursor: pointer;
`;
interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }): JSX.Element => {
  return (
    <>
      <ButtonStyles onClick={onClick}>{text}</ButtonStyles>
    </>
  );
};

export default Button;
