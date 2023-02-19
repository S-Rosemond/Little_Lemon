import { Box, Flex } from "@chakra-ui/react";
import { CreateIconButtons } from "../../components/Other/IconComposition";
import { ChakraImageLogo } from "../../components/Other/Logo";

function Footer() {
  return (
    <footer className="footer">
      <Box py={10}>
        <Flex align={"center"} justify="space-evenly">
          <ChakraImageLogo />

          <Box p={6} fontSize={"sm"} textAlign={"center"}>
            © 2023 Little Lemon Restaurant. All rights reserved
          </Box>
          <Box>
            <Flex gap={5}>
              <CreateIconButtons />
            </Flex>
          </Box>
        </Flex>
      </Box>
    </footer>
  );
}

export default Footer;
