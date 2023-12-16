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
import Navber from "../ui/Navber";
import Link from "next/link";
import React from "react";
import PeoplesIcon from "@rsuite/icons/Peoples";
import MemberIcon from "@rsuite/icons/Member";
import PageIcon from "@rsuite/icons/Page";
import TextImageIcon from "@rsuite/icons/TextImage";
import { NavLink } from "../utils/Navlink";

const NavToggle = ({ expand, onChange }: { expand: any; onChange: any }) => {
  return (
    <Navbar appearance="subtle" className="nav-toggle">
      {/* <Nav>
        <Nav.Menu
          noCaret
          placement="topStart"
          trigger="click"
          title={<CogIcon style={{ width: 20, height: 20 }} />}
        >
          <Nav.Item>Help</Nav.Item>
          <Nav.Item>Settings</Nav.Item>
          <Nav.Item>Sign out</Nav.Item>
        </Nav.Menu>
      </Nav> */}

      <Nav pullRight>
        <Nav.Item onClick={onChange} style={{ width: 80, textAlign: "center" }}>
          {expand ? <AngleLeftIcon /> : <AngleRightIcon />}
        </Nav.Item>
      </Nav>
    </Navbar>
  );
};
const SidebarForDashboard = () => {
  const [expand, setExpand] = useState(true);
  return (
    <div>
      <Sidebar
        style={{ display: "flex", flexDirection: "column" }}
        width={expand ? 260 : 56}
        collapsible
      >
        <Sidenav expanded={expand} appearance="subtle">
          <Sidenav.Body>
            <Nav>
              <Nav.Menu
                eventKey="1"
                trigger="hover"
                title="Tests"
                placement="rightStart"
                icon={<TextImageIcon />}
              >
                <Nav.Item eventKey="1-1" as={NavLink} href="/tests">
                  All Tests
                </Nav.Item>
                <Nav.Item eventKey="1-2" as={NavLink} href="/tests/create-new">
                  Add new test
                </Nav.Item>
                <Nav.Item eventKey="1-3">Create Test Report</Nav.Item>
              </Nav.Menu>

              <Nav.Menu
                eventKey="3"
                trigger="hover"
                title="Patients"
                icon={<PeoplesIcon />}
                placement="rightStart"
              >
                <Nav.Item eventKey="3-1" as={NavLink} href="/patient">
                  Patients
                </Nav.Item>
                <Nav.Item
                  eventKey="3-2"
                  as={NavLink}
                  href="/patient/create-new"
                >
                  Create New Patient
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="4"
                trigger="hover"
                title="Doctors"
                icon={<MemberIcon />}
                placement="rightStart"
              >
                <Nav.Item eventKey="4-1" as={NavLink} href="/doctor">
                  Doctors
                </Nav.Item>
                <Nav.Item eventKey="4-2" as={NavLink} href="/doctor/create-new">
                  Create New Doctor
                </Nav.Item>
              </Nav.Menu>
              <Nav.Menu
                eventKey="5"
                trigger="hover"
                title="Test Reports"
                icon={<PageIcon />}
                placement="rightStart"
              >
                <Nav.Item eventKey="5-1" as={NavLink} href="/test-report">
                  Test Reports
                </Nav.Item>
                <Nav.Item
                  eventKey="5-2"
                  as={NavLink}
                  href="/test-report/create-new"
                >
                  Create New Test Report
                </Nav.Item>
              </Nav.Menu>
            </Nav>
          </Sidenav.Body>
        </Sidenav>
        <NavToggle expand={expand} onChange={() => setExpand(!expand)} />
      </Sidebar>
    </div>
  );
};

export default SidebarForDashboard;
