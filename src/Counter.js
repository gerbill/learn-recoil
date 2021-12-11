import React from "react";
import { useRecoilValue } from "recoil";
import { counterAtom } from "./atoms";

const Counter = () => {
  const counter = useRecoilValue(counterAtom);
  return <div>{counter}</div>;
};

export default Counter;
