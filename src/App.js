// in src/App.js
import React from "react";
import { Admin, Resource, mergeTranslations } from "react-admin";

import { createHashHistory } from "history";

import { restClient, authClient } from "ra-data-feathers";
import Api from "./utils/Api";
import { UserList, UserCreate } from "./pages/users";
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
import { orderList, orderShow } from "./pages/orders";
import Layout from "./layouts/Layout";
import { BannerList, BannerEdit, BannerCreate } from "./pages/banners";
import {
  ShippingCostList,
  ShippingCreate,
  ShippingCostEdit,
} from "./pages/shipping-cost";
import { ScheduleList, ScheduleEdit, ScheduleCreate } from "./pages/schedule";
import { CmsList, CmsCreate, CmsEdit } from "./pages/cms";
import {
  FeatureCreate,
  FeatureEdit,
  FeatureList,
} from "./pages/featured-products";
import authProvider from "./authProvider";

const restClientOptions = {
  usePatch: true,
};

const initialState = {
  theme: "dark",
  grid: 5,
};

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" },
  permissionsKey: "permissions",
  permissionsField: "role",
  redirectTo: "/login",
  passwordField: "password",
  usernameField: "phone",
};
const history = createHashHistory();
//const App = () => <Admin dataProvider={dataProvider} />;
const App = () => (
  <Admin
    dataProvider={restClient(Api, restClientOptions)}
    authProvider={authClient(Api, authClientOptions)}
    history={history}
    appLayout={Layout}
    initialState={initialState}
    /* i18nProvider={i18nProvider} */
    locale="en"
  >
    {(permissions) => [
      permissions === "admin"
        ? [
            <Resource
              name="shops-types"
              list={ShopTypesCreateList}
              create={ShopTypesCreateCreate}
            />,
            <Resource
              name="banners"
              // create={UnitMeasureCreate}
              list={BannerList}
              edit={BannerEdit}
              create={BannerCreate}
            />,
            <Resource
              name="unit-measure"
              create={UnitMeasureCreate}
              list={UnitMeasureList} /*  edit={UserEdit} */
            />,
            <Resource
              name="cms"
              list={CmsList}
              edit={CmsEdit}
              create={CmsCreate}
            />,
            <Resource
              name="featured-products"
              list={FeatureList}
              edit={FeatureEdit}
              create={FeatureCreate}
            />,
          ]
        : null,
      <Resource name="orders" list={orderList} show={orderShow} />,
      <Resource
        name="users"
        create={
          permissions == "admin" ? UserCreate : false
        } /*  edit={UserEdit} */
        list={UserList}
      />,
      <Resource
        name="categories"
        list={ProductsCategoriesList}
        edit={ProductsCategoriesEdit}
        create={permissions == "admin" ? ProductsCategoriesCreate : false}
        show={ProductsCategoriesShow}
      />,
      <Resource
        name="shops"
        list={ShopList}
        create={permissions == "admin" ? ShopCreate : false}
        edit={ShopEdit}
      />,
      <Resource
        name="products"
        list={ListProduct}
        create={ProductCreate}
        edit={ProductEdit}
      />,
      <Resource
        name="shipping-cost"
        list={ShippingCostList}
        create={ShippingCreate}
        edit={ShippingCostEdit}
      />,
      <Resource
        name="schedule"
        list={ScheduleList}
        edit={ScheduleEdit}
        create={ScheduleCreate}
      />,
      <Resource name="order-statuses" />,
      <Resource name="localities" />,
    ]}
  </Admin>
);
export default App;
