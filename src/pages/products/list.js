import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  Filter,
  TextInput,
  ReferenceField,
} from "react-admin";

const CompanyFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Razón social" source="name" alwaysOn />
  </Filter>
);

const ShopList = (props) => {
  return (
    <List {...props} /* filters={<CompanyFilter />} */ exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <TextField source="name" label="Nombre" />
        {/* <TextField source="nit" label="Nit" /> */}
        <TextField source="status" label="Estado" />
        <ReferenceField
          label="Tipo de tienda"
          source="shops-types"
          reference="shop_type_id"
        >
          <TextField source="name" />
        </ReferenceField>
        <EditButton label="Editar" />
        <ShowButton label="Ver" />
      </Datagrid>
    </List>
  );
};

export default ShopList;
