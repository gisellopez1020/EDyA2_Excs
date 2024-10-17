import { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback((c) => {
    console.log("calling setcounter", c);
    setCounter((value) => value + c);
  }, []);

  return (
    <>
      <div>CallbackHook {counter}</div>
      <ShowIncrement incrementFather={incrementFather} />
           
    </>
  );
};
