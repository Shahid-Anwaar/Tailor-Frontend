import React, { useEffect, useState } from "react";
import { Card, Chip, Tooltip, Avatar } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";
import { CircularProgress } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MUICustomTabs from "../../components/MUICustomTabs";
import BasicBreadcrumbs from "../../components/GeneralComponents/BreadCrumbs";
import { useAdminContext } from "../../Hooks/AdminContext";
import moment from "moment";
import usersData from "./data";
import StatusChip from "../../theme/chip";
import { get_single_customer_detail } from "../../DAL/customers/customer";

const useStyles = makeStyles(() => ({
    loading: {
        marginLeft: "50%",
        marginTop: "20%",
    },
}));

const CustomerDetail = () => {
    const params = useParams();
    const { setnavbarTitle } = useAdminContext();
    const member_id = useParams();
    const classes = useStyles();
    const { enqueueSnackbar } = useSnackbar();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(true);
    const [tabValue, setTabValue] = useState(0);
    const [user, setUser] = useState();

    const handleChangeTab = (event, newValue) => {
        setTabValue(newValue);
    };

    const BreadCrumbsList = [
        {
            title: "Customer Management",
            navigation: "/customer-list",
            active: false,
        },
        {
            title: `User Profile`,
            navigation: "",
            status: "Active",
        },
    ];

    async function getSingleCustomerDetail(id) {
        const response = await get_single_customer_detail(id);
        console.log(response, "API response.......");
        if (response.status == 200 || response.status == 201) {
            setUser(response?.data);
        } else {
            enqueueSnackbar("Cannot get the Detail of Customer", { variant: "error" });
        }
        setIsLoading(false);
    }

    useEffect(() => {
        if (params.id) {
            getSingleCustomerDetail(params.id);
        }
    }, [params.id]);

    if (isLoading === true) {
        return <CircularProgress className={classes.loading} color="primary" />;
    }

    return (
        <div className="container-fluid">
            <div className="row ">
                <div className="col-12 mb-3">
                    <BasicBreadcrumbs items={BreadCrumbsList} />
                </div>
                <div className="col-12 mt-3 user-profile-detail">
                    <Card
                        style={{
                            border: "2px solid #bebebe21",
                        }}
                    >
                        <div className="row mb-4 mx-3 mt-3 justify-content-center align-items-center user-profile-data">
                            <div className="col-12 col-md-7 d-flex align-items-center">
                                {/* <img
                                    className="rounded-circle"
                                    height="75px"
                                    width="75px"
                                    style={{
                                        objectFit: "cover",
                                    }}
                                    src=""
                                /> */}
                                <Avatar
                                    //   className="pointer"
                                    alt={user?.name}
                                    src={user?.image || "/default-avatar.png"}
                                    sx={{ width: 75, height: 75 }}
                                />
                                <div className="ms-4">
                                    <h2>{user?.name}</h2>
                                    <div className="text-muted">{user?.address}</div>
                                </div>
                            </div>
                            <div className="col-12 col-md-5 d-flex justify-content-end"></div>
                        </div>
                        <div className="row mx-3 mt-3 mb-5 user-profile-data">
                            <div className="col-5 col-md-6 col-lg-3 mb-3">
                                <h6>Phone Number:</h6>
                            </div>
                            <div className="col-7 col-md-6 col-lg-3 text-muted">
                                {user?.contact}
                            </div>
                            <div className="col-5 col-md-6 col-lg-3 mb-3">
                                <h6>Collected Time:</h6>
                            </div>
                            <div className="col-7 col-md-6 col-lg-3 text-muted">
                                {moment(user?.col_time).format('hh:mm A - DD/MM/YYYY')}
                            </div>
                            <div className="col-5 col-md-6 col-lg-3 mb-3">
                                <h6>Last Date:</h6>
                            </div>
                            <div className="col-7 col-md-6 col-lg-3 text-muted">{moment(user?.last_date).format('hh:mm A - DD/MM/YYYY')}</div>
                            <div className="col-5 col-md-6 col-lg-3 mb-3">
                                <h6>Items:</h6>
                            </div>
                            <div className="col-7 col-md-6 col-lg-3 text-muted">{user?.items}</div>
                            <div className="col-5 col-md-6 col-lg-3 mb-3">
                                <h6>Status:</h6>
                            </div>
                            <div className="col-7 col-md-6 col-lg-3 text-muted"><StatusChip status={user?.status} type="activeInactive" /></div>
                            <div className="col-12 mt-2">
                                <div className="row dress-measurements">
                                    <div className="col-3 col-lg-2 mb-3"><h6>قمیض</h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.kameez}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>بازو </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.bazoo}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>تیرا </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.teera}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>گلہ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.gla}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>چھاتی </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.chati}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>کمر </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.kmr}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>گھیرا </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.geera}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>شلوار</h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.shalwar}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>پانچہ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.pancha}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>فرنٹ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.front}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>سائیڈ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.side}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>زپ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.zip}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>کالر </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.colr ? "✔️" : "❌"}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>بین </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.ban ? "✔️" : "❌"}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>کف </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.kaf ? "✔️" : "❌"}</div>

                                    <div className="col-3 col-lg-2 mb-3"><h6>پلیٹ </h6></div>
                                    <div className="col-3 col-lg-2 text-muted">{user?.pleat ? "✔️" : "❌"}</div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default CustomerDetail;
