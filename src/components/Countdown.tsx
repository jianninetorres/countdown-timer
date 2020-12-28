import React from "react";

interface CountdownProps {
  title: string;
  days: number | null;
  hours: number | null;
  minutes: number | null;
  seconds: number | null;
}

const Countdown: React.FC<CountdownProps> = ({
  title,
  days,
  hours,
  minutes,
  seconds,
}): JSX.Element => {
  return (
    <div>
      <h1>{title}</h1>
      <h1>
        {days}, {hours}, {minutes}, {seconds}
      </h1>
    </div>
  );
};

export default Countdown;
