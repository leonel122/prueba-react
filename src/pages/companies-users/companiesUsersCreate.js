import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  TextField,
  EmailField
} from "react-admin";
import { Grid } from "@material-ui/core";

const NameUser = ({ record, ...rest }) =>
  record == undefined ? `${record.first_name}` : null;

export default class CompaniesUsersCreate extends Component {
  render() {
    return (
      <Create {...this.props} title="Conectar a usuarios con empresas">
        <SimpleForm>
          <Grid container fullWidth spacing={3}>
            <Grid item xs={12} md={12}>
              <ReferenceInput
                fullWidth
                label="Usuario"
                source="user_id"
                reference="users"
              >
                <SelectInput optionText="first_name" />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                fullWidth
                label="Empresa"
                source="company_id"
                reference="companies"
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                fullWidth
                label="Rol en la empresa"
                source="company_user_role_id"
                reference="companies-user-roles"
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
