import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";

interface MainProps {
  startCountdown: Function;
}

const Main: React.FC<MainProps> = ({ startCountdown }): JSX.Element => {
  const [eventName, setEventName] = useState<string>("");
  const [dayInput, setDayInput] = useState<number | null>(null);
  const [monthInput, setMonthInput] = useState<number | null>(null);
  const [yearInput, setYearInput] = useState<number | null>(null);
  const [eventNameError, setEventNameError] = useState<string | null>(null);
  const [dateError, setDateError] = useState<string | null>(null);

  const onHandleEventName = (getEventName: string): void => {
    setEventName(getEventName);
  };

  const onHandleDayInput = (getDayInput: string): void => {
    const day = parseInt(getDayInput);
    if (typeof day === "number" && day <= 31) {
      console.log(`is number, ${day}`);
      setDayInput(day);
    }
  };

  const onHandleMonthInput = (getMonthInput: string): void => {
    const month = parseInt(getMonthInput);
    if (typeof month === "number" && month <= 12) {
      console.log(`is number, ${month}`);
      setMonthInput(month);
    }
  };

  const onHandleYearInput = (getYearInput: string): void => {
    const year = parseInt(getYearInput);
    const thisYear = new Date().getFullYear();
    if (typeof year === "number" && year >= thisYear) {
      console.log(`is number, ${year}`);
      console.log(thisYear);
      setYearInput(year);
    }
  };

  const onClickButton = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const fullDate = `${dayInput}-${monthInput}-${yearInput}`;
    // const fullDateValidator = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/gm;

    if (eventName === "") {
      setEventNameError("Please enter a title for your countdown.");
    }

    if (dayInput === null || monthInput === null || yearInput === null) {
      setDateError("Please enter a date with the correct format DD-MM-YYYY");
    } else if (eventName !== "" && fullDate) {
      startCountdown(eventName, fullDate);
    }
  };

  return (
    <main>
      {/* <h1>HELLO! WHAT SHOULD WE COUNT DOWN TO?</h1> */}
      <Input
        onHandleEventName={onHandleEventName}
        eventName={eventName}
        type="text"
        placeholder="Name your countdown"
        name="countdown-title"
      />
      {eventNameError && <p>{eventNameError}</p>}
      <div>
        <Input
          onHandleEventName={onHandleDayInput}
          dateNumber={dayInput}
          type="text"
          placeholder="DD"
          name="countdown-to-day"
          maxLength={2}
        />
        <Input
          onHandleEventName={onHandleMonthInput}
          dateNumber={monthInput}
          type="text"
          placeholder="MM"
          name="countdown-to-month"
          maxLength={2}
        />
        <Input
          onHandleEventName={onHandleYearInput}
          dateNumber={yearInput}
          type="text"
          placeholder="YYYY"
          name="countdown-to-year"
          maxLength={4}
        />
        {dateError && <p>{dateError}</p>}
      </div>
      <Button text="START" onClick={onClickButton} />
    </main>
  );
};

export default Main;
