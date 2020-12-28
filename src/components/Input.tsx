import React, { ChangeEvent } from "react";

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
      <label htmlFor={name}></label>
      <input
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
