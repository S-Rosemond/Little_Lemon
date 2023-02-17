import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Show,
  useDisclosure,
  Flex,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SidebarMenu() {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <>
      <Show breakpoint="(max-width: 768px)">
        <Button onClick={onToggle}>
          <HamburgerIcon />
        </Button>
      </Show>
      <Drawer
        placement="right"
        onClose={onClose}
        isOpen={isOpen}
        colorScheme="blue"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
          <DrawerBody>
            <Flex
              fontSize={24}
              gap={30}
              flexDirection="column"
              justify="center"
            >
              <Link to="/" onClick={onClose}>
                Home
              </Link>
              <Link to="/menu" onClick={onClose}>
                Menu
              </Link>
              <Link to="/reservations" onClick={onClose}>
                Reservations
              </Link>
              <Link to="/about" onClick={onClose}>
                About
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default SidebarMenu;
