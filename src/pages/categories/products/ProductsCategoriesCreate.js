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

export default class ProductsCategoriesCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear categoria de productos">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                fullWidth
                label="Categoria padre"
                source="parent_id"
                reference="categories"
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
