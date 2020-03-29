import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Filter,
  ReferenceField,
  TextInput
} from "react-admin";
import { Title } from "./";
import { Route, useHistory } from "react-router-dom";
import { Drawer, makeStyles } from "@material-ui/core";

import CompaniesUsersEdit from "./companiesUsersEdit";

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
const CompaniesUsersList = props => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/companies-users");
  }, [history]);

  return (
    <div>
      <Route path="/companies-users/:id">
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
                  <ReferenceField
                    label="Usuario"
                    source="user_id"
                    reference="users"
                  >
                    <TextField source="first_name" />
                  </ReferenceField>
                  <ReferenceField
                    label="Empresa"
                    source="company_id"
                    reference="companies"
                  >
                    <TextField source="name" />
                  </ReferenceField>
                  <ReferenceField
                    label="Rol en la empresa"
                    source="company_user_role_id"
                    reference="companies-user-roles"
                  >
                    <TextField source="name" />
                  </ReferenceField>
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
                  <CompaniesUsersEdit
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
export default CompaniesUsersList;
