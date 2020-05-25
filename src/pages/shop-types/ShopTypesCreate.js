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
      <Create {...this.props} title="Crear tipo de tienda">
        <SimpleForm>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
