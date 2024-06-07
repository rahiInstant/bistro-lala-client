import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import Home from "./Layout/Home/Home.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import OurMenu from "./Layout/OurMenu/OurMenu.jsx";
import OurShop from "./Layout/OurShop/OurShop.jsx";
import AuthProvider from "./Auth/AuthProvider.jsx";
import Login from "./Layout/user-entry/Login.jsx";
import SignUp from "./Layout/user-entry/SignUp.jsx";
import { Toaster } from "react-hot-toast";
import Private from "./Auth/Private.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Cart from "./Dashboard/Cart/Cart.jsx";
import UserHome from "./Dashboard/Home/UserHome.jsx";
import Reservation from "./Dashboard/Reservation/Reservation.jsx";
import AdminHome from "./Dashboard/AdminHome/AdminHome.jsx";
import AddItem from "./Dashboard/AddItem/AddItem.jsx";
import ManageBookings from "./Dashboard/ManageBookings/ManageBookings.jsx";
import AllUsers from "./Dashboard/AllUsers/AllUsers.jsx";
import AdmineRoute from "./Private/AdmineRoute.jsx";
import ManageItems from "./Dashboard/ManageItems/ManageItems.jsx";
import PayHistory from "./Dashboard/PayHistory/PayHistory.jsx";
const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/our-menu",
        element: <OurMenu />,
      },
      {
        path: "/our-shop/:param",
        element: <OurShop />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "user-home",
        element: (
          <Private>
            <UserHome />
          </Private>
        ),
      },
      {
        path: "cart",
        element: (
          <Private>
            <Cart />
          </Private>
        ),
      },
      {
        path: "reservation",
        element: (
          <Private>
            <Reservation />
          </Private>
        ),
      },
      {
        path: "review",
        element: (
          <Private>
            <Reservation />
          </Private>
        ),
      },
      {
        path: "booking",
        element: (
          <Private>
            <Reservation />
          </Private>
        ),
      },
      {
        path: "payment-history",
        element: (
          <Private>
            <PayHistory />
          </Private>
        ),
      },
      {
        path: "admin-home",
        element: (
          <AdmineRoute>
            <AdminHome />
          </AdmineRoute>
        ),
      },
      {
        path: "add-item",
        element: (
          <AdmineRoute>
            <AddItem />
          </AdmineRoute>
        ),
      },
      {
        path: "manage-bookings",
        element: (
          <AdmineRoute>
            <ManageBookings />
          </AdmineRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdmineRoute>
            <ManageItems />
          </AdmineRoute>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdmineRoute>
            <AllUsers />
          </AdmineRoute>
        ),
      },
    ],
  },
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <ChakraProvider>
          <Toaster />
          <RouterProvider router={routes} />
        </ChakraProvider>
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
