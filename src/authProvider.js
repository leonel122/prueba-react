import {
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_ERROR,
  AUTH_GET_PERMISSIONS,
  AUTH_CHECK,
} from "react-admin";
import decodeJwt from "jwt-decode";

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
        console.log(response);
        // if (response.status < 200 || response.status >= 300) {
        //   throw new Error(response.statusText);
        // }
        return response.json();
      })
      .then(({ accessToken }) => {
        const decodedToken = decodeJwt(accessToken);
        console.log(accessToken);
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("role", decodedToken.role);
      });
  }
  if (type === AUTH_LOGOUT) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("role");
    return Promise.resolve();
  }
  if (type === AUTH_ERROR) {
    // ...
  }
  if (type === AUTH_CHECK) {
    console.log(localStorage.getItem("accessToken"), "00000000000000");
    return localStorage.getItem("accessToken")
      ? Promise.resolve()
      : Promise.reject();
  }
  if (type === AUTH_GET_PERMISSIONS) {
    const role = localStorage.getItem("role");
    return role ? Promise.resolve(role) : Promise.reject();
  }
  return Promise.reject("Unknown method");
};
