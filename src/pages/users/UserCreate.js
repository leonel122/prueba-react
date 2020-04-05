import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  DateInput,
  SelectInput,
  PasswordInput,
  ReferenceInput,
} from "react-admin";
import { Grid } from "@material-ui/core";

const statusList = [
  { value: "active", description: "Activo" },
  { value: "inactive", description: "Inactivo" },
];

const DocumentTypes = [
  { value: "CC", description: "Cedula de ciudadania" },
  { value: "CI", description: "Documento de identidad" },
  { value: "CE", description: "Cedula Extrangeria" },
  { value: "TI", description: "Tarjeta de Identidad" },
  { value: "TP", description: "Tarjeta de P" },
];

export default class ProductsCategoriesCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear categoria de productos">
        <SimpleForm>
          <Grid fullWidth spacing={16}>
            <Grid item xl={6} spacing={6}>
              <TextInput source="first_name" label="Nombre" />
              <TextInput source="last_name" label="Apellido" />
            </Grid>
            <Grid item xl={6} spacing={6}>
              <SelectInput
                source="document_type"
                label="Tipo de documento"
                choices={DocumentTypes}
                optionText="description"
                optionValue="value"
              />
              <TextInput source="document_number" label="Numero de documento" />
              <TextInput source="phone" label="Telefono" />
            </Grid>
            <Grid item xl={6} spacing={6}>
              <SelectInput
                source="status"
                label="Estado"
                choices={statusList}
                optionText="description"
                optionValue="value"
              />
              <TextInput source="email" />
              <PasswordInput source="password" label="Contraseña" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
