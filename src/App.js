// in src/App.js
import React from "react";
import { Admin, Resource, mergeTranslations } from "react-admin";

import { createHashHistory } from "history";

import { restClient, authClient } from "ra-data-feathers";
import Api from "./utils/Api";
import { UserList, UserCreate } from "./pages/users/";
import { ConfigurationList, ConfigurationCreate } from "./pages/configurations";
import { CityLists, CityCreate } from "./pages/locations/cities";
import {
  CompaniesCreate,
  CompaniesList,
  CompaniesEdit,
  CompaniesShow
} from "./pages/companies";
import { StateList, StateCreate } from "./pages/locations/states";
import {
  ServicesCategoriesList,
  ServicesCategoriesCreate
} from "./pages/categories/services";
import {
  ProductsCategoriesList,
  ProductsCategoriesCreate,
  ProductsCategoriesEdit,
  ProductsCategoriesShow
} from "./pages/categories/products";
import {
  MembserhipCommissionsList,
  MembershipCommissionsCreate
} from "./pages/membership-commissions";
import {
  DealReDocOpCreate,
  DealReDocOpList
} from "./pages/deal-required-doc-op";
import {
  CompaniesUsersList,
  CompaniesUsersCreate
} from "./pages/companies-users";
import { MembershipList, MembershipCreate } from "./pages/memberships";
import { DealsList, DealsShow } from "./pages/deals";
import Layout from "./layouts/Layout";

const restClientOptions = {
  usePatch: true
};

const authClientOptions = {
  storageKey: "feathers-jwt",
  authenticate: { strategy: "local" },
  permissionsKey: "permissions",
  permissionsField: "roles",
  redirectTo: "/login"
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
    <Resource name="users-roles" />
    <Resource name="companies-roles" />
    <Resource name="companies-user-roles" />
    <Resource name="company-membership" />

    <Resource
      name="users"
      create={UserCreate} /*  edit={UserEdit} */
      list={UserList}
    />
    <Resource
      name="locations-cities"
      create={CityCreate} /*  edit={UserEdit} */
      list={CityLists}
    />
    <Resource
      name="locations-states"
      create={StateCreate} /*  edit={UserEdit} */
      list={StateList}
    />
    <Resource
      name="services-categories"
      create={ServicesCategoriesCreate}
      list={ServicesCategoriesList} /*  edit={UserEdit} */
    />
    <Resource
      name="categories"
      list={ProductsCategoriesList}
      // edit={ProductsCategoriesEdit}
      create={ProductsCategoriesCreate}
      // show={ProductsCategoriesShow}
    />
    <Resource
      name="configurations"
      create={ConfigurationCreate}
      list={ConfigurationList}
    />
    <Resource
      name="deal-required-documents-options"
      create={DealReDocOpCreate}
      list={DealReDocOpList}
    />
    <Resource
      name="memberships"
      create={MembershipCreate}
      list={MembershipList}
    />
    <Resource
      name="companies-users"
      create={CompaniesUsersCreate}
      list={CompaniesUsersList}
    />
    <Resource
      name="companies"
      create={CompaniesCreate}
      list={CompaniesList}
      edit={CompaniesEdit}
      show={CompaniesShow}
    />
    <Resource
      name="deals"
      // create={CompaniesCreate}
      list={DealsList}
      // edit={CompaniesEdit}
      show={DealsShow}
    />
    <Resource
      name="membership-commissions"
      create={MembershipCommissionsCreate}
      list={MembserhipCommissionsList}
      /*     edit={CompaniesEdit}
      show={CompaniesShow} */
    />

    {/*  <Resource
      options={{ label: "Hijos" }}
      name="childrens"
      create={ChildrenCreate}
      edit={ChildrenEdit}
      list={ChildrenList}
    /> */}
  </Admin>
);
export default App;
