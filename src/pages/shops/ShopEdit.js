import React, { Component } from "react";
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

export default class CompanyEdit extends Component {
  state = {
    path_image: null,
    expanded: false,
  };

  async fetchData() {
    console.log(this.props);
    shopService
      .get(this.props.id)
      .then((it) => this.setState({ path_image: it.logo }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleUploadFinish = async (url, id) => {
    console.log(url, "----------");
    await shopService
      .patch(this.props.id, { logo: url })
      .then((it) => this.fetchData());
  };

  render() {
    const { path_image } = this.state;

    return (
      <Edit title={<Title />} {...this.props}>
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
            <Grid item xs={4}>
              <ReferenceInput
                label="Tipo de tienda"
                source="shop_type_id"
                reference="shops-types"
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
            </Grid>
            <Grid item xs={4} alignContent="flex-start">
              <TextInput source="web_site" label="Sitio web" fullWidth />
              <NumberInput source="lat" label="Latitud" fullWidth />
              <NumberInput source="long" label="Longitud" fullWidth />
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
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
