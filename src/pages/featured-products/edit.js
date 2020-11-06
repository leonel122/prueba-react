import React, { Component } from "react";
import { Edit, SimpleForm, NumberInput, SelectInput } from "react-admin";
import Grid from "@material-ui/core/Grid";
import { Title } from ".";

const StatusTypes = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

export default class CompanyEdit extends Component {
  render() {
    return (
      <Edit title={<Title />} {...this.props}>
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
      </Edit>
    );
  }
}
