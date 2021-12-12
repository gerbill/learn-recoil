import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { usersAtom, selectedUserAtom } from "./atoms";

const LoadedContent = () => {
  const users = useRecoilValue(usersAtom);
  const [selectedUser, setSelectedUser] = useRecoilState(selectedUserAtom);

  const onClick = (userId) => {
    setSelectedUser(userId);
  };

  if (users.length === 0) {
    return <div>Click that load button!</div>;
  }
  return users.map((user) => {
    return (
      <div key={user.id}>
        <button onClick={() => onClick(user.id)}>Show info for user {user.name}</button>
      </div>
    );
  });
};

export default LoadedContent;
