import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  TextInput,
  NumberField,
  Filter
} from "react-admin";
import { Title } from "./";
import { Route, useHistory } from "react-router-dom";
import { Drawer, makeStyles } from "@material-ui/core";

import MembershipEdit from "./MembershipEdit";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  list: {
    flexGrow: 1,
    transition: theme.transitions.create(["all"], {
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  listWithDrawer: {
    marginRight: 400
  },
  drawerPaper: {
    zIndex: 100
  }
}));
const MembershipList = props => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/memberships");
  }, [history]);

  const handleAdd = useCallback(() => {
    history.push("/memberships");
  }, [history]);

  return (
    <div>
      <Route path="/memberships/:id">
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
                sort={{ field: "priority", order: "DESC" }}
                // filters={<MembreshipFilter />}
              >
                <Datagrid rowClick="edit" optimized {...props}>
                  <TextField source="id" />
                  <TextField label="Nombre" source="name" />
                  <TextField label="Precio" source="price" />
                  <TextField label="Dias de duración" source="duration_days" />
                  <TextField label="Prioridad" source="priority" />
                  <EditButton label="Editar" />
                </Datagrid>
              </List>
              <Drawer
                variant="persistent"
                open={isMatch}
                anchor="right"
                onClose={handleClose}
                classes={{
                  paper: classes.drawerPaper
                }}
              >
                {isMatch ? (
                  <MembershipEdit
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
export default MembershipList;
