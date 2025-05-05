import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { DashboardLayout, LoginLayout } from "../layouts";
import Login from "../pages/Login/Login";
import ProtectedRoute from "../components/ProtectedRoute";
import NotFound from "../pages/404/404";
import CustomerList from "../pages/Customer/CustomerList";
import { AddCustomer } from "../pages/Customer/AddCustomer";
import CustomerDetail from "../pages/Customer/CustomerDetail";

export default function Routers() {
  return (
    <Routes>
      <Route
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      >
        <Route path="/customer-list" element={<CustomerList />} />
        <Route path="/add-customer" element={<AddCustomer />} />
        <Route path="/edit-customer/:id" element={<AddCustomer />} />
        <Route path="/customer-detail/:id" element={<CustomerDetail />} />
      </Route>

      {/* Public routes */}
      <Route element={<LoginLayout />}>
        <Route path="/login" element={<Login />} />
      </Route>

      {/* Fallback to login */}
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="*" element={<Navigate to="/page-not-found" replace />} />
      <Route path="/page-not-found" element={<NotFound />} />
    </Routes>
  );
}
