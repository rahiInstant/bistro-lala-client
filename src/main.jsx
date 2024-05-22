import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./Layout/Root.jsx";
import Home from "./Layout/Home/Home.jsx";
import { ChakraProvider } from "@chakra-ui/react";
import OurMenu from "./Layout/OurMenu/OurMenu.jsx";
import OurShop from "./Layout/OurShop/OurShop.jsx";
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
        path:'/our-shop/:param',
        element:<OurShop/>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={routes} />
    </ChakraProvider>
  </React.StrictMode>
);
