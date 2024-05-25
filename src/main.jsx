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
        element: <UserHome/>,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "reservation",
        element: <Reservation />,
      },
      {
        path: "review",
        element: <Reservation />,
      },
      {
        path: "booking",
        element: <Reservation />,
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
