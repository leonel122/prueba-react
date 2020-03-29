import React from "react";
import DealsList from "./dealsList";
import DealsShow from "./dealsShow";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listar usuarios"}</span>;
};

export { DealsList, DealsShow, Title };
