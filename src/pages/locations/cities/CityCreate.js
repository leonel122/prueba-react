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

export default class CityCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear Ciudad">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                fullWidth
                label="Deparmento"
                source="state_id"
                reference="locations-states"
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
