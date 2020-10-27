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

export const loginJwt = (AccessToken) =>
  api.authenticate({ strategy: "jwt", AccessToken });

export const logout = async (id) => localStorage.removeItem(`session:${id}`);
export const current = () => api.service("current-user").find();

export const productsService = api.service("products");
export const shopService = api.service("shops");
export const ordersService = api.service("orders");
export const currentUserService = api.service("current-user");
export const bannersService = api.service("banners");
export const scheduleService = api.service("schedule");

export default api;
