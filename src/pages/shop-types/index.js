import React from "react";
import ShopTypesCreateList from "./ShopTypesList";
import ShopTypesCreateCreate from "./ShopTypesCreate";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Listado de Departamentos"}</span>
  );
};

export { ShopTypesCreateList, Title, ShopTypesCreateCreate };
