import { Icon } from "@iconify/react";
import { useState } from "react";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Collapse, ListItemButton } from "@mui/material";

// ----------------------------------------------------------------------

export default function CustomPopoverSectionItems(props) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { item, data, setOpen } = props;

  const handleClickDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div className="table-menu-more-option-dropdown">
      <ListItemButton
        key={item.label}
        onClick={(e) => {
          if (item.child_options) {
            handleClickDropdown();
          } else {
            e.preventDefault();
            setOpen(false);
            item.handleClick(data);
          }
        }}
        className="d-block"
      >
        {item.icon && (
          <Icon
            fontSize="18"
            style={{ color: `${item.color}` }}
            className="me-2"
            icon={item.icon}
          />
        )}
        <span>{item.label}</span>
        <span className="menu-dropdown-icon">
          {item.child_options &&
            (openDropdown ? <ExpandLess /> : <ExpandMore />)}
        </span>
      </ListItemButton>
      {item.child_options && item.child_options.length > 0 && (
        <Collapse in={openDropdown} timeout="auto" unmountOnExit>
          {item.child_options.map((child_option, index) => {
            return (
              <ListItemButton
                key={index}
                className="menus-child-items"
                onClick={(e) => {
                  e.preventDefault();
                  setOpen(false);
                  child_option.handleClick(data);
                }}
              >
                {child_option.icon && (
                  <Icon
                    fontSize="18"
                    style={{ color: "var(--portal-theme-primary)" }}
                    className="me-2"
                    icon={child_option.icon}
                  />
                )}
                <span>{child_option.label}</span>
              </ListItemButton>
            );
          })}
        </Collapse>
      )}
    </div>
  );
}
