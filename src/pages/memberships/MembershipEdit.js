import React, { Component, useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  SimpleForm,
  TextInput,
  useEditController,
  ArrayInput,
  SimpleFormIterator
} from "react-admin";
import CloseIcon from "@material-ui/icons/Close";

import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/";

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
const MembershipEdit = ({ onCancel, ...props }) => {
  const classes = useStyles();
  const controllerProps = useEditController(props);
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/locations-states");
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
        <Typography variant="h6">Editar membresia</Typography>
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
        <TextInput fullWidth source="id" label={false} type="hidden" />
        <Grid fullWidth spacing={16}>
          <Grid item xl={6} spacing={6}>
            <TextInput source="name" label="Nombre" />
          </Grid>
          <Grid item xl={6} spacing={6}>
            <ArrayInput source="features" label="Caracteristicas">
              <SimpleFormIterator>
                <TextInput source="name" label="Nombre" />
              </SimpleFormIterator>
            </ArrayInput>
          </Grid>
        </Grid>
        {/* <Grid item xs={12}>
          <Paper fullWidth>Hola</Paper>
        </Grid> */}
      </SimpleForm>
    </div>
  );
};
export default MembershipEdit;
