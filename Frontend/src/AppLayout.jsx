import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AppContextProvider from "./context/Appcontext";
const AppLayout = () => {
  return (
    <AppContextProvider>
      <div className="mx-4 sm:mx-[5%]">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </AppContextProvider>
  );
};

export default AppLayout;
