import React, { ChangeEvent } from "react";
import styled from "styled-components";

const LabelStyles = styled.label`
  //hide label visually but keep them available to screen reader and other assistive technology
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const InputStyles = styled.input`
  border: none;
  background-color: #1e1e2a;
  border-bottom: 1px dotted hotpink;
  color: white;
`;

interface InputProps {
  onHandleEventName: Function;
  eventName?: string | undefined;
  dateNumber?: number | null;
  type: string | undefined;
  placeholder: string;
  name: string;
  maxLength?: number;
}

const Input: React.FC<InputProps> = ({
  onHandleEventName,
  eventName,
  type,
  placeholder,
  name,
  maxLength,
}): JSX.Element => {
  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onHandleEventName(event.target.value);
  };

  return (
    <>
      <LabelStyles htmlFor={name}></LabelStyles>
      <InputStyles
        type={type}
        placeholder={placeholder}
        name={name}
        value={eventName}
        onChange={handleOnChangeInput}
        maxLength={maxLength}
        required
      />
    </>
  );
};

export default Input;
