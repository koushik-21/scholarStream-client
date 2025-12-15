import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Component } from "react";
import ScholarShipDetails from "../pages/ScholarshipDetails/ScholarShipDetails";
import Payment from "../pages/Payment/Payment";
import NotFound from "../pages/404Page/NotFound";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";
import UserProfile from "../pages/UserProfile/UserProfile";
import PrivateRoute from "./PrivateRoute";
import AdminPanel from "../pages/AdminPanel/AdminPanel";
import PaymentSuccess from "../pages/Payment/PaymentSuccess";
import PaymentFailed from "../pages/Payment/PaymentFailed";
import StudentPanel from "../pages/StudentPanel/StudentPanel";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    errorElement: <NotFound></NotFound>,
    children: [
      { index: true, Component: Home },
      {
        path: "/allScholarships",
        loader: async ({ request }) => {
          const url = new URL(request.url);

          const page = url.searchParams.get("page") || 1;
          const search = url.searchParams.get("search") || "";
          const category = url.searchParams.get("category") || "";
          const country = url.searchParams.get("country") || "";
          const sort = url.searchParams.get("sort") || "";

          const apiUrl = `http://localhost:5000/allScholarships?page=${page}&search=${search}&category=${category}&country=${country}&sort=${sort}`;

          const res = await fetch(apiUrl);
          if (!res.ok) {
            throw new Response("Failed to fetch scholarships", {
              status: res.status,
            });
          }

          return res.json();
        },
        Component: AllScholarships,
      },
      {
        path: "/scholarship/:id",
        loader: async ({ params }) => {
          return fetch(`http://localhost:5000/allScholarships/${params.id}`);
        },
        Component: ScholarShipDetails,
      },
      {
        path: "/payment",
        element: (
          <PrivateRoute>
            <Payment></Payment>
          </PrivateRoute>
        ),
      },
      { path: "/payment-success", Component: PaymentSuccess },
      { path: "/payment-failed", Component: PaymentFailed },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <UserProfile></UserProfile>
          </PrivateRoute>
        ),
      },
      {
        path: "admin",
        element: (
          <PrivateRoute>
            <AdminPanel></AdminPanel>
          </PrivateRoute>
        ),
      },
      {
        path: "student",
        element: (
          <PrivateRoute>
            <StudentPanel></StudentPanel>
          </PrivateRoute>
        ),
      },
    ],
  },
]);
