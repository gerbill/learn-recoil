import React from "react";
import { useRecoilState } from "recoil";
import { counterAtom } from "./atoms";

const Button = () => {
  const [counter, setCounter] = useRecoilState(counterAtom);

  const onClick = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  return <button onClick={onClick}>Hit me!</button>;
};

export default Button;
