import React from "react";
import { RecoilRoot } from "recoil";
import Button from "./Button";
import Counter from "./Counter";
import LoadButton from "./LoadUsersButton";
import LoadedContent from "./LoadedUsers";
import ShowUserInfo from "./ShowUserInfo";

const App = () => {
  return (
    <RecoilRoot>
      <div>
        <Button />
        <Counter />
      </div>
      <hr />
      <div>
        <LoadButton />
        <LoadedContent />
        <ShowUserInfo />
      </div>
    </RecoilRoot>
  );
};

export default App;
