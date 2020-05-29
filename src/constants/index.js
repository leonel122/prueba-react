export const URL_BASE =
  window.location.hostname === "localhost"
    ? /* "http://localhost:3030" // */ "https://esnaqui.herokuapp.com" //
    : // "https://esnaqui.herokuapp.com"
      "https://esnaqui.herokuapp.com";
export const URL_AUTHENTICATION = "/authentication";
export const URL_S3_SERVER =
  window.location.hostname === "localhost"
    ? /* "http://localhost:3030" // */ "https://esnaqui.herokuapp.com"
    : "https://esnaqui.herokuapp.com";
export const URL_S3 = "https://snaqui.s3-sa-east-1.amazonaws.com/";
