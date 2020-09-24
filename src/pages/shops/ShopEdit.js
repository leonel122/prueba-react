import React, { Component, Fragment } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
  SimpleShowLayout,
  CheckboxGroupInput,
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
    const role = await localStorage.getItem("role");
    this.setState({ role: role });
    this.fetchData();
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
                label="Link facebook"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextInput
                source="link_instagram"
                label="Link Instagram"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <ReferenceInput
                label="Categoria"
                source="category_id"
                reference="categories"
                // filter={{ id: { $gt: 1 } }}
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            {role == '"admin"' && (
              <Fragment>
                <Grid item xs={12} md={6}>
                  <NumberInput source="priority" label="Prioridad" fullWidth />
                </Grid>
                <Grid item xs={12} md={6}>
                  <SelectInput
                    fullWidth
                    source="status"
                    label="Estado real"
                    choices={StatusTypes}
                    optionText="name"
                    optionValue="id"
                  />
                </Grid>
                <Grid item xs={12} md={6}>
                  <ReferenceInput
                    label="Usuario"
                    source="user_id"
                    reference="users"
                  >
                    <SelectInput optionText="first_name" fullWidth />
                  </ReferenceInput>
                </Grid>
              </Fragment>
            )}
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
              <TextInput source="address" label="dirección" fullWidth />
            </Grid>
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
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
