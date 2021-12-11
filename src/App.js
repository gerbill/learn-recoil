import React from "react";
import { RecoilRoot } from "recoil";
import Button from "./Button";
import Counter from "./Counter";

const App = () => {
  return (
    <RecoilRoot>
      <Button />
      <Counter />
    </RecoilRoot>
  );
};

export default App;
