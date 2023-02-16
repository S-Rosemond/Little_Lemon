import { Flex } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <Flex gap="10px">
          <li>
            <NavLink to="">Home</NavLink>
          </li>
          <li>
            <NavLink to="">Menu</NavLink>
          </li>
          <li>
            <NavLink to="">Reservations</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
        </Flex>
      </ul>
    </nav>
  );
}

export default Navbar;
