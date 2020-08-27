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

const CurrentStatus = [
  { id: "open", name: "Abierta" },
  { id: "close", name: "Cerrada" },
];

export default class ShopCreate extends Component {
  render() {
    return (
      <Create title="Crear una empresa" {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6} container>
              <TextInput source="name" label="Razón social" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="nit" label="Nit" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="phone" label="Telefono" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_facebook"
                label="link facebook"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_instagram"
                label="link instagram"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                perPage={1000}
                label="Categoria"
                source="category_id"
                reference="categories"
                // filter={{ id: { $gt: 1 } }}
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="current_status"
                label="Estado"
                choices={CurrentStatus}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={StatusTypes}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="address" label="dirección" fullWidth />
            </Grid>

            <Grid item xs={12} md={6}>
              <ReferenceInput
                perPage={5000}
                label="Usuario"
                source="user_id"
                reference="users"
              >
                <SelectInput optionText="first_name" fullWidth />
              </ReferenceInput>
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
