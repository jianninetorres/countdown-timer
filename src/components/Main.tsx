import React, { ChangeEvent, useState } from "react";
import Input from "./Input";
import Button from "./Button";
import HeaderH1 from "./HeaderH1";
import styled from "styled-components";

const MainStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 64px 16px;
  height: 50%;

  @media screen and (min-width: 1024px) {
    padding-top: 128px;
    padding-bottom: 128px;
  }

  input[name="countdown-title"] {
    height: 40px;
    width: 100%;
    max-width: 280px;
    margin-bottom: 32px;
    font-size: 1.5rem;
  }

  input[name="countdown-to-day"],
  input[name="countdown-to-month"],
  input[name="countdown-to-year"] {
    font-size: 1.5rem;
  }
`;

const InputContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(40px, 74px));
  grid-template-rows: 60px;
  grid-gap: 32px;
`;

const ErrorStyles = styled.p`
  display: inline-block;
  position: relative;
  color: lightgrey;
`;

const CountDownNameErrorStyles = styled(ErrorStyles)`
  bottom: 20px;
`;

const DateErrorStyles = styled(ErrorStyles)`
  top: 20px;
  width: 100%;
  max-width: 280px;
  text-align: center;
`;

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

  const onHandleEventName = (event: string): void => {
    setEventName(event);
  };

  const onHandleDayInput = (event: string): void => {
    const day = parseInt(event);
    if (typeof day === "number" && day < 32) {
      setDayInput(day);
    }
  };

  const onHandleMonthInput = (event: string): void => {
    const month = parseInt(event);
    if (typeof month === "number" && month < 13) {
      setMonthInput(month);
    }
  };

  const onHandleYearInput = (event: string): void => {
    const year = parseInt(event);
    const thisYear = new Date().getFullYear();
    if (typeof year === "number" && (year > thisYear || year === thisYear)) {
      setYearInput(year);
    }
  };

  const onClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    // TODO: use a library like date-fns
    const fullDate = `${yearInput}-${monthInput}-${dayInput}`;
    const now = Date.now();
    const futureDateParsed = Date.parse(`${fullDate}`);
    const difference = Math.abs(now - futureDateParsed);

    if (eventName === "") {
      setEventNameError("Please enter a title for your countdown.");
    }

    if (
      dayInput === null ||
      monthInput === null ||
      yearInput === null ||
      difference < 0
    ) {
      console.log(futureDateParsed - now);
      console.log(difference);
      setDateError(
        "Please enter a future date with the correct format DD-MM-YYYY"
      );
    } else if (
      eventName !== "" &&
      dayInput !== null &&
      monthInput !== null &&
      yearInput !== null &&
      difference > 0
    ) {
      startCountdown(eventName, fullDate);
    }
  };

  return (
    <MainStyles>
      <HeaderH1 fontSize="2rem">Set your countdown</HeaderH1>
      {eventNameError && (
        <CountDownNameErrorStyles>{eventNameError}</CountDownNameErrorStyles>
      )}
      <Input
        onChange={onHandleEventName}
        eventName={eventName}
        type="text"
        placeholder="Name your countdown"
        name="countdown-title"
      />
      <InputContainerStyles>
        <Input
          onChange={onHandleMonthInput}
          type="text"
          placeholder="MM"
          name="countdown-to-month"
          maxLength={2}
        />
        <Input
          onChange={onHandleDayInput}
          type="text"
          placeholder="DD"
          name="countdown-to-day"
          maxLength={2}
        />
        <Input
          onChange={onHandleYearInput}
          type="text"
          placeholder="YYYY"
          name="countdown-to-year"
          maxLength={4}
        />
      </InputContainerStyles>
      {dateError && <DateErrorStyles>{dateError}</DateErrorStyles>}
      <Button text="START" onClick={onClickButton} />
    </MainStyles>
  );
};

export default Main;
