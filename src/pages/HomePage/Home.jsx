import { Container, Heading, VStack, Text } from "@chakra-ui/react";
import DefaultButtons from "../../components/Buttons/DefaultButtons";
import "./Home.css";

function Home() {
  return (
    <main className="home-auto-layout">
      <Heading fontSize={64} color="brandYellow.500">
        Little Lemon
      </Heading>
      <Text fontSize={40} color="whiteAlpha.900">
        Chicago
      </Text>
      <Text className="hero-content">
        We are a family owned Mediterranean restaurant, focused on traditional
        recipes served with a modern twist.
      </Text>
      <DefaultButtons bgColor="brandYellow.500">Reserve a table</DefaultButtons>
    </main>
  );
}

export default Home;
