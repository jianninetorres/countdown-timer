import React from "react";
import styled from "styled-components";
interface ButtonColorProps {
  bgColor?: string;
}

interface ButtonProps extends ButtonColorProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const ButtonStyles = styled.button<ButtonColorProps>`
  margin-top: 32px;
  border: none;
  border-radius: 6px;
  padding: 8px 16px;
  font-size: 1.5rem;
  background-color: ${(props) => props.bgColor || "green"};
  color: white;
  cursor: pointer;
`;

const Button: React.FC<ButtonProps> = ({
  text,
  onClick,
  bgColor,
}): JSX.Element => {
  return (
    <>
      <ButtonStyles onClick={onClick} bgColor={bgColor}>
        {text}
      </ButtonStyles>
    </>
  );
};

export default Button;
