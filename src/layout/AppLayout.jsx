import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../shared/ui/Navbar";
import Footer from "../shared/ui/Footer";

function AppLayout() {
  return (
    <>
      <Navbar />
      <main className="max-w-[130rem] mx-auto">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default AppLayout;
