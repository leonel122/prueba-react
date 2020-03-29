import React from "react";
import DealReDocOpCreate from "./dealReDocOpCreate";
import DealReDocOpList from "./dealReDocOpList";

const Title = ({ record }) => {
  return (
    <span>
      {record ? `Editar ${record.name}` : "Listar de documentos requeridos"}
    </span>
  );
};

export { DealReDocOpCreate, Title, DealReDocOpList };
