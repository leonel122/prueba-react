import React, { Component } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  required,
  Toolbar,
  SaveButton,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import S3File from "../../components/S3-field";
import { Title } from "./";
import { URL_S3 } from "../../constants";
import { productsService } from "../../utils/Api";

const PostEditToolbar = (props) => (
  <Toolbar {...props}>
    <SaveButton label="Guardar" />
  </Toolbar>
);

export default class CompanyEdit extends Component {
  state = {
    path_image: null,
    expanded: false,
    role: null,
  };

  async fetchData() {
    productsService
      .get(this.props.id)
      .then((it) => this.setState({ path_image: it.image }));
  }

  async componentDidMount() {
    const role = await localStorage.getItem("permissions");
    this.setState({ role: role });
    this.fetchData();
  }

  handleUploadFinish = async (url, id) => {
    await productsService
      .patch(this.props.id, { image: url })
      .then((it) => this.fetchData());
  };

  render(permissions) {
    const { path_image, role } = this.state;
    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm toolbar={<PostEditToolbar />}>
          <Grid fullWidth container spacing={3}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              <div style={{ textAlign: "initial" }}>
                {path_image ? (
                  <img
                    src={`${URL_S3}${path_image}`}
                    // width="100%"
                    width="300"
                    height="300"
                    className="custom-img-field"
                  />
                ) : null}
              </div>
              <div
                style={{ marginTop: 10, textAlign: "initial", width: "300px" }}
              >
                <S3File
                  idComponent="category-image"
                  path="products/"
                  handleUploadFinish={this.handleUploadFinish}
                  id={this.props.id}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6} spacing={6}>
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
                >
                  <SelectInput optionText="name" fullWidth />
                </ReferenceInput>
              </Grid>
            )}
            <Grid item xs={12} md={6}>
              <NumberInput
                fullWidth
                source="value"
                label="Precio"
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
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={[
                  { id: "active", name: "Activo" },
                  { id: "inactive", name: "Inactivo" },
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                multiline
                fullWidth
                source="description"
                label="Descripcion"
                validate={[required("La descripción es requerida")]}
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
