import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme/customTheme";

import Main from "../pages/BookingFormPage/Reservations";
import Navbar from "../components/Navigation/Navbar";

const loremTest =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae justo. ";

function App() {
  return (
    <>
      <ChakraProvider theme={theme}>
        {/* <Main /> */}
        {/* <Navbar /> */}
      </ChakraProvider>
    </>
  );
}

export default App;
