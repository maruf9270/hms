import {
  Container,
  Header,
  Content,
  Footer,
  Navbar,
  Nav,
  Avatar,
} from "rsuite";
import HomeIcon from "@rsuite/icons/legacy/Home";
import CogIcon from "@rsuite/icons/legacy/Cog";
import Link from "next/link";
import { NavLink } from "../utils/Navlink";

const Navber = () => {
  return (
    <div>
      <Header>
        <Navbar appearance="inverse">
          <Nav>
            <Nav.Item as={NavLink} href="/">
              HMS
            </Nav.Item>
            <Nav.Item as={NavLink} href="/tests">
              Dashboard
            </Nav.Item>
          </Nav>
          <Nav pullRight>
            <Nav.Menu
              icon={
                <Avatar
                  src="https://avatars.githubusercontent.com/u/12592949"
                  size="md"
                  alt="Avater"
                  circle
                  className="border border-stone-900"
                ></Avatar>
              }
            >
              <Nav.Item>Log Out</Nav.Item>
            </Nav.Menu>
          </Nav>
        </Navbar>
      </Header>
    </div>
  );
};

export default Navber;
