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

export default class ServicesCategoriesCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear categoria de servicios">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
