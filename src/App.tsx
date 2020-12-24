import React, { useState } from "react";
import Input from "./components/Input";
import Button from "./components/Button";

const App: React.FC = (): JSX.Element => {
  const [eventName, setEventName] = useState<string>("");

  const onHandleEventName = (getEventName: string): void => {
    console.log(`Setting event name, ${getEventName}`);
    setEventName(getEventName);
  };

  const onClickButton = (event: MouseEvent) => {
    const existingEventName = window.localStorage.getItem("eventName");
    return existingEventName
      ? console.log(existingEventName)
      : window.localStorage.setItem("eventName", eventName);
  };

  return (
    <div className="App">
      <main>
        <h1>HELLO! WHAT SHOULD WE COUNT DOWN TO?</h1>
        <Input
          onHandleEventName={onHandleEventName}
          eventName={eventName}
          type="text"
          placeholder="Name your countdown"
          name="countdown-title"
        />
        <Button type="button" text="START" onClick={onClickButton} />
      </main>
    </div>
  );
};

export default App;
