import feathers from "@feathersjs/feathers";
import restFeathers from "@feathersjs/rest-client";
import feathersAuthClient from "@feathersjs/authentication-client";

import { URL_BASE, URL_AUTHENTICATION } from "../constants";
const api = feathers();
const restClient = restFeathers(URL_BASE);
const authClient = feathersAuthClient({
  header: "Authorization",
  path: "/authentication",
  jwtStrategy: "jwt",
  entity: "user",
  service: "users",
  storage: window.localStorage
});
api.configure(restClient.fetch(window.fetch.bind(window)));
api.configure(authClient);

export const companiesUserService = api.service("companies-users");
export const usersService = api.service("users");
export const companiesService = api.service("companies");
export const companiesServicesCategoriesService = api.service(
  "company-services-categories"
);
export const servicesCategories = api.service("services-categories");
export const companyProductsCategories = api.service(
  "company-products-categories"
);

export const dealsService = api.service("deals");
export default api;
