import { Button } from "@mui/material";
import CheckBoxes from "./GeneralComponents/CustomCheckBox";
const LogoutComponent = ({
  handleCloseLogoutModal,
  confirmLogout,
  loading,
  DevicePreference,
  setDevicePreference,
}) => {
  const RadioButtons = [
    {
      value: "this",
      label: "Logout from this devices",
    },
    // {
    //   value: "all",
    //   label: "Logout from all devices",
    // },
  ];
  return (
    <div className="p-3 py-1">
      <form onSubmit={confirmLogout}>
        <div className="text-start p-2">
          <CheckBoxes
            RadioButtons={RadioButtons}
            checkValue={DevicePreference}
            setCheckValue={setDevicePreference}
            title="Are you sure you want to log out?"
          />
        </div>
        <div className="d-flex justify-content-end">
          <Button
            className="me-3 delete-cancel-button"
            variant="outlined"
            onClick={handleCloseLogoutModal}
            size="large"
          >
            Cancel
          </Button>
          <Button
            size="large"
            variant="contained"
            type="submit"
            className="delete-confirm-button"
          >
            {loading ? "Please wait..." : "Logout"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LogoutComponent;
