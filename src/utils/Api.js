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
  storage: window.localStorage,
});
api.configure(restClient.fetch(window.fetch.bind(window)));
api.configure(authClient);

export const productsService = api.service("products");
export const shopService = api.service("shops");
export const ordersService = api.service("orders");
export default api;
