import React, { Component } from "react";
import { Edit, SimpleForm, SelectInput, NumberInput } from "react-admin";
import Grid from "@material-ui/core/Grid";
import S3File from "../../components/S3-field";
import { URL_S3 } from "../../constants";
import { Title } from "./";
import { bannersService } from "../../utils/Api";
/* import {
  segmentationsService,
  companiesSegmentationsService,
  companiesService
} from "../../connections/feathers"; */
/* 
import { S3File } from "../s3/"; */

const status = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "Inactivo" },
];

const destinationLocations = [
  { id: "product", name: "Producto" },
  { id: "shop", name: "Tienda" },
  { id: "register_shop", name: "Registro de tienda" },
];

const location = [{ id: "home", name: "home" }];

export default class CompanyEdit extends Component {
  state = {
    path_image: null,
    expanded: false,
  };

  async fetchData() {
    console.log(this.props);
    bannersService
      .get(this.props.id)
      .then((it) => this.setState({ path_image: it.path }));
  }

  componentDidMount() {
    this.fetchData();
  }

  handleUploadFinish = async (url, id) => {
    console.log(url, "----------");
    await bannersService
      .patch(this.props.id, { path: url })
      .then((it) => this.fetchData());
  };

  render() {
    const { path_image } = this.state;

    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={12} md={6}>
              <NumberInput
                source="destination_id"
                label="id del destino"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="location"
                label="Ubicacion"
                choices={location}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="destination_location"
                label="Ubicacion de destino"
                choices={destinationLocations}
                optionText="name"
                optionValue="id"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <SelectInput
                fullWidth
                source="status"
                label="Estado"
                choices={status}
                optionText="name"
                optionValue="id"
              />
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
                path="banners"
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
