import moment from "moment";
import { Icon } from "@iconify/react";
import { styled } from "@mui/styles";
import { Tooltip, tooltipClasses } from "@mui/material";



export const is_small_medium_screen = () => {
  if (window.innerWidth < 767) {
    return true;
  } else {
    return false;
  }
};

export const validateInputs = (
  inputs,
  stringFields,
  arrayFields,
  objectFields,
  BoleanFields,
  NumberFields,
  optionalFields = [] // Optional fields that can be empty
) => {
  const errors = {};

  const validateNestedObject = (obj, parentKey = "") => {
    // Object.entries(obj).forEach(([key, value]) => {
    //   const fullKey = parentKey ? `${parentKey}.${key}` : key;
    //   // Skip validation for optional fields
    //   if (optionalFields.includes(fullKey)) {
    //     return;
    //   }
    //   if (
    //     value === null ||
    //     value === undefined ||
    //     value === "" ||
    //     value === "Invalid date"
    //   ) {
    //     errors[fullKey] = `${fullKey} is required`;
    //   } else if (typeof value === "object" && !Array.isArray(value)) {
    //     validateNestedObject(value, fullKey); // Recursively validate nested objects
    //   }
    // });
  };

  BoleanFields?.forEach((field) => {
    if (typeof inputs[field] !== "boolean") {
      errors[field] = `${field} must be a boolean`;
    }
  });

  NumberFields?.forEach((field) => {
    if (isNaN(inputs[field])) {
      errors[field] = `${field} must be a number`;
    }
  });

  stringFields?.forEach((field) => {
    if (
      typeof inputs[field] !== "string" ||
      inputs[field].trim() === "" ||
      inputs[field].trim() === "Invalid date"
    ) {
      errors[field] = `${field} is required`;
    }
  });

  arrayFields?.forEach((field) => {
    if (!Array.isArray(inputs[field]) || inputs[field].length === 0) {
      errors[field] = `${field} cannot be empty`;
    }
  });

  objectFields?.forEach((field) => {
    if (
      typeof inputs[field] !== "object" ||
      inputs[field] === null ||
      Object.keys(inputs[field]).length === 0 ||
      Array.isArray(inputs[field])
    ) {
      errors[field] = `${field} must be an object`;
      return;
    }
    const nestedObject = inputs[field];
    if (
      !nestedObject ||
      typeof nestedObject !== "object" ||
      Object.keys(nestedObject).length === 0
    ) {
      if (!optionalFields.includes(field)) {
        errors[field] = `${field} cannot be empty`;
      }
    } else {
      validateNestedObject(nestedObject, field); // Validate nested object keys
    }
  });

  return errors;
};

export const formatString = (str) => {
  return str
    .split("_") // Split the string by underscores
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
    .join(" "); // Join the words with spaces
};

export const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "#fff",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));
