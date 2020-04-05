import React, { Component } from "react";
import {
  Edit,
  SimpleForm,
  TextInput,
  ReferenceInput,
  SelectInput,
  useGetOne,
} from "react-admin";
import Grid from "@material-ui/core/Grid";
import { Title, ImgField } from "./";
// import S3File from "../../../components/S3-field";
// import { expressCategoriesService } from "../../../utils/Api";
// import { URL_S3 } from "../../../constants";

export default class CompanyEdit extends Component {
  state = {
    path_image: null,
    expanded: false,
  };

  async fetchData() {
    console.log(this.props);
    /*  expressCategoriesService
      .get(this.props.id)
      .then((it) => this.setState({ path_image: it.path_image })); */
  }

  componentDidMount() {
    this.fetchData();
  }

  handleUploadFinish = async (url, id) => {
    console.log(url);
    console.log(this.props);
    /* await expressCategoriesService
      .patch(this.props.id, { path_image: url })
      .then((it) => this.fetchData()); */
  };
  render() {
    const { path_image } = this.state;
    console.log(path_image);

    return (
      <Edit title={<Title />} {...this.props}>
        <SimpleForm>
          <Grid container fullWidth spacing={16}>
            <Grid item xs={6}>
              <TextInput fullWidth source="name" label="Nombre" />
            </Grid>
            <Grid item xs={6}>
              <ReferenceInput
                fullWidth
                label="Padre"
                source="parent_id"
                reference="categories"
              >
                <SelectInput optionText="name" />
              </ReferenceInput>
            </Grid>
            <Grid item xs={6}>
              {/* {path_image ? (
                <img
                  src={`${URL_S3}${path_image}`}
                  width="200px"
                  height="200px"
                  className="custom-img-field"
                />
              ) : null} */}
              {/* <S3File
                idComponent="category-image"
                path="categories"
                handleUploadFinish={this.handleUploadFinish}
                id={this.props.match.id}
              /> */}
            </Grid>
          </Grid>
        </SimpleForm>
      </Edit>
    );
  }
}
