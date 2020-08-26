import React from "react";

import { List, Datagrid, TextField, EditButton, ShowButton } from "react-admin";

const CurrentStatusField = ({ source, record = {} }) => {
  return `${record.current_status == "open" ? "Abierta" : "Cerrada"} `;
};

CurrentStatusField.defaultProps = { label: "Estado" };

const ShopList = (props) => {
  return (
    <List {...props} /* filters={<CompanyFilter />} */ exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="name" label="Nombre" />
        <TextField source="nit" label="Nit" />
        <CurrentStatusField />
        <TextField source="category.name" label="Categoria" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
