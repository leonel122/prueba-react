import React, { Component, useState } from "react";
import { Edit, SimpleForm, ReferenceInput, SelectInput } from "react-admin";
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

export default class CompanyEdit extends Component {
  render() {
    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
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
              <SelectInput
                fullWidth
                source="day"
                label="Dia"
                choices={days}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <DateTimeInput source="start_hour" label="Hora de apertura" />
              <DateTimeInput source="end_hour" label="Hora de cierre" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
