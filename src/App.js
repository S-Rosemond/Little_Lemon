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
        <DefaultButtons buttonBg="brandYellow.500" text="Online Menu" />
        <DefaultButtons
          buttonBg="brandYellow.500"
          text="Reserve a Table"
          borderRadius="16px"
        />
      </ChakraProvider>
    </>
  );
}

export default App;
