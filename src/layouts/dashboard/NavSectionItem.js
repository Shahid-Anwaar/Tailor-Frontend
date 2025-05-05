import React, { useEffect, useState } from "react";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import {
  matchPath,
  NavLink as RouterLink,
  useLocation,
} from "react-router-dom";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { _logout } from "../../DAL/Login/Auth";

export default function NavSectionItem({ data, searchInput }) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [itemData, setItemData] = useState({});

  const handleClickDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  const handleClickChildDropdown = (index) => {
    setItemData((old) => {
      let options = old.child_options.map((child, c_index) => {
        if (c_index === index) {
          child.is_open = !Boolean(child.is_open);
        }
        return child;
      });
      return { ...old, child_options: options };
    });
  };

  const match = ({ path, matches }) => {
    if (matches) {
      let is_active = false;
      matches.forEach((match_path) => {
        const match = match_path
          ? !!matchPath({ path: match_path, end: false }, pathname)
          : false;

        if (match) {
          is_active = true;
        }
      });
      return is_active;
    }
    return path ? !!matchPath({ path, end: false }, pathname) : false;
  };

  const open_dropdown = (match) => {
    const is_matched = window.location.pathname.includes(match);
    if (is_matched) {
      setOpenDropdown(true);
    }
  };

  const HandleLogoutClicked = () => {
    setOpen(true);
  };

  useEffect(() => {
    if (searchInput) {
      setOpenDropdown(true);
    } else {
      setOpenDropdown(false);
    }
    //On reload dropdown should not close
    let ch_options = data.child_options?.map((child_option) => {
      if (child_option?.child_options?.length > 0) {
        // eslint-disable-next-line
        child_option.child_options.map((c_option) => {
          if (c_option.matches) {
            // eslint-disable-next-line
            c_option.matches.map((match) => {
              if (match) {
                const is_matched = window.location.pathname.includes(match);
                if (is_matched || searchInput) {
                  setOpenDropdown(true);
                  child_option.is_open = true;
                }
              }
            });
          }
          if (c_option.path) {
            const is_matched = window.location.pathname.includes(c_option.path);
            if (is_matched || searchInput) {
              setOpenDropdown(true);
              child_option.is_open = true;
            }
          }
        });
      } else {
        if (child_option.matches) {
          // eslint-disable-next-line
          child_option.matches.map((match) => {
            open_dropdown(match);
          });
        }
        open_dropdown(child_option.path);
      }
      return child_option;
    });

    setItemData({ ...data, child_options: ch_options });
    // eslint-disable-next-line
  }, [searchInput]);

  return (
    <>
      <ListItemButton
        component={data.path ? RouterLink : ""}
        to={data.path ? data.path : ""}
        onClick={() => {
          if (data.title === "Logout") {
            HandleLogoutClicked();
          } else if (data.on_click) {
            data.on_click();
          } else {
            handleClickDropdown();
          }
        }}
        className={
          match({ path: data.path, matches: data.matches })
            ? "menuActive menus-list"
            : "menus-list"
        }
      >
        <div className="sidebar-icons">{data.icon}</div>
        <ListItemText className="sidebar-text" primary={data.title} />
        {data.child_options &&
          (openDropdown ? (
            <ExpandLess
              style={{
                marginLeft: "auto",
              }}
            />
          ) : (
            <ExpandMore />
          ))}
      </ListItemButton>
      {itemData.child_options && (
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {itemData.child_options.map((child_option, child_index) => {
              return (
                <>
                  <ListItemButton
                    component={child_option.path ? RouterLink : ""}
                    to={child_option.path ? child_option.path : ""}
                    onClick={() => {
                      child_option.on_click
                        ? child_option.on_click()
                        : handleClickChildDropdown(child_index);
                    }}
                    className={
                      match({
                        path: child_option.path,
                        matches: child_option.matches,
                      })
                        ? "menuActive menus-list"
                        : "menus-list child-menus-list"
                    }
                    key={child_index}
                  >
                    <div className="d-flex align-items-center w-100 ">
                      <div className="child_sidebar-icons">
                        {child_option.icon}
                      </div>
                      <ListItemText primary={child_option.title} />
                      {child_option.child_options &&
                        (child_option.is_open ? (
                          <ExpandLess
                            style={{
                              marginLeft: "auto",
                            }}
                          />
                        ) : (
                          <ExpandMore />
                        ))}
                    </div>
                  </ListItemButton>
                  <Collapse
                    in={child_option.is_open}
                    timeout="auto"
                    unmountOnExit
                  >
                    <List component="div" disablePadding>
                      {child_option?.child_options?.length > 0 &&
                        child_option.child_options.map(
                          (child_option1, child_index1) => {
                            return (
                              <ListItemButton
                                component={child_option1.path ? RouterLink : ""}
                                to={
                                  child_option1.path ? child_option1.path : ""
                                }
                                className={
                                  match({
                                    path: child_option1.path,
                                    matches: child_option1.matches,
                                  })
                                    ? "menuActive menus-list"
                                    : "menus-list child-menus-list"
                                }
                                key={child_index1}
                              >
                                <div className="child_dot d-flex align-items-center ms-3">
                                  <div className="child_sidebar-icons">
                                    {child_option1.icon}
                                  </div>
                                  <ListItemText primary={child_option1.title} />
                                </div>
                              </ListItemButton>
                            );
                          }
                        )}
                    </List>
                  </Collapse>
                </>
              );
            })}
          </List>
        </Collapse>
      )}
    </>
  );
}
