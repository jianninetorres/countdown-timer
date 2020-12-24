import React, { ChangeEvent } from "react";

interface InputProps {
  onHandleEventName: any;
  eventName: string;
}

const EventNameInput: React.FC<InputProps> = ({
  onHandleEventName,
  eventName,
}): JSX.Element => {
  const handleOnChangeInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onHandleEventName(event.target.value);
  };

  return (
    <>
      <label htmlFor="countdown-title"></label>
      <input
        type="text"
        placeholder="Name your countdown"
        name="countdown-title"
        value={eventName}
        onChange={handleOnChangeInput}
      />
    </>
  );
};

export default EventNameInput;
