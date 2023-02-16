import { Children } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import App from "../app/App";
import Navbar from "../components/Navigation/Navbar";
import About from "../pages/AboutPage/About";

function Navigation() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default router;
