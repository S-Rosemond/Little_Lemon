import { Container, Flex, Heading } from "@chakra-ui/react";
import DefaultButtons from "../Buttons/DefaultButtons";
import React from "react";

function SubHeading() {
  return (
    <Container maxW="container.md" py="20px" px="16px">
      <Flex justify="space-around" align="center">
        <Heading fontSize={55}>This weeks special!</Heading>
        <DefaultButtons
          text="Online Menu"
          colorScheme="brandYellow"
          color="black.900"
        />
      </Flex>
    </Container>
  );
}

export default SubHeading;
