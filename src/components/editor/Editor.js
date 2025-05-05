import React from "react";

import ReactEditor from "react-text-editor-kit";
import { Upload_Image_On_S3 } from "../../DAL/FileUpload/s3FileUpload";
import { picBaseUrl } from "../../config/config";
// import { _upload_any_single_file_on_s3 } from "src/DAL/uploadImageOnS3";
// import { s3baseUrl } from "src/config/config";

let theme_config = {
  "background-color": "transparent",
  "border-color": "#c4c4c4",
  "text-color": "#fff",
  "toolbar-button-background": "transparent",
  "toolbar-text-color": "#fff",
  "toolbar-button-hover-background": "#0a0a0a",
  "toolbar-button-selected-background": "#ACACAC",
  "svg-color": "#fff",
  "save-button-background": "#transparent",
};

export default function Editor({ value, onChange, height, placeholder = "" }) {
  const get_editor_ref = (value) => {};

  const image_handler = async (e) => {
    const formData = {
      image: e.image,
    };

    try {
      let result = await Upload_Image_On_S3(formData);
      if (result.code === 200) {
        return picBaseUrl + result.path;
      } else {
        return "";
      }
    } catch (error) {
      return "";
    }
  };

  return (
    <div style={{ position: "relative" }}>
      <ReactEditor
        value={value}
        getEditorRef={get_editor_ref}
        onChange={onChange}
        mainProps={{ className: "red" }}
        placeholder={placeholder}
        theme_config={theme_config}
        image_handler={image_handler}
      />
    </div>
  );
}
