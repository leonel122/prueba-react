import React, { Component } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { Title } from ".";

export default class CompanyEdit extends Component {
  render() {
    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6} container>
              <ReferenceInput
                label="Localidad"
                source="locality_id"
                reference="localities"
                alwaysOn
              >
                <SelectInput
                  fullWidth
                  source="locality_id"
                  label="Tienda"
                  alwaysOn
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                label="Tienda"
                source="shop_id"
                reference="shops"
                alwaysOn
              >
                <SelectInput
                  fullWidth
                  source="shop_id"
                  label="Tienda"
                  alwaysOn
                />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="price" label="Precio" fullWidth />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
