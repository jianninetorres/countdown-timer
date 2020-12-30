import React from "react";
import HeaderH1 from "./HeaderH1";
import styled from "styled-components";

const CounterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 100px 0;
`;

const CounterContainerStyles = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
`;

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
    <CounterStyles>
      {title ? <HeaderH1 fontSize="2rem">Countdown to {title}</HeaderH1> : ""}
      <CounterContainerStyles>
        {typeof days === "number" && days >= 0 ? (
          <div>
            <h1>{days}</h1> <div>days</div>
          </div>
        ) : (
          ""
        )}
        {typeof hours === "number" && hours >= 0 ? (
          <div>
            <h1>{hours}</h1> <div>hours</div>
          </div>
        ) : (
          ""
        )}
        {typeof minutes === "number" && minutes >= 0 ? (
          <div>
            <h1>{minutes}</h1> <div>minutes</div>
          </div>
        ) : (
          ""
        )}
        {typeof seconds === "number" && seconds >= 0 ? (
          <div>
            <h1>{seconds}</h1> <div>seconds</div>
          </div>
        ) : (
          ""
        )}
      </CounterContainerStyles>
    </CounterStyles>
  );
};

export default Countdown;
