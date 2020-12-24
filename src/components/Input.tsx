import React, { ChangeEvent } from "react";

interface InputProps {
  onHandleEventName: Function;
  eventName: string;
  type: string | undefined;
  placeholder: string;
  name: string;
}

const Input: React.FC<InputProps> = ({
  onHandleEventName,
  eventName,
  type,
  placeholder,
  name,
}): JSX.Element => {
  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onHandleEventName(event.target.value);
  };

  return (
    <>
      <label htmlFor={name}></label>
      <input
        type={type}
        placeholder={placeholder}
        name={name}
        value={eventName}
        onChange={handleOnChangeInput}
      />
    </>
  );
};

export default Input;
