import { Container, Flex, HStack, Spacer, Show } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../logo.svg";
import SidebarMenu from "../Sidebar/SidebarMenu";

function Navbar() {
  return (
    <>
      <Container fontSize={24} as="nav" py={5} centerContent>
        <HStack gap={5}>
          <img width={200} src={logo} alt="Little Lemon Logo" />

          <Spacer />
          <Show breakpoint="(min-width: 768px)">
            <ul>
              <Flex gap="15px">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/menu">Menu</NavLink>
                </li>
                <li>
                  <NavLink to="reservations">Reservations</NavLink>
                </li>
                <li>
                  <NavLink to="about">About</NavLink>
                </li>
              </Flex>
            </ul>{" "}
          </Show>
          <SidebarMenu />
        </HStack>
      </Container>
      <Outlet />
    </>
  );
}

export default Navbar;
