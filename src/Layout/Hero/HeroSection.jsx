import "./Hero.css";
import { Card, Container, Heading, Text } from "@chakra-ui/react";
import DefaultButtons from "../../components/Buttons/DefaultButtons";
import restaurantFood from "../../assets/images/restauranfood.jpg";

function HeroSection() {
  return (
    <header className="hero">
      <Container maxW="container.sm" py="20px" px="16px">
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

      <RestaurantFoodImage />
    </header>
  );
}

const RestaurantFoodImage = () => (
  <Card
    maxW={[147, 147, 200, 300]}
    maxH={[152, 152, 200, 300]}
    right={["10px", "10px", "10px", 175, 275, 475]}
    bottom={[70, 70, 70, -45, 35]}
    overflow="hidden"
    className="hero__image"
    position={["absolute", "fixed"]}
  >
    <img
      src={restaurantFood}
      alt="Chef holding a tray of bruschettas from veggie to meat filled topping"
    />
  </Card>
);

export default HeroSection;
