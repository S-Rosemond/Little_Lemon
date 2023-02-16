import { Container, Flex, Heading, HStack, Spacer } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import logo from "../../logo.svg";

function Navbar() {
  return (
    <Container fontSize={24} as="nav" py={20} centerContent>
      <HStack gap={20}>
        <img width={200} src={logo} />
        <Spacer />
        <ul>
          <Flex gap="15px">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/menu">Menu</NavLink>
            </li>
            <li>
              <NavLink to="reservation">Reservations</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
          </Flex>
        </ul>
      </HStack>
    </Container>
  );
}

export default Navbar;
