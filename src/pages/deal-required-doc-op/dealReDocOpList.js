import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  BulkDeleteButton,
  Datagrid,
  TextField,
  EditButton,
  ShowButton,
  TextInput,
  EmailField,
  Filter
} from "react-admin";
import { Title } from "./";
import { Route, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { CreateButton, ExportButton, RefreshButton } from "react-admin";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer, useMediaQuery, makeStyles } from "@material-ui/core";

import DealRequiredDocumentOptionsEdit from "./dealReDocOpEdit";

const GuideFilter = props => (
  <Filter {...props}>
    <TextInput label="Título" source="title" alwaysOn />
  </Filter>
);

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
const DealRequiredDocumentOptionsList = props => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/deal-required-documents-options");
  }, [history]);

  return (
    <div>
      <Route path="/deal-required-documents-options/:id">
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
                exporter={false} /* filters={<GuideFilter />} */
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
                  paper: classes.drawerPaper
                }}
              >
                {isMatch ? (
                  <DealRequiredDocumentOptionsEdit
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
export default DealRequiredDocumentOptionsList;
