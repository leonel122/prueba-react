import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  SimpleFormIterator,
  ArrayInput,
} from "react-admin";
import { Grid } from "@material-ui/core";
import { Title } from ".";

export default class ShopTypesCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear Membresia">
        <SimpleForm>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput fullWidth source="price" label="Precio" />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput
                fullWidth
                source="duration_days"
                label="Duración de dias"
              />
            </Grid>
            <Grid item xs={12} md={6} spacing={6}>
              <TextInput fullWidth source="priority" label="Prioridad" />
            </Grid>
            <Grid item xs={12} md={12}>
              <ArrayInput fullWidth source="features" label="Caracteristicas">
                <SimpleFormIterator>
                  <TextInput fullWidth source="name" label="Nombre" />
                </SimpleFormIterator>
              </ArrayInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
