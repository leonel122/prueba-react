import React from "react";
import CompaniesUsersCreate from "./companiesUsersCreate";
import CompaniesUsersList from "./CompaniesUsersList";

const Title = ({ record }) => {
  return (
    <span>
      {record
        ? `Editar ${record.name}`
        : "Listado de roles de usuarios en empresas"}
    </span>
  );
};

export { CompaniesUsersList, CompaniesUsersCreate, Title };
