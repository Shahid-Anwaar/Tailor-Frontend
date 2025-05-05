import React from "react";
import Iconify from "../../components/Iconify";

const getIcon = (name) => <Iconify icon={name} width={20} height={20} />;

export const SideBarConfig = () => {
  let sidebarMenus = [];

  // sidebarMenus.push({
  //   title: "Home",
  //   path: "/home",
  //   icon: getIcon("eva:home-fill"),
  // });
  sidebarMenus.push({
    title: "Customer Management",
    path: "/customer-list",
    icon: getIcon("eva:people-fill"),
  });

  // let payment_child_array = [];

  // payment_child_array.push({
  //   title: "Google",
  //   path: "/ad-accounts",
  //   icon: getIcon("mdi:bank-transfer"),
  // });

  // sidebarMenus.push({
  //   title: "Ad Account",
  //   icon: getIcon("eva:monitor-fill"),
  //   child_options: payment_child_array,
  // });

  // sidebarMenus.push({
  //   title: "Settings",
  //   path: "/settings",
  //   icon: getIcon("eva:settings-fill"),
  // });


  return sidebarMenus;
};
