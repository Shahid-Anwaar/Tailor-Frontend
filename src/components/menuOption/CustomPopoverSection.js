import { useRef, useState } from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import MenuPopover from "./MenuPopover";
import CustomPopoverSectionItems from "./CustomPopoverSectionItems";

export default function CustomPopoverSection(props) {
  const anchorRef = useRef(null);
  const { menu, data } = props;

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="pointer table-menu-more-option">
      <MoreVertIcon ref={anchorRef} onClick={handleOpen} />

      <MenuPopover
        className="custom-popover"
        open={open}
        onClose={handleClose}
        anchorEl={anchorRef.current}
        sx={{ marginLeft: 1.8, maxHeight: 300 }}
      >
        {menu.map((option, index) => (
          <CustomPopoverSectionItems
            key={index}
            item={option}
            data={data}
            setOpen={setOpen}
          />
        ))}
      </MenuPopover>
    </div>
  );
}
