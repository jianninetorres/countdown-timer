import React, { useState, useEffect } from "react";
import { gsap } from "gsap";
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
  background-size: 100%, cover;
  height: 100vh;
  font-family: "Inter", sans-serif;
`;

const App: React.FC = (): JSX.Element => {
  const [eventName, setEventName] = useState<string>("");
  const [hasEvent, setHasEvent] = useState<boolean>(false);
  const [countdownDays, setCountdownDays] = useState<number | null>(null);
  const [countdownHours, setCountdownHours] = useState<number | null>(null);
  const [countdownMinutes, setCountdownMinutes] = useState<number | null>(null);
  const [countdownSeconds, setCountdownSeconds] = useState<number | null>(null);

  const flipCard = () => {
    gsap.fromTo(
      ".card.top",
      {
        duration: 1,
        rotationX: 0,
        skewX: -2,
        transformOrigin: "center bottom",
      },
      { duration: 1, rotationX: 180, skewX: 1 }
    );
  };

  // interface Units {
  //   [string: string]: number;
  // }

  // const units: Units = {
  //   seconds: 1000,
  //   minutes: 1000 * 60,
  //   hours: 1000 * 60 * 60,
  //   days: 1000 * 60 * 60 * 24,
  // };

  const updateTime = (fullDate: string, unit: string) => {
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

      switch (unit) {
        case "days":
          countdownDays === days
            ? setCountdownDays((prevState) => prevState)
            : setCountdownDays(days);
          break;
        case "hours":
          countdownHours === hours
            ? setCountdownHours((prevState) => prevState)
            : setCountdownHours(hours);
          break;
        case "minutes":
          countdownMinutes === minutes
            ? setCountdownMinutes((prevState) => prevState)
            : setCountdownMinutes(minutes);
          break;
        case "seconds":
          countdownSeconds === seconds
            ? setCountdownSeconds((prevState) => prevState)
            : setCountdownSeconds(seconds);
          break;
      }
    }, 900);
  };

  const startCountdown = (eventName: string, fullDate: string): void => {
    setHasEvent(true);
    setEventName(eventName);
    updateTime(fullDate, "seconds");
    updateTime(fullDate, "minutes");
    updateTime(fullDate, "hours");
    updateTime(fullDate, "days");
  };

  useEffect(() => {
    flipCard();
    // return () => {
    //   cleanup
    // }
  }, [countdownDays, countdownHours, countdownMinutes, countdownSeconds]);

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
