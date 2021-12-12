import react from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { selectedUserAtom, usersAtom } from "./atoms";

const ShowUserInfo = () => {
  const selectedUserId = useRecoilValue(selectedUserAtom);
  const users = useRecoilValue(usersAtom);
  if (selectedUserId) {
    const user = users.find((user) => user.id === selectedUserId);
    return (
      <ul>
        <li>Id: {user.id}</li>
        <li>Name: {user.name}</li>
        <li>Username: {user.username}</li>
        <li>Email: {user.email}</li>
        <li>Phone: {user.phone}</li>
      </ul>
    );
  }
  return <></>;
};

export default ShowUserInfo;
