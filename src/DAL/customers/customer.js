import { invokeApi } from "../invokeApi";

export const get_customers_list = async () => {
    const requestObj = {
        path: `api/get_customers_list`,
        method: "GET",
        // headers: {
        //     "x-sh-auth": localStorage.getItem("token"),
        // },
    };
    return invokeApi(requestObj);
};

export const edit_customer = async (id, data) => {
    const requestObj = {
        path: `api/edit-customer/${id}`,
        method: "PUT",
        // headers: {
        //     "x-sh-auth": localStorage.getItem("token"),
        // },
        postData: data,
    };
    return invokeApi(requestObj);
};


export const add_customer = async (data) => {
    const requestObj = {
        path: `api/add-customers`,
        method: "POST",
        // headers: {
        //     "x-sh-auth": localStorage.getItem("token"),
        // },
        postData: data,
    };
    return invokeApi(requestObj);
};

export const get_single_customer_detail = async (id) => {
    console.log(id, "new id");
    const requestObj = {
        path: `api/get_single_customer_detail/${id}`,
        method: "GET",
        // headers: {
        //     "x-sh-auth": localStorage.getItem("token"),
        // },
    };
    return invokeApi(requestObj);
};


export const del_customer_by_id = async (id) => {
    console.log(id, "new id");
    const requestObj = {
        path: `api/del_customer/${id}`,
        method: "DELETE",
        // headers: {
        //     "x-sh-auth": localStorage.getItem("token"),
        // },
    };
    return invokeApi(requestObj);
};