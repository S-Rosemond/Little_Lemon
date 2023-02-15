import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/customTheme";

import Main from "./components/BookingForm/Main";
import DefaultButtons from "./components/Buttons/DefaultButtons";
import DishCard from "./components/Card/DishCard";
import salad from "./assets/images/greek salad.jpg";
import MobileDishCard from "./components/Card/MobileDishCard";

const loremTest =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae justo. ";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Main /> */}
        <DefaultButtons text="Add for $12.99" />
        <DishCard
          heading="Greek Salad"
          price="$12.99"
          summary={loremTest}
          image={salad}
        />
        <MobileDishCard
          heading="Greek Salad"
          price="$12.99"
          summary={loremTest}
          image={salad}
        />
      </ChakraProvider>
    </>
  );
}

export default App;
