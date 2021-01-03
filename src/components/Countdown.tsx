import React from "react";
import HeaderH1 from "./HeaderH1";
import Button from "./Button";
import styled from "styled-components";

const CounterStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 100px 16px;
  height: 50%;
`;

const CounterContainerStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(50px, 80px));
  justify-content: center;
  grid-gap: 10px;
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    grid-template-columns: repeat(4, 150px);
    grid-gap: 32px;
  }
`;

const CardContainerStyles = styled.div`
  position: relative;
  overflow: hidden;
  &::before {
    content: attr(data-value);
    position: absolute;
    // width: 100%;
    height: 42%;
    // border-bottom: 1px solid rgba(0, 0, 0, 0.25);
    border-radius: 8px 8px 0 0;
    // background-color: #2c2e44;
    font-size: 80px;
    font-weight: 700;
    color: hotpink;
    top: 35px;
    left: 50%;
    margin-left: -50px;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0;
    top: 42%;
    border-top: 2px solid rgba(0, 0, 0, 0.25);
  }

  .card {
    &.top {
      width: 100%;
      height: 50%;
      position: absolute;
      top: 0;

      &::before {
        content: attr(data-value);
        position: absolute;
        font-size: 80px;
        font-weight: 700;
        color: hotpink;
        top: 35px;
        left: 50%;
        margin-left: -50px;
      }
    }

    &.bottom {
      width: 100%;
      height: 50%;
      position: absolute;
      bottom: 0;
    }
  }
`;

const CardStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  font-size: 3rem;
  font-weight: 700;
  border-radius: 8px;
  background-color: #343650;
  box-shadow: 1px 9px #191a23;

  @media screen and (min-width: 768px) {
    height: 150px;
    font-size: 4rem;
  }

  &::before,
  &::after {
    content: "";
    width: 20px;
    height: 20px;
    background-color: #191a23;
    position: absolute;
    top: 37%;
    border-radius: 20px;
    z-index: 10;
  }

  &::before {
    left: -10px;
  }

  &::after {
    right: -10px;
  }

  h1 {
    position: absolute;
    color: #fb5e84;
  }
`;

const LabelStyles = styled.div`
  color: #8385a9;
  font-variant-caps: small-caps;
  margin-top: 12px;
  text-align: center;
  font-weight: 600;
  letter-spacing: 1.2px;
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
  const onClickButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    window.location.reload();
  };

  return (
    <CounterStyles>
      {title ? <HeaderH1 fontSize="2rem">Countdown to {title}</HeaderH1> : ""}
      <CounterContainerStyles>
        {typeof days === "number" && days >= 0 ? (
          <CardContainerStyles>
            <CardStyles>
              <h1>{days}</h1>
            </CardStyles>
            <LabelStyles>days</LabelStyles>
          </CardContainerStyles>
        ) : (
          ""
        )}
        {typeof hours === "number" && hours >= 0 ? (
          <CardContainerStyles>
            <CardStyles>
              <h1>{hours}</h1>
            </CardStyles>
            <LabelStyles>hours</LabelStyles>
          </CardContainerStyles>
        ) : (
          ""
        )}
        {typeof minutes === "number" && minutes >= 0 ? (
          <CardContainerStyles>
            <CardStyles>
              <h1>{minutes}</h1>
            </CardStyles>
            <LabelStyles>minutes</LabelStyles>
          </CardContainerStyles>
        ) : (
          ""
        )}
        {typeof seconds === "number" && seconds >= 0 ? (
          <CardContainerStyles data-value={seconds}>
            <CardStyles>
              <div className="card top" data-value={seconds}></div>
              <div className="card bottom" data-value={seconds}></div>
            </CardStyles>
            <LabelStyles>seconds</LabelStyles>
          </CardContainerStyles>
        ) : (
          ""
        )}
      </CounterContainerStyles>
      {title ? (
        <Button text="RESET" onClick={onClickButton} bgColor="hotpink" />
      ) : (
        ""
      )}
    </CounterStyles>
  );
};

export default Countdown;
