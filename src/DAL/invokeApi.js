// common business logic related util methods
import axios from "axios";
// import { baseUrl } from "../config/config";

axios.defaults.headers.post["Content-Type"] = "application/json";

// const baseUrl = "https://cors-anywhere.herokuapp.com/";
const baseUrl = "https://tailor-backend-production.up.railway.app/";
export async function invokeApi({
  path,
  method = "GET",
  headers = {},
  queryParams = {},
  postData = {},
}) {
  const reqObj = {
    method,
    url: baseUrl + path,
    headers,
  };

  reqObj.params = queryParams;

  if (method === "POST") {
    reqObj.data = postData;
  }
  if (method === "PUT") {
    reqObj.data = postData;
  }
  if (method === "DELETE") {
    reqObj.data = postData;
  }

  let results;

  // if (window.location.hostname == "localhost") {
  console.info("<===REQUEST-OBJECT===>", reqObj);
  // }

  try {
    results = await axios(reqObj);
    // if (window.location.hostname == "localhost") {
    console.info("<===Api-Success-Result===>", results);
    // }

    return results;
  } catch (error) {
    // if (window.location.hostname == "localhost") {
    console.info("<===Api-Error===>", error);
    // }

    if (error?.response?.status === 401) {
      localStorage.clear();
      window.location.reload();
    }
    return {
      code: error.code,
      message: error?.response?.data?.message ? error.response.data.message : "",
    };
  }
}
