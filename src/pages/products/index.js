import React from "react";
import ListProduct from "./list";
import ProductCreate from "./ProductCreate";
import ProductEdit from "./ProductEdit";

const Title = ({ record }) => {
  return (
    <span>
      {record ? `Editar ${record.name}` : "Listado de comisiones por membresia"}
    </span>
  );
};

export { ListProduct, ProductCreate, ProductEdit, Title };
