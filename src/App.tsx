import React, { useState } from "react";
import Main from "./components/Main";
import Countdown from "./components/Countdown";

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
      const futureDate = new Date(fullDate);
      const futureDateParsed = Date.parse(fullDate);

      const difference = Math.abs(futureDateParsed - now);
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      console.log(futureDate, days, hours, minutes, seconds);
      setEventName(eventName);
      setCountdownDays(days);
      setCountdownHours(hours);
      setCountdownMinutes(minutes);
      setCountdownSeconds(seconds);
    }, 1000);
  };

  return (
    <div className="App">
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
    </div>
  );
};

export default App;
