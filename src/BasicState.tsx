import { useState } from "react";

export default function BasicState() {
  const [state, setState] = useState<number | boolean | string>(4);

  const stateHandler = () => {
    ///boolean
    setState(true);
  };

  const stateHandler_ = () => {
    ///number
    setState(10);
  };

  const stateHandler__ = () => {
    ///string
    setState("Hello World.");
  };

  return <div></div>;
}
