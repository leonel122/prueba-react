import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  SelectField,
} from "react-admin";
import { Title } from ".";
import { Route, useHistory } from "react-router-dom";
import { Drawer, makeStyles } from "@material-ui/core";

import UnitMeasureEdit from "./UnitMeasureEdit";

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
const BrandsList = (props) => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/");
  }, [history]);

  return (
    <div>
      <Route path="/unit-measure/:id">
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
                bulkActionButtons={false}
                // filters={<MembreshipFilter />}
              >
                <Datagrid rowClick="edit" optimized {...props}>
                  <TextField source="id" />
                  <TextField label="Nombre" source="name" />
                  <EditButton label="Editar" />
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
                  <UnitMeasureEdit
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
export default BrandsList;
