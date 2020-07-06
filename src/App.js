// in src/App.js
import React from "react";
import { Admin, Resource, mergeTranslations } from "react-admin";

import { createHashHistory } from "history";

import { restClient, authClient } from "ra-data-feathers";
import Api from "./utils/Api";
import { UserList, UserCreate } from "./pages/users/";
import {
  ProductsCategoriesList,
  ProductsCategoriesCreate,
  ProductsCategoriesEdit,
  ProductsCategoriesShow,
} from "./pages/categories/products";
import { UnitMeasureList, UnitMeasureCreate } from "./pages/unit-measure";
import { ShopTypesCreateCreate, ShopTypesCreateList } from "./pages/shop-types";
import { ShopList, ShopCreate, ShopEdit } from "./pages/shops";
import { ListProduct, ProductCreate, ProductEdit } from "./pages/products";
import { orderList } from "./pages/orders/";
import Layout from "./layouts/Layout";

const restClientOptions = {
  usePatch: true,
};

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" },
  permissionsKey: "permissions",
  permissionsField: "roles",
  redirectTo: "/login",
};
const history = createHashHistory();
//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
  <Admin
    dataProvider={restClient(Api, restClientOptions)}
    authProvider={authClient(Api, authClientOptions)}
    history={history}
    appLayout={Layout}
    /* i18nProvider={i18nProvider} */
    locale="en"
  >
    <Resource
      name="users"
      create={UserCreate} /*  edit={UserEdit} */
      list={UserList}
    />
    <Resource
      name="unit-measure"
      create={UnitMeasureCreate}
      list={UnitMeasureList} /*  edit={UserEdit} */
    />
    <Resource
      name="categories"
      list={ProductsCategoriesList}
      edit={ProductsCategoriesEdit}
      create={ProductsCategoriesCreate}
      show={ProductsCategoriesShow}
    />
    <Resource
      name="shops-types"
      list={ShopTypesCreateList}
      create={ShopTypesCreateCreate}
    />
    <Resource
      name="shops"
      list={ShopList}
      create={ShopCreate}
      edit={ShopEdit}
    />
    <Resource name="orders" list={orderList} />
    <Resource
      name="products"
      list={ListProduct}
      create={ProductCreate}
      edit={ProductEdit}
    />
    <Resource name="order-statuses" />
  </Admin>
);
export default App;
