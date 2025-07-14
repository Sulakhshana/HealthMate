import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Doctors from "../pages/Doctors";
import Login from "../pages/Login";
import MyAppointments from "../pages/MyAppointments";
import MyProfile from "../pages/MyProfile";
import AppLayout from "../AppLayout";
import Appointment from "../pages/Appointment";
const useRoute = () => {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/doctors",
          element: <Doctors />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/myappointments",
          element: <MyAppointments />,
        },
        {
          path: "/profile",
          element: <MyProfile />,
        },
        {
          path: "/appointment/:docId",
          element: <Appointment />,
        },
        {
          path: "/doctors/:speciality",
          element: <Doctors />,
        },
      ],
    },
  ]);
  return appRoute;
};
export default useRoute;
