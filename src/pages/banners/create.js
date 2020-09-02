import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { Grid } from "@material-ui/core";

const status = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

const destinationLocations = [
  { id: "product", name: "Producto" },
  { id: "shop", name: "Tienda" },
  { id: "register_shop", name: "Registro de tienda" },
];

const location = [{ id: "home", name: "home" }];

export default class ShopCreate extends Component {
  render() {
    return (
      <Create title="Crear una empresa" {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6}>
              <NumberInput
                source="destination_id"
                label="id del destino"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="priority" label="Prioridad" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="location"
                label="Ubicacion"
                choices={location}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="destination_location"
                label="Ubicacion de destino"
                choices={destinationLocations}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={status}
                optionText="name"
                optionValue="id"
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
