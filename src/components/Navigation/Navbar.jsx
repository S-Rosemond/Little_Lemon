import { Container, Flex, HStack, Show } from "@chakra-ui/react";
import { NavLink, Outlet } from "react-router-dom";
import Logo from "../Other/Logo";
import SidebarMenu from "../Sidebar/SidebarMenu";

function Navbar() {
  return (
    <>
      <Container
        fontSize={24}
        as="nav"
        py={5}
        centerContent
        className="pos-relative"
      >
        <HStack gap={5}>
          <SidebarMenu />

          <Logo width={200} />

          <Show breakpoint="(min-width: 600px)">
            <ul>
              <Flex gap="15px" fontSize="18px">
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
                <li>
                  <a href="#">Order Online</a>
                </li>
                <li>
                  <a href="#"> Login</a>
                </li>
              </Flex>
            </ul>
          </Show>
        </HStack>
      </Container>
      <Outlet />
    </>
  );
}

export default Navbar;
