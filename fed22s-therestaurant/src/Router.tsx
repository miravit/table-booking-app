import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/pages/Layout";
import { Booking } from "./components/pages/Booking";
import { Contact } from "./components/pages/Contact";
import { Home } from "./components/pages/Home";
import { Admin } from "./components/pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      { path: "/", element: <Home></Home>, index: true },
      { path: "/admin", element: <Admin></Admin> },
      { path: "/booking", element: <Booking></Booking> },
      { path: "/contact", element: <Contact></Contact> },
    ],
  },
]);
