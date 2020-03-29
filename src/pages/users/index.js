import React from "react";
import UserList from "./UserList";
import UserEdit from "./UserEdit";
import UserCreate from "./UserCreate";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Listardo de usuarios"}</span>
  );
};
export { UserList, UserEdit, Title, UserCreate };
