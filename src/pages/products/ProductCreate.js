import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { Grid } from "@material-ui/core";
import { Title } from ".";

export default class ProductCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear producto">
        <SimpleForm>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={3}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
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
            <Grid item xs={12} md={2}>
              <NumberInput
                fullWidth
                source="value"
                label="Price"
                type="number"
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <TextInput
                multiline
                fullWidth
                source="description"
                label="Descripcion"
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
