import React from "react";
import CompaniesList from "./CompaniesList";
import CompaniesCreate from "./CompaniesCreate";
import CompaniesEdit from "./CompaniesEdit";
import CompaniesShow from "./CompaniesShow";

const Title = ({ record }) => {
  return (
    <span>{record ? `Editar ${record.name}` : "Listado de Empresas"}</span>
  );
};

export { CompaniesList, CompaniesCreate, Title, CompaniesEdit, CompaniesShow };
