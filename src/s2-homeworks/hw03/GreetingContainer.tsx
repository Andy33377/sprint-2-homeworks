import React, { ChangeEvent, KeyboardEvent, useState } from "react";
import Greeting from "./Greeting";
import { UserType } from "./HW3";

type GreetingPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

type GreetingContainerPropsType = {
  users: UserType[];
  addUserCallback: (name: string) => void;
};

export const pureAddUser = (
  name: string,
  setError: any,
  setName: any,
  addUserCallback: any,
) => {
  if (name === "") {
    setError("заполните имя");
  } else {
    addUserCallback(name);
    setName("");
  }
};

export const pureOnBlur = (name: any, setError: any) => {
  if (name === "") {
    setError("заполните имя");
  }
};

export const pureOnEnter = (
  e: KeyboardEvent<HTMLInputElement>,
  addUser: () => void,
) => {
  if (e.key === "Enter") {
    addUser();
  }
};

const GreetingContainer = ({
  users,
  addUserCallback,
}: GreetingContainerPropsType) => {
  const [name, setName] = useState<string>("");
  const [error, setError] = useState<string>("");

  const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);

    error && setError("");
  };
  const addUser = () => {
    pureAddUser(name, setError, setName, addUserCallback);
  };

  const onBlur = () => {
    pureOnBlur(name, setError);
  };

  const onEnter = (e: any) => {
    pureOnEnter(e, addUser);
  };

  const totalUsers = users.length;
  const lastUserName = users.length ? users[users.length - 1].name : "";

  return (
    <Greeting
      name={name}
      setNameCallback={setNameCallback}
      addUser={addUser}
      onBlur={onBlur}
      onEnter={onEnter}
      error={error}
      totalUsers={totalUsers}
      lastUserName={lastUserName}
    />
  );
};

export default GreetingContainer;
