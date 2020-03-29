import React from "react";
import { ProductsCategoriesList } from "./ProductsCategoriesList";
import ProductsCategoriesEdit from "./ProductsCategoriesEdit";
import ProductsCategoriesCreate from "./ProductsCategoriesCreate";
import { ProductsCategoriesShow } from "./ProductsCategoriesShow";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listar usuarios"}</span>;
};

export {
  ProductsCategoriesList,
  ProductsCategoriesEdit,
  Title,
  ProductsCategoriesCreate,
  ProductsCategoriesShow
};
