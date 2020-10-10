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

const document_type = [
  { id: "CC", name: "CC" },
  { id: "CE", name: "CE" },
  { id: "PPN", name: "PPN" },
  { id: "NIT", name: "NIT" },
];

const PersonsTypes = [
  { id: "legal", name: "legal" },
  { id: "natural", name: "natural" },
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
  state = {
    role: "user",
  };

  async componentDidMount() {
    let role = await localStorage.getItem("permissions");
    console.log(role);
    this.setState({ role: role });
  }
  render() {
    const { role } = this.state;
    return (
      <Create title="Crear una empresa" {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6} container>
              <TextInput
                source="full_name"
                label="Nombre completo del propietario"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} container>
              <SelectInput
                fullWidth
                source="person_type"
                label="Tipo de persona"
                choices={PersonsTypes}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6} container>
              <SelectInput
                fullWidth
                source="document_type"
                label="Tipo de documento"
                choices={document_type}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="nit" label="Nit / Rut" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="phone"
                label="Telefono de la tienda"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6} container>
              <TextInput source="name" label="Nombre de la tienda" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="whatsapp" label="Whatsapp" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_facebook"
                label="Usuario facebook"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_instagram"
                label="usuario instagram"
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
            {role == '"admin"' && (
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
            )}
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
