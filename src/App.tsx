import React, { useState } from "react";
import Main from "./components/Main";
import Countdown from "./components/Countdown";
import "./assets/styles/typography.css";
import styled from "styled-components";
import starsBg from "./assets/images/bg-stars.svg";
import hillsBg from "./assets/images/pattern-hills.svg";

const AppStyles = styled.div`
  background: url(${hillsBg}) no-repeat center bottom,
    url(${starsBg}) no-repeat center top,
    linear-gradient(#1e1e2a, #1f1d2a, #211d2b, #231d2b);
  background-size: 100%;
  height: 100vh;
  font-family: "Inter", sans-serif;

  h1 {
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
  }
`;

const App: React.FC = (): JSX.Element => {
  const [eventName, setEventName] = useState<string>("");
  const [hasEvent, setHasEvent] = useState<boolean>(false);
  const [countdownDays, setCountdownDays] = useState<number | null>(null);
  const [countdownHours, setCountdownHours] = useState<number | null>(null);
  const [countdownMinutes, setCountdownMinutes] = useState<number | null>(null);
  const [countdownSeconds, setCountdownSeconds] = useState<number | null>(null);

  const startCountdown = (eventName: string, fullDate: string): void => {
    setHasEvent(true);
    setInterval(() => {
      const now = Date.now();
      const futureDateParsed = Date.parse(fullDate);

      const difference = Math.abs(futureDateParsed - now);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setEventName(eventName);
      setCountdownDays(days);
      setCountdownHours(hours);
      setCountdownMinutes(minutes);
      setCountdownSeconds(seconds);
    }, 1000);
  };

  return (
    <AppStyles className="App">
      {hasEvent ? (
        <Countdown
          title={eventName}
          days={countdownDays}
          hours={countdownHours}
          minutes={countdownMinutes}
          seconds={countdownSeconds}
        />
      ) : (
        <Main startCountdown={startCountdown} />
      )}
    </AppStyles>
  );
};

export default App;
