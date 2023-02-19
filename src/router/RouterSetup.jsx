// import { createRoutesFromElements, Outlet  } from "react-router-dom";
// import App from "../app/App";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navigation/Navbar";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import OnlineMenu from "../pages/OnlineMenu/OnlineMenu";
import ReservationsPage from "../pages/BookingFormPage/ReservationsPage";

// function Navigation() {
//   return (
//     <>
//       <Navbar />
//       <Outlet />
//     </>
//   );
// }

// buggy: left for ref
// const router = createBrowserRouter([
//   {
//     element: <Navigation />,
//     children: [
//       {
//         path: "/",
//         element: <App />,
//       },
//       {
//         path: "menu",
//         element: <OnlineMenu />,
//       },
//       {
//         path: "reservations",
//         element: <Reservations />,
//       },
//       {
//         path: "about",
//         element: <About />,
//       },
//     ],
//   },
// ]);

// used
function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="menu" element={<OnlineMenu />} />
        <Route path="reservations" element={<ReservationsPage />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default NavigationRoutes;
