import React, { Fragment, useCallback, useState } from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  ReferenceInput,
  Filter,
  ReferenceField,
  SelectInput
} from "react-admin";
import { Title } from "./";
import { Route, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { CreateButton, ExportButton, RefreshButton } from "react-admin";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer, makeStyles } from "@material-ui/core";

import MembershipCommissionEdit from "./membershipCommissionsEdit";

const MembreshipCommissionFilter = props => (
  <Filter {...props}>
    <ReferenceInput
      label="Membresia"
      source="membership_id"
      reference="memberships"
      alwaysOn
    >
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);
const PostActions = ({
  basePath,
  currentSort,
  displayedFilters,
  exporter,
  filters,
  filterValues,
  resource,
  showFilter,
  total
}) => (
  <Toolbar>
    {filters &&
      React.cloneElement(filters, {
        resource,
        showFilter,
        displayedFilters,
        filterValues,
        context: "button"
      })}
    <CreateButton basePath={basePath} />
    <ExportButton
      disabled={total === 0}
      resource={resource}
      sort={currentSort}
      filter={filterValues}
      exporter={exporter}
    />
    {/* Add your custom actions */}
    <Button color="primary" /* onClick={customAction} */>Custom Action</Button>
  </Toolbar>
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
const MembershipCommissionList = props => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/membership-commissions");
  }, [history]);

  const handleAdd = useCallback(() => {
    history.push("/membership-commissions");
  }, [history]);

  return (
    <div>
      <Route path="/membership-commissions/:id">
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
                filters={<MembreshipCommissionFilter />}
              >
                <Datagrid rowClick="edit" optimized {...props}>
                  <TextField source="id" />
                  <ReferenceField
                    label="Nombre"
                    source="membership_id"
                    reference="memberships"
                  >
                    <TextField source="name" />
                  </ReferenceField>
                  <TextField source="max_value" />
                  <TextField source="percentage" />
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
                  <MembershipCommissionEdit
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
export default MembershipCommissionList;
