import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  SelectInpu,
  ReferenceInput,
  SelectInput
} from "react-admin";
import { Grid } from "@material-ui/core";
import { Title } from ".";

export default class ConfigurationCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear Ciudad">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={12}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput fullWidth source="key" label="Llave" />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput fullWidth source="value" label="Valor" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
