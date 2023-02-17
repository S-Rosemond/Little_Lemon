import {
  Container,
  Heading,
  VStack,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import DefaultButtons from "../../components/Buttons/DefaultButtons";
import "./Home.css";

function Home() {
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
        <DefaultButtons borderRadius={16} bgColor="brandYellow.500">
          Reserve a table
        </DefaultButtons>
      </Container>
    </main>
  );
}

export default Home;
