import { invokeApi } from "../invokeApi";

export const Upload_Image_On_S3 = async (data) => {
  const requestObj = {
    path: `api/app_api/upload_image_s3`,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};

export const Upload_File_On_S3 = async (data) => {
  const requestObj = {
    path: `api/app_api/upload_any_single_file_on_s3`,
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
      "x-sh-auth": localStorage.getItem("token"),
    },
    postData: data,
  };
  return invokeApi(requestObj);
};
