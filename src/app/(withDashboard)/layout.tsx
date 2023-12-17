"use client";
import {
  Container,
  Header,
  Sidebar,
  Sidenav,
  Content,
  Navbar,
  Nav,
} from "rsuite";
import { useState } from "react";
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import SidebarForDashboard from "@/components/dashboard/sidebar";
import Navber from "@/components/ui/Navber";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="show-fake-browser ">
      <Navber/>
      <Container>
        <SidebarForDashboard/>
        <Container className="p-5">
          <Content>{children}</Content>
        </Container>
      </Container>
    </div>
  );
};

export default Layout;
