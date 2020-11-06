import React, { Component } from "react";
import { Create, SimpleForm, SelectInput, NumberInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import Grid from "@material-ui/core/Grid";
import { Title } from ".";

const StatusTypes = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

export default class CompanyEdit extends Component {
  render() {
    return (
      <Create title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6} container>
              <NumberInput
                source="product_id"
                label="Id del producto"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput
                source="category_id"
                label="Id de la categoria"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="priority" label="Prioridad" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={StatusTypes}
                optionText="name"
                optionValue="id"
                style={{ color: "red" }}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
