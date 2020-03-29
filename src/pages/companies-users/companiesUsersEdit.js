import React, { Component, useCallback } from "react";
import { useHistory } from "react-router-dom";

import {
  SimpleForm,
  TextInput,
  useEditController,
  ReferenceInput,
  SelectInput
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
const CompaniesUsersEdit = ({ onCancel, ...props }) => {
  const classes = useStyles();
  const controllerProps = useEditController(props);
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/companies-users");
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
        <Typography variant="h6">Editar configuración</Typography>
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
        <Grid container fullWidth spacing={3}>
          <Grid item xs={12} md={12}>
            <ReferenceInput
              fullWidth
              label="Usuario"
              source="user_id"
              reference="users"
            >
              <SelectInput optionText="first_name" />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <ReferenceInput
              fullWidth
              label="Empresa"
              source="company_id"
              reference="companies"
            >
              <SelectInput optionText="name" />
            </ReferenceInput>
          </Grid>
          <Grid item xs={12} md={6}>
            <ReferenceInput
              fullWidth
              label="Rol en la empresa"
              source="company_user_role_id"
              reference="companies-user-roles"
            >
              <SelectInput optionText="name" />
            </ReferenceInput>
          </Grid>
        </Grid>
      </SimpleForm>
    </div>
  );
};
export default CompaniesUsersEdit;
