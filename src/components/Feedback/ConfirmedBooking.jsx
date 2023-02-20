import { Flex, Heading, Text } from "@chakra-ui/react";

// todo
function ConfirmedBooking({ bookingData }) {
  return (
    <main className="updating">
      <Flex flexDir="column" gap={5}>
        <Heading>
          Thank you for booking a table at the Little Lemon Restaurant.
        </Heading>
        <Text maxW="65ch" mb={18}>
          A secure link has been sent to your email address: {bookingData.email}{" "}
          . A form of payment will be required to confirm you reservation.
        </Text>
        <Text mb={40}>Not a designer.</Text>
      </Flex>
    </main>
  );
}

export default ConfirmedBooking;
