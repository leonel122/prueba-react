import React, { Component } from "react";
import { Create, SimpleForm, TextInput } from "react-admin";
import RichTextInput from "ra-input-rich-text";
import Grid from "@material-ui/core/Grid";
import { Title } from ".";

export default class CompanyEdit extends Component {
  render() {
    return (
      <Create title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6} container>
              <TextInput source="key" label="llave" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="title" label="Titulo" fullWidth />
            </Grid>
            <Grid item xs={12} md={12}>
              <RichTextInput source="body" label="Contenido" />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
