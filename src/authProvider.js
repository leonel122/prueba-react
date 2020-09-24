import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
  AUTH_CHECK,
} from "react-admin";
import decodeJwt from "jwt-decode";

import { loginJwt, current } from "./utils/Api";

export default (type, params) => {
  if (type === AUTH_LOGIN) {
    const { username, password } = params;

    const request = new Request("https://api.esnaqui.com/authentication", {
      method: "POST",
      body: JSON.stringify({ strategy: "local", phone: username, password }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });
    return fetch(request)
      .then((response) => {
        // if (response.status < 200 || response.status >= 300) {
        //   throw new Error(response.statusText);
        // }
        return response.json();
      })
      .then(async ({ accessToken }) => {
        // const decodedToken = decodeJwt(accessToken);

        await localStorage.setItem("accessToken", accessToken);
        await localStorage.setItem("feathers-jwt", accessToken);
        await current().then((it) =>
          localStorage.setItem("role", it.user.role)
        );
        // localStorage.setItem("role", decodedToken.role);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("feathers-jwt");
    localStorage.removeItem("role");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    // ...
  }
  if (type === AUTH_CHECK) {
    return localStorage.getItem("accessToken")
      ? Promise.resolve()
      : Promise.reject();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem("role");
    console.log(role, "ppppppppppppppppp");
    return role ? Promise.resolve(role) : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
