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

const orderList = (props) => {
  return (
    <List {...props} /* filters={<CompanyFilter />} */ exporter={false}>
      <Datagrid>
        <TextField source="id" label="id" />
        <ReferenceField label="Tienda" source="shop_id" reference="shops">
          <TextField source="name" />
        </ReferenceField>
        <ReferenceField label="Usuario`" source="user_id" reference="users">
          <TextField source="first_name" />
        </ReferenceField>
        {/* <TextField source="nit" label="Nit" /> */}
        <ReferenceField
          label="Estado"
          source="order_status_id"
          reference="order-statuses"
        >
          <TextField source="name" />
        </ReferenceField>
        <TextField source="value" />
        <EditButton label="Editar" />
        <ShowButton label="Ver" />
      </Datagrid>
    </List>
  );
};

export default orderList;
