import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";
import { Grid } from "@material-ui/core";
import { Title } from ".";

export default class ProductCreate extends Component {
  render(permissions) {
    return (
      <Create {...this.props} title="Crear producto">
        <SimpleForm>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={3}>
              <TextInput
                fullWidth
                source="name"
                label="Nombre"
                validate={[required("El nombre es requerido")]}
              />
            </Grid>
            {permissions === "admin" && (
              <Grid item xs={12} md={6}>
                <ReferenceInput
                  label="Tienda"
                  source="shop_id"
                  reference="shops"
                  perPage={5000}
                >
                  <SelectInput optionText="name" fullWidth />
                </ReferenceInput>
              </Grid>
            )}
            <Grid item xs={12} md={2}>
              <NumberInput
                fullWidth
                source="value"
                label="Precio"
                type="number"
                validate={[required("El precio es requerido")]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="number"
                fullWidth
                source="quantity"
                label="Cantidad"
                validate={[required("La cantidad es requerida")]}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <TextInput
                multiline
                fullWidth
                source="description"
                label="Descripcion"
                validate={[required("La descripcion es requerida")]}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
