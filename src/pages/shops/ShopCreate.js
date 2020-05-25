import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { Grid } from "@material-ui/core";

const YearExperienceList = [
  { id: "1-3", name: "1-3" },
  { id: "4-6", name: "4-6" },
  { id: "7-11", name: "7-11" },
  { id: "12-16", name: "12-16" },
  { id: "17-25", name: "17-25" },
  { id: "17-25", name: "17-25" },
];

const StatusTypes = [
  { id: "Activa", name: "Activada" },
  { id: "Desactivada", name: "Desactivada" },
  { id: "Bloqueada", name: "Bloqueada" },
];

export default class ShopCreate extends Component {
  render() {
    return (
      <Create title="Crear una empresa" {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={4}>
              <TextInput source="name" label="Razón social" fullWidth />
              <TextInput source="address" label="dirección" fullWidth />
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={StatusTypes}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={4}>
              <ReferenceInput
                label="Usuario"
                source="user_id"
                reference="users"
              >
                <SelectInput optionText="first_name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={4} alignContent="flex-start">
              <TextInput source="web_site" label="Sitio web" fullWidth />
              <NumberInput source="lat" label="Latitud" fullWidth />
              <NumberInput source="long" label="Longitud" fullWidth />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
