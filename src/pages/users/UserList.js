import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  EmailField,
  Filter,
  TextInput,
  SelectInput,
} from "react-admin";
import { Title } from "./";
import { Route, useHistory } from "react-router-dom";
import { Drawer, makeStyles } from "@material-ui/core";

import UserEdit from "./UserEdit";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  list: {
    flexGrow: 1,
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
  listWithDrawer: {
    marginRight: 400,
  },
  drawerPaper: {
    zIndex: 100,
  },
}));

const status = [
  { id: "active", name: "Activo" },
  { id: "inactive", name: "inactivo" },
];

const Filters = (props) => (
  <Filter {...props}>
    <TextInput label="Buscador" source="search" alwaysOn />
    <SelectInput
      fullWidth
      source="status"
      label="Estado actual"
      choices={status}
      optionText="name"
      optionValue="id"
      alwaysOn
    />
  </Filter>
);

const UserList = ({ permissions, ...props }) => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/users");
  }, [history]);

  return (
    <div>
      <Route path="/users/:id">
        {({ match }) => {
          const isMatch = !!(
            match &&
            match.params &&
            match.params.id !== "create"
          );
          return (
            <Fragment>
              <List
                {...props}
                title={<Title />}
                exporter={false}
                filters={<Filters />}
              >
                <Datagrid rowClick="edit" optimized {...props}>
                  {permissions == "admin" && <TextField source="id" disable />}
                  <TextField label="Nombre" source="first_name" />
                  <TextField label="Apellido" source="last_name" />
                  <TextField label="Teléfono" source="phone" />
                  <EmailField source="email" />
                  {permissions == "admin" && (
                    <TextField source="status" label="Estado" />
                  )}
                  <EditButton label="Editar" />
                  {/* <Button
                    variant="contained"
                    color="primary"
                    onClick={handleAdd}
                  >
                    <AddIcon />
                    Agregar Hijo
                  </Button> */}
                </Datagrid>
              </List>
              <Drawer
                variant="persistent"
                open={isMatch}
                anchor="right"
                onClose={handleClose}
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {isMatch ? (
                  <UserEdit
                    id={match.params.id}
                    onCancel={handleClose}
                    {...props}
                  />
                ) : null}
              </Drawer>
            </Fragment>
          );
        }}
      </Route>
    </div>
  );
};
export default UserList;
