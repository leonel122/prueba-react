import React from "react";
import MembershipList from "./MembershipList";
import MembershipCreate from "./MembershipCreate";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Listado de Departamentos"}</span>
  );
};

export { MembershipList, Title, MembershipCreate };
