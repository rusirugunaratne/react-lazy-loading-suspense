import React, { lazy, Suspense } from "react";
import useAuth from "../hooks/useAuth";

const AdminDashboard = lazy(() => import("../components/AdminDashboard"));

export const AdminPage = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <h1>Admin Page</h1>
      {isAuthenticated && (
        <Suspense fallback={<div>Loading...</div>}>
          <AdminDashboard />
        </Suspense>
      )}
    </>
  );
};
