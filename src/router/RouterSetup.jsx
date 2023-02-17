import { Children } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Routes,
  Outlet,
} from "react-router-dom";
import App from "../app/App";
import Reservations from "../pages/BookingFormPage/Reservations";
import Navbar from "../components/Navigation/Navbar";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import OnlineMenu from "../pages/OnlineMenu/OnlineMenu";

function Navigation() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

// buggy: left for ref
const router = createBrowserRouter([
  {
    element: <Navigation />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "menu",
        element: <OnlineMenu />,
      },
      {
        path: "reservations",
        element: <Reservations />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

// used
export function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<OnlineMenu />} />
        <Route path="reservations" element={<Reservations />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default router;
