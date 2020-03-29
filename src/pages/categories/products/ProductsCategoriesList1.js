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
  Filter,
  ReferenceField
} from "react-admin";
import { Title } from ".";
import { Route, useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import { CreateButton, ExportButton, RefreshButton } from "react-admin";
import Toolbar from "@material-ui/core/Toolbar";
import { Drawer, useMediaQuery, makeStyles } from "@material-ui/core";

import ProductsCategoriesEdit from "./ProductsCategoriesEdit";

const GuideFilter = props => (
  <Filter {...props}>
    <TextInput label="Título" source="title" alwaysOn />
  </Filter>
);
const PostActions = ({
  basePath,
  currentSort,
  displayedFilters,
  exporter,
  filters,
  filterValues,
  onUnselectItems,
  resource,
  selectedIds,
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
const ProductsCategoriesList = props => {
  const [isMatch, setIsMatch] = useState(false);
  const classes = useStyles();
  const history = useHistory();
  const handleClose = useCallback(() => {
    history.push("/products-categories");
  }, [history]);

  return (
    <div>
      <Route path="/products-categories/:id">
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
                  <ReferenceField
                    label="Padre"
                    source="parent_id"
                    reference="products-categories"
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
                  <ProductsCategoriesEdit
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
export default ProductsCategoriesList;
