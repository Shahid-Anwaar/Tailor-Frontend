import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import KeyIcon from "@mui/icons-material/Key";
import EditNoteIcon from "@mui/icons-material/EditNote";
import ChangePassword from "../../components/ChangePassword";
import CustomModal from "../../components/CustomModel";
import { MenuItemProps, slotPropsPaper } from "../../theme/PaperProps";
import EditProfile from "../../components/EditProfile";
import CustomPopover from "../../components/CustomPopover";
import { useSnackbar } from "notistack";
import LogoutComponent from "../../components/LogoutComponent";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

export default function ProfileIcon({
  anchorEl,
  open,
  handleClose,
  name,
  email,
}) {
  const [showChangePassword, setShowChangePassword] = useState(false);
  const [modelState, setModelState] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const [DevicePreference, setDevicePreference] = useState("this");
  const [loading, setLoading] = useState();
  const [openModal, setOpenModal] = useState(false);

  const handleCloseModel = () => {
    setModelState(false);
  };

  const handleEditProfile = () => {
    setModelState(true);
  };

  const handleClickDropdown = () => {
    setOpenModal(!openModal);
  };

  const handleLogout = async (event) => {
    event.preventDefault();
    navigate("/login");
    enqueueSnackbar("Successfuly Logout", { variant: "success" });
    localStorage.clear();
  };

  return (
    <div className="Profile-DropDown">
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        slotProps={slotPropsPaper}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem
          className="Profile-Icon-Link bg-transparent"
          onClick={handleClose}
          sx={MenuItemProps.User_Name}
        >
          {name}
        </MenuItem>
        <MenuItem
          className="Profile-Icon-Link"
          onClick={handleClose}
          sx={MenuItemProps.email_Props}
        >
          {email || "No Email Provided"}
        </MenuItem>
        <hr className="custom-divider" />
        <MenuItem
          className="Profile-Icon-Link fs-16"
          onClick={() => {
            handleEditProfile();
            handleClose();
          }}
        >
          <ListItemIcon>
            <EditNoteIcon color="primary" />
          </ListItemIcon>
          Edit Profile
        </MenuItem>
        <MenuItem
          className="fs-16 Profile-Icon-Link"
          onClick={() => {
            handleClose();
            setShowChangePassword(true);
          }}
        >
          <ListItemIcon>
            <KeyIcon fontSize="small" color="primary" />
          </ListItemIcon>
          Change Password
        </MenuItem>
        <MenuItem
          className="fs-16 Profile-Icon-Link"
          onClick={() => {
            // navigate("/login");
            // enqueueSnackbar("Successfuly Logout", { variant: "success" });
            // handleClose();
            setOpenModal(true);
          }}
        >
          <ListItemIcon>
            <LogoutIcon fontSize="small" color="primary" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
      <CustomModal
        crossButton={true}
        CustomSpacing={true}
        open={showChangePassword}
        handleClose={() => setShowChangePassword(false)}
        component={
          <ChangePassword handleClose={() => setShowChangePassword(false)} />
        }
      />
      <CustomPopover
        isOpenPop={modelState}
        isClosePop={setModelState}
        handleClose={handleCloseModel}
        title="Edit Profile"
        // width={"600px"}
        componentToPassDown={
          <EditProfile handleCloseModel={handleCloseModel} />
        }
      />
      <CustomModal
        open={openModal}
        CustomSpacing={true}
        component={
          <LogoutComponent
            setDevicePreference={setDevicePreference}
            DevicePreference={DevicePreference}
            loading={loading}
            handleCloseLogoutModal={() => setOpenModal(false)}
            confirmLogout={handleLogout}
          />
        }
      />
    </div>
  );
}
