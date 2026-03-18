import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export const GrandChild = () => {
  const user = useContext(UserContext);
  return (
    <>
      <p>User Name | {user}</p>
    </>
  );
};
