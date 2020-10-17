import React, { Component, useState } from "react";
import {
  Edit,
  SimpleForm,
  ReferenceInput,
  SelectInput,
  Toolbar,
  SaveButton,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { Title } from ".";
import { DateTimeInput } from "react-admin";

const days = [
  { id: "0", name: "Domingo" },
  { id: "1", name: "Lunes" },
  { id: "2", name: "Martes" },
  { id: "3", name: "Miercoles" },
  { id: "4", name: "Jueves" },
  { id: "5", name: "Viernes" },
  { id: "6", name: "Sabado" },
];

const status = [
  { id: "active", name: "si" },
  { id: "inactive", name: "no" },
];

const PostEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Guardar" />
  </Toolbar>
);

export default class CompanyEdit extends Component {
  render(permissions) {
    return (
      <Edit successMessage="Guardando" title={<Title />} {...this.props}>
        <SimpleForm toolbar={<PostEditToolbar />}>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="day"
                label="Dia"
                disabled
                choices={days}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Abro"
                choices={status}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DateTimeInput
                fullWidth
                source="start_hour"
                label="Hora de apertura"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DateTimeInput
                fullWidth
                source="end_hour"
                label="Hora de cierre"
              />
            </Grid>
            {permissions === "admin" && (
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
            )}
            {/* {permissions === "admin" && ( */}
            {/* )} */}
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
