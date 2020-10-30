import React, { Component } from "react";
import {
  Create,
  SimpleForm,
  TextInput,
  NumberInput,
  ReferenceInput,
  SelectInput,
  required,
  Toolbar,
  SaveButton,
} from "react-admin";
import { Grid } from "@material-ui/core";
import { Title } from ".";

const PostEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Guardar" />
  </Toolbar>
);

export default class ProductCreate extends Component {
  state = {
    role: null,
  };

  async componentDidMount() {
    const role = await localStorage.getItem("permissions");
    console.log(role, "rolellllllll");
    this.setState({ role: role });
    // this.fetchData();

    console.log(role, "oooooooooooooo");
  }
  render(permissions) {
    const { role } = this.state;
    return (
      <Create {...this.props} title="Crear producto">
        <SimpleForm toolbar={<PostEditToolbar />}>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} md={6} spacing={3}>
              <TextInput
                fullWidth
                source="name"
                label="Nombre"
                validate={[required("El nombre es requerido")]}
              />
            </Grid>
            {role == '"admin"' && (
              <Grid item xs={12} md={6}>
                <ReferenceInput
                  label="Tienda"
                  source="shop_id"
                  reference="shops"
                  perPage={5000}
                >
                  <SelectInput optionText="name" fullWidth />
                </ReferenceInput>
              </Grid>
            )}
            <Grid item xs={12} md={2}>
              <NumberInput
                fullWidth
                source="value"
                label="Precio"
                type="number"
                validate={[required("El precio es requerido")]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                type="number"
                fullWidth
                source="quantity"
                label="Cantidad disponible"
                validate={[required("La cantidad es requerida")]}
              />
            </Grid>
            <Grid item xs={12} md={10}>
              <TextInput
                multiline
                fullWidth
                source="description"
                label="Descripcion"
                validate={[required("La descripcion es requerida")]}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Create>
    );
  }
}
