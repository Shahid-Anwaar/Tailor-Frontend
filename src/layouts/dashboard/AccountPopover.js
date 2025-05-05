import { useEffect, useRef, useState } from "react";
import { Avatar, Badge, Box, Menu, MenuItem, Typography } from "@mui/material";
import ProfilePop from "./ProfilePop";
// import { picBaseUrl } from "../../config/config";
import { useLocation } from "react-router-dom";
import Iconify from "../../components/Iconify";
import { adminIcon } from "../../assets";
// ----------------------------------------------------------------------

export default function AccountPopover({ setIsLoading }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [ProfileInfo, setProfileInfo] = useState({});
  const [notificationAnchor, setNotificationAnchor] = useState(null);

  const notifications = [
    {
      id: 1,
      message: "A new case has been submitted by a client.",
      time: "Just now",
      type: "new-case-submitted",
      icon: "mdi:file-document",
    },
    {
      id: 2,
      message: "A case has been assigned to an investigator.",
      time: "10 minutes ago",
      type: "case-assigned",
      icon: "mdi:account-check",
    },
    {
      id: 3,
      message: "An investigator has submitted an update on case 'Theft'.",
      time: "30 minutes ago",
      type: "investigator-update",
      icon: "mdi:comment",
    },
    {
      id: 4,
      message:
        "A new comment has been added by the client on the case 'Fraud'.",
      time: "1 hour ago",
      type: "client-comment",
      icon: "mdi:comment-outline",
    },
    {
      id: 6,
      message: "A case 'Financial Fraud' is due for review tomorrow.",
      time: "3 hours ago",
      type: "case-reminder",
      icon: "mdi:calendar-alert",
    },
    {
      id: 7,
      message: "A new client has registered in the system.",
      time: "4 hours ago",
      type: "new-client",
      icon: "mdi:account-group",
    },
    {
      id: 8,
      message:
        "A case 'Theft Investigation' has been closed by an investigator.",
      time: "5 hours ago",
      type: "case-closed",
      icon: "mdi:check-circle",
    },
    {
      id: 10,
      message: "A case 'Theft' has been escalated to a higher priority.",
      time: "7 hours ago",
      type: "case-escalated",
      icon: "mdi:alert-circle",
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleNotificationClick = (event) => {
    setNotificationAnchor(event.currentTarget);
  };
  const handleNotificationClose = () => {
    setNotificationAnchor(null);
  };


  return (
    <div className={`mt-4 px-0`}>
      <div className="d-flex justify-content-between profile_menu">
        <div className="left-item">
          <Menu
            anchorEl={notificationAnchor}
            open={Boolean(notificationAnchor)}
            onClose={handleNotificationClose}
            PaperProps={{
              sx: { width: 300 },
            }}
            slotProps={{
              paper: {
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&::before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              },
            }}
            transitionDuration={600}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Typography variant="h6" sx={{ p: 2 }}>
              Notifications
            </Typography>
            {notifications.map((notif) => (
              <MenuItem key={notif.id}>
                <Iconify icon={notif.icon} sx={{ mr: 2 }} />
                <div>
                  <Typography variant="body2">{notif.message}</Typography>
                  <Typography variant="caption" color="text.secondary">
                    {notif.time}
                  </Typography>
                </div>
              </MenuItem>
            ))}
          </Menu>
        </div>
        <div className="right-item ms-3">
          <div
            className="profile-container"
            ref={anchorRef}
            onClick={handleOpen}
          >
            <div className="profile-avatar">
              <Avatar
                variant="rounded"
                sx={{ width: 40, height: 40 }}
                src={
                  "https://img.freepik.com/free-photo/close-up-young-successful-man-smiling-camera-standing-casual-outfit-against-blue-background_1258-65479.jpg?ga=GA1.1.755892877.1726836900&semt=ais_incoming"
                }
              />
            </div>
            <div className="profile-info d-none d-md-flex">
              <span className="user-name">Mujahid Anwaar</span>
            </div>

            <span className="chevron-icon pointer ms-0">
              <i
                className={`ms-3 me-2 fa-solid ${
                  open ? "fa-chevron-up" : "fa-chevron-down"
                } `}
              ></i>
            </span>
          </div>
        </div>
      </div>
      {
        <ProfilePop
          name={"Mujahid Anwaar"}
          email={"tailor@gmail.com"}
          open={open}
          handleClose={handleClose}
          anchorEl={anchorRef.current}
        />
      }
    </div>
  );
}
