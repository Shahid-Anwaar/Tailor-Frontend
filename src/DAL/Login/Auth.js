import { invokeApi } from "../invokeApi";

export const _admin_login_api = async (data) => {
  const requestObj = {
    path: `api/app_api/login`,
    method: "POST",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const _Email_Verification = async (data) => {
  const requestObj = {
    path: `api/app_api/email_verification`,
    method: "POST",
    headers: {
      // 'x-sh-auth': 1234
    },
    postData: data,
  };
  return invokeApi(requestObj);
};
export const _Code_Verification = async (data) => {
  const requestObj = {
    path: `api/app_api/code_verification`,
    method: "POST",
    headers: {
      // 'x-sh-auth': 1234
    },
    postData: data,
  };
  return invokeApi(requestObj);
};
export const _logout = async (data) => {
  const requestObj = {
    path: `api/app_api/logout?logout_from=${data}`,
    method: "GET",
    headers: {
      "x-sh-auth": localStorage.getItem("token"),
    },
  };
  return invokeApi(requestObj);
};
