import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import useRoute from "./hooks/useRoute";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const appRoute = useRoute();
root.render(<RouterProvider router={appRoute} />);
