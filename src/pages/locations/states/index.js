import React from "react";
import StateList from "./StateList";
import StateCreate from "./StateCreate";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Listado de Departamentos"}</span>
  );
};

export { StateList, Title, StateCreate };
