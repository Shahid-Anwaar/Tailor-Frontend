import { IconButton } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { LightTooltip } from "../../utils/constant";

const BackButton = ({ onClick, label = "Back", ToolTop_Title }) => {
  return (
    <div className="d-flex align-items-center my-3">
      <LightTooltip title={ToolTop_Title}>
        <IconButton
          onClick={onClick}
          style={{ background: "#f0f0f0", borderRadius: "8px" }}
        >
          <ArrowBack style={{ color: "#000000" }} />
        </IconButton>
      </LightTooltip>
      <span
        className="ms-2 fw-bold"
        style={{ fontSize: "16px", cursor: "pointer" }}
        onClick={onClick}
      >
        {label}
      </span>
    </div>
  );
};

export default BackButton;
