import React from "react";
import orderList from "./orderList";
import orderShow from "./orderShow";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Ordenes"}</span>;
};
export { orderList, orderShow, Title };
