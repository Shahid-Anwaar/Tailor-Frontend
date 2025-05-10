import React, { useEffect, useState } from "react";
import {
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControlLabel,
  Checkbox,
  styled,
  CircularProgress,
} from "@mui/material";
import CustomTextFieldUrdu from "../../components/CustomTextFieldUrdu/CustomTextFieldUrdu";
import { useSnackbar } from "notistack";
import PhoneInput from "react-phone-number-validation";
import FormInput from "../../components/GeneralComponents/FormInput";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAdminContext } from "../../Hooks/AdminContext";
import BasicBreadcrumbs from "../../components/GeneralComponents/BreadCrumbs";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useNavigate, useParams } from "react-router-dom";
import GooglePlacesAutocomplete from "../../components/AutoCompleteAddress";
import { add_customer, edit_customer, get_single_customer_detail } from "../../DAL/customers/customer";
import moment from "moment";



export const AddCustomer = () => {
  const [loading, setLoading] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState("");
  const { setnavbarTitle } = useAdminContext();

  const handlePhoneChange = (value, country) => {
    console.log(value, country, );
    
    setPhoneNumber(value);
  };
  const [file, setProfileImage] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const [localInput, setLocalInput] = useState({
    name: "",
    contact: "",
    address: "",
    col_time: "",
    last_date: "2099-01-01T12:00",
    items: "",
    kameez: "",
    bazoo: "",
    teera: "",
    gla: "",
    chati: "",
    kmr: "",
    geera: "",
    shalwar: "",
    pancha: "",
    front: "",
    side: "",
    zip: "",
    status: "Pending",
    colr: false,
    ban: false,
    kaf: false,
    pleat: false,
  });


  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (e, name) => {
    setLocalInput({ ...localInput, [name]: e.target.value });
  };

  const handleCheckboxChange = (e, name) => {
    const checked = e.target.checked;
    setLocalInput((prev) => ({ ...prev, [name]: checked }));
  };
  const [selectedAddress, setSelectedAddress] = useState(null);

  const fileChangedHandler = (e) => {
    setProfileImage(URL.createObjectURL(e.target.files[0]));
    setLocalInput({
      ...localInput,
      ["image"]: e.target.files[0],
    });
  };

  const measurements = [
    { label: "قمیض", id: "kameez" },
    { label: "بازو", id: "bazoo" },
    { label: "تیرا", id: "teera" },
    { label: "گلہ", id: "gla" },
    { label: "چھاتی", id: "chati" },
    { label: "کمر", id: "kmr" },
    { label: "گھیرا", id: "geera" },
    { label: "شلوار", id: "shalwar" },
    { label: "پانچہ", id: "pancha" },
    { label: "فرنٹ", id: "front" },
    { label: "سائیڈ", id: "side" },
    { label: "زپ", id: "zip" },
  ];

  const checkboxesElements = [
    { label: "کالر ", id: "colr" },
    { label: "بین", id: "ban" },
    { label: "کف", id: "kaf" },
    { label: "پلیٹ", id: "pleat" }
  ];

  async function handleAddCustomer(data) {
    const response = await add_customer(data);
    if (response.status == 200 || response.status == 201) {
      enqueueSnackbar("SuccessFully Added", { variant: "success" });
      navigate("/customer-list");
    } else {
      enqueueSnackbar("Not Added", { variant: "error" });
    }
  }


  async function handleEditCustomer(customerId, data) {
    const response = await edit_customer(customerId, data);
    if (response.status == 200 || response.status == 201) {
      enqueueSnackbar("SuccessFully Edited", { variant: "success" });
      navigate("/customer-list");
    } else {
      enqueueSnackbar("Not Edited", { variant: "error" });
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(selectedAddress, phoneNumber, "hihihihih");

    if (selectedAddress?.formatted_address) {
      localInput.address = selectedAddress?.formatted_address || "";
    } else {
      localInput.address = selectedAddress || "";
    }

    localInput.contact = phoneNumber;
    console.log("Data before Calling Api", localInput);

    if (params.id) {
      handleEditCustomer(params.id, localInput);
    } else {
      localInput.col_time = new Date().toISOString();
      handleAddCustomer(localInput);
    }
  };

  const BreadCrumbsList = [
    {
      title: "Customers List",
      navigation: "/customer-list",
      active: false,
    },
    {
      title: `${params.id ? "Edit" : "Add"} Customer`,
      navigation: "",
      status: "Active",
    },
  ];

  async function getSingleCustomerDetail(id) {
    setLoading(true);
    const response = await get_single_customer_detail(id);
    console.log(response, "API response.......");
    if (response.status == 200 || response.status == 201) {
      const formattedDate = response?.data?.last_date
        ? new Date(response?.data.last_date).toISOString().slice(0, 16)
        : '';

      let data = { ...response?.data, last_date: formattedDate };
      setLocalInput(data);
      setSelectedAddress(data.address);
      setTimeout(() => {
        setPhoneNumber(data.contact);
      }, 10);
    } else {
      enqueueSnackbar("Cannot get the Data of single Customers", { variant: "error" });
    }
    setLoading(false);
  }

  useEffect(() => {
    if (params.id) {
      getSingleCustomerDetail(params?.id);
    } else {
      setLoading(false);
    }
  }, [params?.id]);

  useEffect(() => {
    setnavbarTitle("Customer Management");
  }, []);

  return (
    <div className="container-fluid mt-4">
      <form onSubmit={handleSubmit}>
        <div className="row g-0">
          <div className="col-12 mb-3">
            <BasicBreadcrumbs items={BreadCrumbsList} />
          </div>

          {!loading ? <>
            <div className="row g-0 p-1">
              <div className="col-md-6 mt-2">
                <TextField
                  label="Name"
                  fullWidth
                  value={localInput.name}
                  onChange={(e) => handleChange(e, "name")}
                  required
                />
              </div>
              <div className="col-md-6 mt-2">
                <PhoneInput
                  enableSearch={true}
                  autoSelectCountry={false}
                  country="pk"
                  value={phoneNumber}
                  setValue={setPhoneNumber}
                  onChange={handlePhoneChange}
                />
              </div>
              <div className="col-md-6 mt-3">
                <GooglePlacesAutocomplete
                  setSelectedLocation={setSelectedAddress}
                  label="Street Address"
                  required={true}
                  defaultValue={selectedAddress}
                />
              </div>
              {/* <div className="col-md-6 mt-2">
              <TextField
                label="Collection Time"
                fullWidth
                value={localInput.col_time}
                onChange={(e) => handleChange(e, "col_time")}
              />
            </div> */}
              <div className="col-md-6 mt-2">
                <TextField
                  label="Last Date"
                  type="datetime-local"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={localInput.last_date}
                  onChange={(e) => handleChange(e, "last_date")}
                />
              </div>
              <div className="col-md-6 mt-2">
                <TextField
                  label="Items"
                  type="number"
                  fullWidth
                  value={localInput.items}
                  onChange={(e) => handleChange(e, "items")}
                />
              </div>
              <div className="col-md-6 mt-2">
                <FormControl fullWidth required>
                  <InputLabel>Status</InputLabel>
                  <Select
                    value={localInput?.status}
                    onChange={(e) => handleChange(e, "status")}
                    label="Status"
                  >
                    <MenuItem value="Pending">Pending</MenuItem>
                    <MenuItem value="Started">Started</MenuItem>
                    <MenuItem value="Completed">Completed</MenuItem>
                  </Select>
                </FormControl>
              </div>
              {measurements.map((item, index) => (
                <div key={item.id} className={`${index % 2 == 0 ? "pe-1": "ps-1"} col-lg-3 col-md-4 col-6 mt-2`}>
                  <TextField
                    label={item.label}
                    type="number"
                    min={0}
                    fullWidth
                    value={localInput[item.id]}
                    onChange={(e) => handleChange(e, item.id)}
                    required
                  />
                </div>
              ))}
              {checkboxesElements.map((option) => (
                <div key={option.id} className="col-md-3 col-6 mt-2">
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={localInput[option.id]}
                        onChange={(e) => handleCheckboxChange(e, option.id)}
                      />
                    }
                    label={option.label}
                  />
                </div>
              ))}
              <div className="col-md-12 mt-3 text-end">
                <Button variant="contained" color="primary" type="submit">
                  {params.id ? "Update" : "Submit"}
                </Button>
              </div>
            </div>
          </>
            :
            <div className="col-12 d-flex justify-content-center align-items-center" style={{height: "500px"}}>
              <CircularProgress size={24} color="error"/>
            </div>
          }
        </div>
      </form>
    </div>
  );
};
