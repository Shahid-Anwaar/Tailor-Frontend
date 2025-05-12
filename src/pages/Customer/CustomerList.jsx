import React, { useEffect, useState } from "react";
import Iconify from "../../components/Iconify";
import { useAdminContext } from "../../Hooks/AdminContext";
import {
  Button,
  Typography,
  Avatar,
  Tooltip,
  CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import CustomTable from "../../components/customTable/CustomTable";
import StatusChip from "../../theme/chip";
import DeleteConfirmation from "../../components/DeleteConfirmation";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Person3Icon from "@mui/icons-material/Person3";
import { del_customer_by_id, get_customers_list } from "../../DAL/customers/customer";
import { useSnackbar } from "notistack";
import moment from "moment/moment";
import { capitalize } from "lodash";

const CustomerList = () => {
  const { setnavbarTitle } = useAdminContext();
  const navigate = useNavigate();
  const [openDelModal, setOpenDelModal] = useState(false);
  const [userList, setUserList] = useState([]);
  const [selectedUser, setSelectedUser] = useState();
  const [loading, setLoading] = useState(true);

  const { enqueueSnackbar } = useSnackbar();

  const User_Table_Head = [
    {
      id: "index",
      label: "#",
      type: "number",
    },
    {
      id: "avatar",
      label: "Image",
      renderData: (row) => (
        <Avatar
          onClick={() => {
            navigate(`/customer-detail/${row._id}`)
          }}
          className="pointer"
          alt={row.name}
          src={row.image || "/default-avatar.png"}
          sx={{ width: 40, height: 40 }}
        />
      ),
    },
    {
      id: "name",
      label: "Customer Name",
    },
    {
      id: "contact",
      label: "Phone Number",
    },
    {
      id: "address",
      label: "Address",
    },
    {
      id: "col_time",
      label: "Collected Time",
      renderData: (row) => (
        <div>{moment(row?.col_time).format('hh:mm A - DD/MM/YYYY')}</div>
      ),
    },
    {
      id: "last_date",
      label: "Last Date",
      renderData: (row) => (
        <div>{moment(row?.last_date).format('hh:mm A - DD/MM/YYYY')}</div>
      ),
    },
    {
      id: "items",
      label: "Items",
    },
    {
      id: "status",
      label: "Status",
      renderData: (row) => (
        <StatusChip status={row.status} type="activeInactive" />
      ),
    },
    {
      id: "kameez",
      label: "قمیض",
    },
    {
      id: "bazoo",
      label: "بازو",
    },
    {
      id: "teera",
      label: "تیرا",
    },
    {
      id: "gla",
      label: "گلہ ",
    },
    {
      id: "chati",
      label: "چھاتی",
    },
    {
      id: "kmr",
      label: "کمر",
    },
    {
      id: "geera",
      label: "گھیرا",
    },
    {
      id: "shalwar",
      label: "شلوار",
    },
    {
      id: "pancha",
      label: "پانچہ",
    },
    {
      id: "front",
      label: "فرنٹ",
    },
    {
      id: "side",
      label: "سائیڈ",
    },
    {
      id: "zip",
      label: "زپ",
    },
    {
      id: "colr",
      label: "کالر",
      renderData: (row) => (
        <div>{row.colr ? "✔️" : "❌"}</div>
      ),
    },
    {
      id: "ban",
      label: "بین",
      renderData: (row) => (
        <div>{row.ban ? "✔️" : "❌"}</div>
      ),
    },
    {
      id: "kaf",
      label: "کف",
      renderData: (row) => (
        <div>{row.kaf ? "✔️" : "❌"}</div>
      ),
    },
    {
      id: "pleat",
      label: "پلیٹ",
      renderData: (row) => (
        <div>{row.pleat ? "✔️" : "❌"}</div>
      ),
    },
    {
      id: "action",
      label: "Action",
      renderData: (row) => (
        <>
          <Tooltip title="Edit" placement="top">
            <EditIcon
              onClick={() => {
                navigate(`/edit-customer/${row._id}`);
              }}
              style={{ fill: "#fff", marginRight: "10px", cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Delete" placement="top">
            <DeleteIcon
              onClick={() => {
                setSelectedUser(row);
                setOpenDelModal(true);
              }}
              style={{
                fill: "#ff0000",
                marginRight: "10px",
                cursor: "pointer",
              }}
            />
          </Tooltip>
          <Tooltip title="View Profile" placement="top">
            <Person3Icon
              onClick={() => {
                navigate(`/customer-detail/${row._id}`);
              }}
              style={{ fill: "#fff", marginRight: "10px", cursor: "pointer" }}
            />
          </Tooltip>
        </>
      ),
    },
  ];

  function handleAgreeDelete() {
    deleteCustomerById(selectedUser._id);
    setOpenDelModal(false);
  }

  const User_Table_Menu_Options = [
    // {
    //   label: "Edit",
    //   color: "#6d00fc",
    //   icon: "ant-design:edit",
    //   handleClick: () => { },
    // },
    // {
    //   label: "Delete",
    //   icon: "ant-design:delete-twotone",
    //   color: "red",
    //   handleClick: (row) => {
    //     navigate(`/user-management/edit-user/${row.id}`);
    //   },
    // },
  ];

  useEffect(() => {
    setnavbarTitle("Customer Management");
  }, []);

  async function deleteCustomerById(id) {
    const response = await del_customer_by_id(id);
    console.log(response, "API response.......");
    if (response.status == 200 || response.status == 201) {
      setUserList((prevList) => {
        return prevList.filter((user) => {
          return user._id !== selectedUser._id;
        })
      })
      enqueueSnackbar("Customer Deleted Successfully", { variant: "success" });
    } else {
      enqueueSnackbar("Cannot get the List of Customers", { variant: "error" });
    }
  }
  async function getCustomersList() {
    const response = await get_customers_list();
    console.log(response, "API response.......");
    if (response.status == 200 || response.status == 201) {
      setUserList(response?.data);
    } else {
      enqueueSnackbar("Cannot get the List of Customers", { variant: "error" });
    }
    setLoading(false);
  }

  useEffect(() => {
    getCustomersList();
  }, []);

  return (
    <div className="mt-4">
      <div className="my-4 p-2" >
        <div className="between-alinging">
          <div className="py-2">
            <Typography variant="h6" fontWeight="600" component="h2" gutterBottom>
              Customers List
            </Typography>
          </div>
          <Button
            variant="contained"
            // startIcon={<Iconify icon="eva:plus-fill" />}
            onClick={() => {
              navigate(`/add-customer`);
            }}
          >
          Add Customer
          </Button>
        </div>
        {loading ? <div className="customer-list-loader d-flex justify-content-center align-items-center">
          <CircularProgress />
        </div> :
          <CustomTable
            data={userList}
            TABLE_HEAD={User_Table_Head}
            MENU_OPTIONS={User_Table_Menu_Options}
            // custom_search={{
            //   searchText: searchText,
            //   setSearchText: setSearchText,
            //   handleSubmit: searchFunction,
            // }}
            // custom_pagination={{
            //   total_count: totalCount,
            //   rows_per_page: rowsPerPage,
            //   page: page,
            //   handleChangePage: handleChangePage,
            //   onRowsPerPageChange: handleChangeRowsPerPage,
            // }}
            // pageCount={pageCount}
            // totalPages={totalPages}
            pagePagination={false}
          />}

      </div>
      <DeleteConfirmation
        open={openDelModal}
        setOpen={setOpenDelModal}
        handleAgree={handleAgreeDelete}
        title={`Are you sure you want to delete the Customer "${selectedUser?.name}"?`}
        Btn_Title="Delete"
        handleClose={() => { setOpenDelModal(false) }}
      />
    </div>
  );
};

export default CustomerList;
