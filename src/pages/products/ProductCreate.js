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
      <Create {...this.props} title="Crear tipo de tienda">
        <SimpleForm>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={4}>
              <ReferenceInput
                label="Unidad de medida"
                source="unit_measure_id"
                reference="unit-measure"
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={4}>
              <ReferenceInput
                label="Categoria"
                source="category_id"
                reference="categories"
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={4}>
              <ReferenceInput label="Tienda" source="shop_id" reference="shops">
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={4}>
              <NumberInput fullWidth source="value" label="Price" />
            </Grid>
            <Grid item xs={4}>
              <NumberInput fullWidth source="quantity" label="Cantidad" />
            </Grid>
            <Grid item xs={4}>
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
