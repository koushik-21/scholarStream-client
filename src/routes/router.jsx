import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home";
import AllScholarships from "../pages/AllScholarships/AllScholarships";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import { Component } from "react";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: Home },
      // {
      //   path: "/allScholarships",
      //   loader: async ({ request }) => {
      //     const url = new URL(request.url);
      //     const page = url.searchParams.get("page") || 1;
      //     const res = await fetch(
      //       `http://localhost:5000/allScholarships?page=${page}`
      //     );
      //     if (!res.ok) throw new Error("Failed to fetch scholarships");
      //     return res.json();
      //   },
      //   Component: AllScholarships,
      // },
      // {
      //   path: "/allScholarships",
      //   loader: async ({ request }) => {
      //     const url = new URL(request.url);
      //     const page = url.searchParams.get("page") || 1;

      //     return fetch(
      //       `http://localhost:5000/allScholarships?page=${page}
      //       &category=${encodeURIComponent(category)}`
      //     );
      //   },
      //   Component: AllScholarships,
      // },
      {
        path: "/allScholarships",
        loader: async ({ request }) => {
          const url = new URL(request.url);

          const page = url.searchParams.get("page") || 1;
          const category = url.searchParams.get("category") || "";

          const apiUrl = `http://localhost:5000/allScholarships?page=${page}&category=${encodeURIComponent(
            category
          )}`;

          return fetch(apiUrl);
        },
        Component: AllScholarships,
      },
      { path: "/login", Component: Login },
      { path: "/register", Component: Register },
    ],
  },
]);
