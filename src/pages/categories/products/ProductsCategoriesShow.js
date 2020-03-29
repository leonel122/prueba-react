import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EditButton,
  Show,
  ShowButton,
  DeleteButton,
  CardActions,
  TabbedShowLayout,
  Tab
} from "react-admin";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const CreateRelatedCommentButton = props => {
  console.log("id!", props);
  return (
    <Button
      component={Link}
      to={{
        pathname: "/products-categories/create",
        state: { category_id: props.id }
      }}
    >
      Create
    </Button>
  );
};

const PostActions = ({ id }) => (
  <CardActions>
    <CreateRelatedCommentButton id={id} />
  </CardActions>
);

export const ProductsCategoriesShow = props => {
  const { state = {} } = props.location;
  return (
    <Show {...props}>
      <TabbedShowLayout>
        <Tab label="Categoria">
          <List
            {...props}
            filterDefaultValues={{ parent_id: props.id }}
            actions={<PostActions id={props.id} />}
          >
            <Datagrid>
              <TextField source="id" />
              <TextField source="name" />
              <ShowButton />
              <EditButton />
            </Datagrid>
          </List>
        </Tab>
      </TabbedShowLayout>
    </Show>
  );
};
