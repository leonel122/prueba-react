import React from "react";
import ShippingCostList from "./ShippingCostList";
import ShippingCreate from "./ShippingCostCreate";
import ShippingCostEdit from "./ShippingCostEdit";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listado de ciuades"}</span>;
};

export { ShippingCostList, Title, ShippingCreate, ShippingCostEdit };
