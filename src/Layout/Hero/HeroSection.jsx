import "./Hero.css";
import { Container, Heading, Text } from "@chakra-ui/react";
import DefaultButtons from "../../components/Buttons/DefaultButtons";

function HeroSection() {
  return (
    <main className="hero">
      <Container maxW="container.sm">
        <Heading fontSize={64} color="brandYellow.500">
          Little Lemon
        </Heading>

        <Heading as="p" className="hero__sub-heading" fontWeight={300}>
          Chicago
        </Heading>

        <Text mb={10} className="hero__content">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </Text>
        <DefaultButtons
          to="reservations"
          borderRadius={16}
          bgColor="brandYellow.500"
          hover={{ backgroundColor: "brandYellow.600" }}
        >
          Reserve a table
        </DefaultButtons>
      </Container>
    </main>
  );
}

export default HeroSection;
