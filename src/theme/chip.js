import React from "react";
import Chip from "@mui/material/Chip";

const StatusChip = ({ status, type, absent, discounted_minutes }) => {
  const statusLabels = {
    0: "Open",
    1: "Completed",
    2: "Processing",
  };

  const booleanLabels = {
    paidORnot: {
      true: "Paid",
      false: "UnPaid",
    },
    activeInactive: {
      true: "Active",
      false: "Inactive",
    },
    presentAbsent: {
      true: "Absent",
      false: "Present",
    },
    YearlyLeaves: {
      true: "Yes",
      false: "No",
    },
  };

  const getBooleanLabel = (status) => {
    if (typeof discounted_minutes === "boolean") {
      return discounted_minutes
        ? "Discount Minutes Taken"
        : "Discount Minutes Not Taken";
    }
    if (typeof absent === "boolean") {
      return absent ? "Absent" : "Present";
    }

    if (type && booleanLabels[type]) {
      return booleanLabels[type][status];
    }

    return status;
  };

  const getStyles = () => {
    if (typeof absent === "boolean") {
      return absent
        ? {
            border: "1px solid #d32f2ff2",
            color: "#d32f2ff2",
            backgroundColor: "transparent",
          }
        : {
            border: "1px solid #4CAF50",
            color: "#4CAF50",
            backgroundColor: "transparent",
          };
    }
    if (typeof discounted_minutes === "boolean") {
      return discounted_minutes
        ? {
            border: "1px solid #4CAF50",
            color: "#4CAF50",
            backgroundColor: "transparent",
          }
        : {
            border: "1px solid #d32f2ff2",
            color: "#d32f2ff2",
            backgroundColor: "transparent",
          };
    }

    switch (status) {
      case "Investigation Started":
        return {
          border: "1px solid #FFC107",
          color: "#FFC107",
          backgroundColor: "transparent",
        };
      case "Findings Submitted":
        return {
          border: "1px solid #d32f2ff2",
          color: "#d32f2ff2",
          backgroundColor: "transparent",
        };
      case "Solved/Closed":
        return {
          border: "1px solid #28a745",
          color: "#28a745",
          backgroundColor: "transparent",
        };
      case "Completed":
      case "Submitted":
      case "Succeeded":
        return {
          border: "1px solid #28a745",
          color: "#28a745",
          backgroundColor: "transparent",
        };
      case "Investigator Assigned":
        return {
          border: "1px solid #000000",
          color: "#5792C9",
          backgroundColor: "transparent",
        };
      case "Awaiting Approval":
        return {
          border: "1px solid #FDA006",
          color: "#FDA006",
          backgroundColor: "transparent",
        };
      case "Closed":
      case "Assigned":
      case "Pending":
      case "Medium":
        return {
          border: "1px solid #FFC107",
          color: "#FFC107",
          backgroundColor: "transparent",
        };
      case "High":
        return {
          border: "1px solid #d32f2ff2",
          color: "#d32f2ff2",
          backgroundColor: "transparent",
        };
      case "Low":
      case "Started":
        return {
          border: "1px solid #5792C9",
          color: "#5792C9",
          backgroundColor: "transparent",
        };
      case "Paid":
        return {
          border: "1px solid #4CAF50",
          color: "#4CAF50",
          backgroundColor: "transparent",
        };
      case "In Progress":
        return {
          border: "1px solid #FDA006",
          color: "#FDA006",
          backgroundColor: "transparent",
        };
      case "Completed":
        return {
          border: "1px solid #28a745",
          color: "#28a745",
          backgroundColor: "transparent",
        };
      case "Assigned":
        return {
          border: "1px solid #3DA5F4",
          color: "#3DA5F4",
          backgroundColor: "transparent",
        };
      case "Pending":
        return {
          border: "1px solid #FFC107",
          color: "#FFC107",
          backgroundColor: "transparent",
        };
      case "Free":
        return {
          border: "1px solid #5792C9",
          color: "#5792C9",
          backgroundColor: "transparent",
        };
      case true:
        return {
          border: "1px solid #4CAF50",
          color: "#4CAF50",
          backgroundColor: "transparent",
        };
      case false:
        return {
          border: "1px solid #d32f2ff2",
          color: "#d32f2ff2",
          backgroundColor: "transparent",
        };
      default:
        return {
          border: "1px solid transparent",
          color: "black",
          backgroundColor: "transparent",
        };
    }
  };

  const styles = getStyles();

  return (
    <span>
      <Chip
        variant="outlined"
        size="medium"
        className="Styled_Chip"
        label={
          statusLabels[status]
            ? statusLabels[status]
            : typeof status === "string"
            ? status
                .split("_")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : getBooleanLabel(status)
        }
        sx={{
          "& .MuiChip-label": {
            ...styles,
          },
        }}
      />
    </span>
  );
};

export default StatusChip;
