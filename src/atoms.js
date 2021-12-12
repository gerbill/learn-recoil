import { atom } from "recoil";

export const counterAtom = atom({
  key: "counter", // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
});

export const usersAtom = atom({
  key: "users",
  default: [],
});

export const selectedUserAtom = atom({
  key: "selectedUser",
  default: null,
});
