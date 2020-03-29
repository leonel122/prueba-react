import React, { Component } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  Show,
  SimpleShowLayout,
  CheckboxGroupInput
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { Title } from "./";
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
  { id: "17-25", name: "17-25" }
];

const StatusTypes = [
  { id: "Activa", name: "Activa" },
  { id: "Desactivada", name: "Desactivada" },
  { id: "Pendiente contacto", name: "Pendiente contacto" },
  { id: "Pendiente perfil", name: "Pendiente perfil" },
  { id: "Pendiente cat servicios", name: "Pendiente categorias servicios" },
  { id: "Pendiente cat productos", name: "Pendiente categorias productos" }
];

export default class CompanyEdit extends Component {
  /*  state = {
    segmentationsOptions: [{ name: "NameSegmentation", id: 0 }],
    segmentationsOptionsActives: [2],
    imagePath: null
  }; */

  /* async fetchData() {
    Promise.all([
      segmentationsService
        .find({ query: { $limit: 1000 } })
        .then(it => this.setState({ segmentationsOptions: it.data })),

      companiesSegmentationsService
        .find({ query: { company_id: this.props.id, $limit: 1000 } })
        .then(it =>
          this.setState({
            segmentationsOptionsActives: it.data.map(it => it.segmentation_id)
          })
        ),

      companiesService
        .get(this.props.id)
        .then(it => this.setState({ imagePath: it.logo }))
        .catch(error => console.log(error, "+++++"))
    ]);
  }

  componentDidMount() {
    this.fetchData();
  }

  handleUploadFinish = async (url, id) => {
    await companiesService
      .patch(id, { logo: url })
      .then(it => this.setState({ imagePath: it.logo }));
  };
 */
  render() {
    /* const {
      segmentationsOptions,
      segmentationsOptionsActives,
      imagePath
    } = this.state; */
    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={4}>
              <TextInput source="name" label="Razón social" fullWidth />
              <TextInput source="nit" label="Nit" fullWidth />
              <TextInput source="address" label="dirección" fullWidth />
              <TextInput source="cell_phone" label="Celular" fullWidth />
              <TextInput source="phone" label="Telefono" fullWidth />
              <TextInput source="address" label="Direccíon" fullWidth />
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
              <SelectInput
                fullWidth
                source="type"
                label="Tipo de empresa"
                choices={[
                  { id: "Compradora", name: "Compradora" },
                  { id: "Proveedora", name: "Proveedora" }
                ]}
              />
              <SelectInput
                fullWidth
                source="type_service"
                label="Tipo de servicio"
                choices={[
                  /*  { id: "Servicios y Productos", name: "Servicios y Productos" }, */
                  { id: "Servicios", name: "Servicios" },
                  { id: "Productos", name: "Productos" }
                ]}
              />
              <SelectInput
                source="years_experience"
                label="Años de expiencia"
                choices={YearExperienceList}
                optionText="name"
                optionValue="id"
                fullWidth
              />
              <ReferenceInput
                label="Usuario"
                source="user_id"
                reference="users"
              >
                <SelectInput optionText="first_name" fullWidth />
              </ReferenceInput>
              <ReferenceInput
                label="Departamento"
                source="state_id"
                reference="locations-states"
              >
                <SelectInput optionText="name" fullWidth />
              </ReferenceInput>
              <TextInput source="website" label="Sitio web" fullWidth />
            </Grid>
            <Grid item xs={4} alignContent="flex-start">
              <TextInput source="web_site" label="Sitio web" fullWidth />
              <TextInput
                source="linkendin_profile"
                label="Perfil de linkendin"
                fullWidth
              />
              <TextInput
                source="linkendin_profile"
                label="Perfil de linkendin"
                fullWidth
              />
              <TextInput
                source="facebook_profile"
                label="Perfil de facebook"
                fullWidth
              />
              <TextInput
                source="instagram_profile"
                label="Perfil de instagram"
                fullWidth
              />
              <TextInput
                source="economic_activity"
                label="Actividad economica"
                fullWidth
              />
              <TextInput
                multiline
                source="description"
                label="Descripción"
                fullWidth
              />
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
