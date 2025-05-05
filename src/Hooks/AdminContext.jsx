import React, { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const useAdminContext = () => useContext(AdminContext);
export function ContextAdmin({ children }) {
  const [navbarTitle, setnavbarTitle] = useState("");

  const collection = {
    navbarTitle,
    setnavbarTitle,
  };

  return (
    <AdminContext.Provider value={collection}>{children}</AdminContext.Provider>
  );
}
