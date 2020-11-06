import React from "react";

import { List, Datagrid, TextField, EditButton } from "react-admin";

const CmsList = (props) => {
  return (
    <List {...props} exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="product.name" label="Producto" />
        <TextField source="category_id" label="Categoria" />
        <EditButton label="Editar" />
      </Datagrid>
    </List>
  );
};

export default CmsList;
