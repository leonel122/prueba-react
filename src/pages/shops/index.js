import React from "react";
import ShopList from "./ShopList";
import ShopCreate from "./ShopCreate";
import ShopEdit from "./ShopEdit";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Mi tienda"}</span>;
};

export { ShopList, ShopCreate, ShopEdit, Title };
