import { Flex, Heading } from "@chakra-ui/react";
import DefaultButtons from "../Buttons/DefaultButtons";
import React from "react";

function SubHeading() {
  return (
    <Flex justify="space-around">
      <Heading>This weeks special!</Heading>
      <DefaultButtons
        text="Online Menu"
        colorScheme="brandYellow"
        color="black.900"
      />
    </Flex>
  );
}

export default SubHeading;
