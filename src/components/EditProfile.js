import React, { useState, useEffect } from "react";
import { Button, Avatar, IconButton, CircularProgress } from "@mui/material";
import { styled } from "@mui/system";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { useSnackbar } from "notistack";
// import { picBaseUrl } from "../config/config";
import { Edit_Profile_Settings } from "../DAL/Edit_Profile/Profile";
import Iconify from "../components/Iconify";
import { useAdminContext } from "../Hooks/AdminContext";
import PhoneInput from "react-phone-number-validation";
import { formatString, validateInputs } from "../utils/constant";
import FormInput from "./GeneralComponents/FormInput";
import { adminIcon } from "../assets";

const StyledAvatar = styled(Avatar)({
  width: "100px",
  height: "100px",
  marginBottom: "20px",
  position: "relative",
});

const requiredStringInputFields = [
  "employee_id",
  "first_name",
  "last_name",
  "contact_number",
  "address",
];

const EditProfile = ({ handleCloseModel }) => {
  const { setnavbarTitle } = useAdminContext();
  // const { userData, setUserData } = useUserData();
  const [ProfileImage, setProfileImage] = useState();

  const [Data, setData] = useState({
    employee_id: "",
    first_name: "Mujahid",
    last_name: "Anwaar",
    contact_number: "+92-307-0006269",
    email: "tailor@gmail.com",
    address: "",
    image: null,
  });
  const { enqueueSnackbar } = useSnackbar();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    enqueueSnackbar("Admin details updated successfully", {
      variant: "success",
    });
    handleCloseModel();

    // const errors = validateInputs(Data, requiredStringInputFields, [], []);
    // if (!(Object.keys(errors).length === 0)) {
    //   enqueueSnackbar(formatString(Object.keys(errors)[0]) + " is required", {
    //     variant: "error",
    //   });
    //   setLoading(false);
    //   return;
    // }

    // const formData = new FormData();
    // formData.append("employee_id", parseInt(Data.employee_id));
    // formData.append("first_name", Data.first_name);
    // formData.append("last_name", Data.last_name);
    // formData.append("contact_number", Data.contact_number.trim());
    // formData.append("address", Data.address.trim());

    // if (Data.image && Data.image instanceof File) {
    //   formData.append("image", Data.image);
    // }
    // setLoading(true);
    // const response = await Edit_Profile_Settings(Data.employee_id, formData);
    // if (response.code === 200) {
    //   enqueueSnackbar("Admin details updated successfully", {
    //     variant: "success",
    //   });
    //   // localStorage.setItem("UserData", JSON.stringify(Data));
    //   localStorage.setItem(
    //     "UserImage",
    //     picBaseUrl + response?.employee?.profile_pic?.small
    //   );
    //   //   setProfileImage(picBaseUrl + response?.employee?.profile_pic?.small);
    //   setUserData(response?.employee);
    //   setLoading(false);
    // } else {
    //   enqueueSnackbar(response.message, { variant: "error" });
    //   setLoading(false);
    // }
  };

  const handleImageChange = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setData((prevState) => ({
      ...prevState,
      image: e.target.files[0],
    }));
  };
  // useEffect(() => {
  //   if (userData) {
  //     setData((prev) => {
  //       return {
  //         ...prev,
  //         employee_id: userData?._id,
  //         first_name: userData?.first_name,
  //         last_name: userData?.last_name,
  //         contact_number: userData?.contact_number,
  //         address: userData?.address,
  //         image: picBaseUrl + userData.profile_pic.small,
  //       };
  //     });
  //   }
  //   // eslint-disable-next-line
  // }, [userData]);

  useEffect(() => {
    setnavbarTitle("Edit Profile");
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {loading ? (
        <div className="d-flex justify-content-center align-items-center circular_progress">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className="col-12 d-flex justify-content-center">
            <div className="Position_update">
              <StyledAvatar
                alt="Profile Image"
                src={"https://scontent.flyp6-2.fna.fbcdn.net/v/t39.30808-6/434426820_122143393130051044_2078335917148030411_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=n7bLMNlihKYQ7kNvwFoOyH_&_nc_oc=Adk-FWTBV4qtIkHwzvCJqcNAxsDkKX-NOd1m0AUUvDhV0fwkX5FQkLrDV0uKIm_idTsVVl0qnpWYl7fSdZKTa4Qp&_nc_zt=23&_nc_ht=scontent.flyp6-2.fna&_nc_gid=JdAIkZ_LwVJSu6AVzL2Mhw&oh=00_AfK_aZg36e7Uyhv4shYyAJpd7V7dT5wQg66n-VubHJz4Sw&oe=682570E8"}
                 />
              <input
                accept="image/*"
                style={{ display: "none" }}
                id="upload-button"
                type="file"
                onChange={handleImageChange}
              />
              <label htmlFor="upload-button">
                <IconButton
                  className="Profile-Image-Change"
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                >
                  <CameraAltIcon />
                </IconButton>
              </label>
            </div>
          </div>
          <hr className="" />
          <form onSubmit={handleSubmit}>
            <div className="form-container row ">
              <div className="col-6 pe-1">
                <FormInput
                  label="First Name"
                  fullWidth
                  type="text"
                  value={Data.first_name || ""}
                  sx={false}
                  onChange={(e) =>
                    setData({ ...Data, first_name: e.target.value })
                  }
                  InputProps={{
                    endAdornment: (
                      <Iconify
                        icon={"wpf:name"}
                        width={20}
                        height={20}
                        color={"#6d00fc"}
                      />
                    ),
                  }}
                />
              </div>
              <div className="col-6 ps-1">
                <FormInput
                  label="Last Name"
                  fullWidth
                  type="text"
                  sx={false}
                  value={Data.last_name || ""}
                  onChange={(e) =>
                    setData({ ...Data, last_name: e.target.value })
                  }
                  InputProps={{
                    endAdornment: (
                      <Iconify
                        icon={"wpf:name"}
                        width={20}
                        height={20}
                        color={"#6d00fc"}
                      />
                    ),
                  }}
                />
              </div>

              <div className="col-12">
                <FormInput
                  label="Email"
                  fullWidth
                  type="email"
                  sx={false}
                  value={Data.email || ""}
                  onChange={(e) => setData({ ...Data, email: e.target.value })}
                />
              </div>
              <div className="col-12 mb-3">
                <FormInput
                  label="Contact Number"
                  fullWidth
                  type="tel"
                  sx={false}
                  value={Data.contact_number || ""}
                  onChange={(e) =>
                    setData({ ...Data, contact_number: e.target.value })
                  }
                />
              </div>

              {/* <div className="col-12 mt-2">
                <PhoneInput
                  countryCodeEditable={false}
                  autoSelectCountry={true}
                  dropdownClass="select-div2"
                  country="pk"
                  required={true}
                  enableSearch={true}
                  value={Data.contact_number} // Current value of the phone number input (required)
                  setValue={setData} // Function to set the value of the phone number input (required)
                  onChange={(value) =>
                    setData((prev) => {
                      return { ...prev, contact_number: value };
                    })
                  } // Function called when the phone number changes (required)
                />
              </div> */}

              {/* <div className="mt-2">
                <FormInput
                  label="Address"
                  name="address"
                  required={true}
                  type="text"
                  multline={true}
                  value={Data.address || ""} // Bind to Data
                  onChange={(e) =>
                    setData({ ...Data, address: e.target.value })
                  }
                />
              </div> */}
            </div>
            {/* <hr className="my-3" /> */}
            <div className="d-flex justify-content-end">
              <div className="d-flex add-button">
                <Button
                  variant="outlined"
                  onClick={handleCloseModel}
                  className="delete-cancel-button"
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  className="popover-apply-button"
                >
                  {loading ? "Please wait..." : "Submit"}
                </Button>
              </div>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditProfile;
