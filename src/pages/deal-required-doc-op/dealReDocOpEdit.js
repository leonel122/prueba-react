import React, { Component, useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  SimpleForm,
  TextInput,
  useEditController,
  SelectInput,
  DateInput,
  PasswordInput,
  ReferenceInput
} from "react-admin";
import CloseIcon from "@material-ui/icons/Close";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Title } from "./";
import { Paper, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";

const genders = [
  { id: "female", name: "Femenino" },
  { id: "male", name: "Masculino" }
];
const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 40
  },
  title: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "1em"
  },
  form: {
    /*  [theme.breakpoints.up("xs")]: {
      width: 400
    },
    [theme.breakpoints.down("xs")]: {
      width: "100vw",
      marginTop: -30
    } */
  },
  inlineField: {
    display: "inline-block",
    width: "50%"
  }
}));

const statusList = [
  { value: "Activo", description: "Activo" },
  { value: "Inactivo", description: "Inactivo" },
  { value: "No-verificado", description: "No verificado" }
];

const regimentTypes = [
  { value: "1", description: "1" },
  { value: "2", description: "2" }
];

const DocumentTypes = [
  { value: "CC", description: "Cedula de ciudadania" },
  { value: "CI", description: "Documento de identidad" },
  { value: "CE", description: "Cedula Extrangeria" },
  { value: "TI", description: "Tarjeta de Identidad" },
  { value: "TP", description: "Tarjeta de P" }
];

const DealReqDocpEditEdit = ({ onCancel, ...props }) => {
  const classes = useStyles();
  const controllerProps = useEditController(props);
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/users");
  }, [history]);

  const handleOnCancel = () => {
    if (onCancel) return onCancel();
    handleClose();
  };
  if (!controllerProps.record) {
    return null;
  }
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant="h6">Editar Usuario</Typography>
        <IconButton onClick={handleOnCancel}>
          <CloseIcon />
        </IconButton>
      </div>
      <SimpleForm
        className={classes.form}
        basePath={controllerProps.basePath}
        record={controllerProps.record}
        save={controllerProps.save}
        version={controllerProps.version}
        redirect="list"
        resource="users"
      >
        <TextInput fullWidth source="id" label="id" />
        <Grid container fullWidth spacing={3}>
          <Grid item xs={12} md={12}>
            <TextInput fullWidth source="name" label="Nombre" />
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper fullWidth>Hola</Paper>
        </Grid> */}
      </SimpleForm>
    </div>
  );
};
export default DealReqDocpEditEdit;
