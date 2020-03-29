import React from "react";
import ServicesCategoriesList from "./ServicesCategoriesList";
import ServicesCategoriesCreate from "./ServicesCategoriesCreate";

const Title = ({ record }) => {
  return <span>{record ? `Editar ${record.name}` : "Listar usuarios"}</span>;
};

export { ServicesCategoriesCreate, ServicesCategoriesList, Title };
