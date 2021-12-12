import React from "react";
import { useRecoilState } from "recoil";
import { usersAtom } from "./atoms";
import axios from "axios";

const LoadButton = () => {
  const [users, setUsers] = useRecoilState(usersAtom);
  const onClick = async () => {
    if (users.length === 0) {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");
      console.log(response);
      setUsers(response.data);
    }
  };
  return <button onClick={onClick}>Load!</button>;
};

export default LoadButton;
