import React from "react";
import ShopList from "./ShopList";
import ShopCreate from "./ShopCreate";
import ShopEdit from "./ShopEdit";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listado de ciuades"}</span>;
};

export { ShopList, ShopCreate, ShopEdit, Title };
