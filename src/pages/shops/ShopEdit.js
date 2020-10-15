import React, { Component, Fragment } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  required,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import S3File from "../../components/S3-field";
import { URL_S3 } from "../../constants";
import { Title } from "./";
import { shopService } from "../../utils/Api";
/* import {
  segmentationsService,
  companiesSegmentationsService,
  companiesService
} from "../../connections/feathers"; */
/* 
import { S3File } from "../s3/"; */

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
const YearExperienceList = [
  { id: "1-3", name: "1-3" },
  { id: "4-6", name: "4-6" },
  { id: "7-11", name: "7-11" },
  { id: "12-16", name: "12-16" },
  { id: "17-25", name: "17-25" },
  { id: "17-25", name: "17-25" },
];

const StatusTypes = [
  { id: "Activa", name: "Publicada" },
  { id: "Desactivada", name: "No publicada" },
  { id: "Bloqueada", name: "Bloqueada" },
];

const CurrentStatus = [
  { id: "open", name: "Abierta" },
  { id: "close", name: "Cerrada" },
];

export default class CompanyEdit extends Component {
  state = {
    path_image: null,
    expanded: false,
    role: null,
  };

  async fetchData() {
    console.log(this.props);
    shopService
      .get(this.props.id)
      .then((it) => this.setState({ path_image: it.logo }));
  }

  async componentDidMount() {
    const role = await localStorage.getItem("permissions");
    console.log(role, "rolellllllll");
    this.setState({ role: role });
    this.fetchData();

    console.log(role, "oooooooooooooo");
  }

  handleUploadFinish = async (url, id) => {
    console.log(url, "----------");
    await shopService
      .patch(this.props.id, { logo: url })
      .then((it) => this.fetchData());
  };

  render() {
    const { path_image, role } = this.state;

    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={4}>
            <Grid item xs={6}>
              {path_image ? (
                <img
                  src={`${URL_S3}${path_image}`}
                  width="200px"
                  height="200px"
                  className="custom-img-field"
                />
              ) : null}
              <S3File
                idComponent="category-image"
                path="categories"
                handleUploadFinish={this.handleUploadFinish}
                id={this.props.id}
                label="Subir logo"
              />
            </Grid>
            <Grid item xs={12} md={12} container>
              <TextInput
                source="full_name"
                label="Nombre completo del propietario"
                fullWidth
                validate={[required("El nombre del propietario es requerido")]}
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
                validate={[required("Debes seleccionar un tipo de persona")]}
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
                validate={[required("Denes seleccionar un tipo de documento")]}
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
                validate={[
                  required("El numero de telefono de la tienda es requerido"),
                ]}
              />
            </Grid>
            <Grid item xs={12} md={6} container>
              <TextInput
                source="name"
                label="Nombre de la tienda"
                fullWidth
                validate={[required("El nombre de la tienda es requerido")]}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="whatsapp" label="Whatsapp" fullWidth />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_facebook"
                label="Usuaurio de facebook"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_instagram"
                label="Usuario de instagram sin el @"
                fullWidth
              />
            </Grid>
            {role == '"admin"' && (
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
            )}
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="current_status"
                label="Abierta o cerrada"
                choices={CurrentStatus}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado de la tienda"
                choices={StatusTypes}
                optionText="name"
                optionValue="id"
                style={{ color: "red" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput source="address" label="dirección" fullWidth />
            </Grid>
            {role == '"admin"' && (
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
            )}
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
