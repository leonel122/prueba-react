import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  NumberInput,
  ReferenceInput,
  SelectInput
} from "react-admin";
import { Grid } from "@material-ui/core";

export default class MembershipCommissionsCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Crear Ciudad">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                fullWidth
                label="Membresia"
                source="membership_id"
                reference="memberships"
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <NumberInput source="max_value" />
              <NumberInput source="percentage" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
