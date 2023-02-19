import { Heading, Text, Flex } from "@chakra-ui/react";
import React from "react";

function OnlineMenu() {
  return (
    <main className="updating">
      <Flex justify="center" align="center" flexDir="column" gap={5}>
        <Heading>
          The Little Lemon Restauarant is currently updating their menu
        </Heading>
        <Text maxW="65ch" mb={18}>
          Sorry for the inconvenience. The web team is working hard to update
          this feature.
        </Text>
        <Text mb={40}>Please check back at a later date.</Text>
        <Text>I 100% saw Planet Wings have a similar message lol</Text>
      </Flex>
    </main>
  );
}

export default OnlineMenu;
