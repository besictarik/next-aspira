import { Metadata } from "next";
import React from "react";
import SideNav from "../ui/dashboard/sidenav";
import DashboardHeader from "../ui/dashboard/dashboard-header";
import Footer from "../ui/dashboard/footer";

export const metadata: Metadata = {
  title: "Dashboard",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-screen flex-row">
      <SideNav />
      <div className="flex flex-1 flex-col bg-[#ff0000b8]">
        <DashboardHeader />
        <div className="flex w-full flex-1 flex-col bg-[#f2f2f2]">
          <div className="w-full flex-1 px-10">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Layout;
