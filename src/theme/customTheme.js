import { extendTheme } from "@chakra-ui/react";

// 40pt = 53.4 px = 3.3375 rem/em
// 18pt = 24 px = 1.5 rem/em
// 16pt = 21.4 px = 1.3375 rem/em
// rounded corners 16

const theme = extendTheme({
  fonts: {
    heading: `'Markazi text', serif`,
    body: `'Karla', sans-serif`,
  },
  colors: {
    brandGreen: {
      50: "#F1F4F3",
      100: "#D7E0DD",
      200: "#BDCCC7",
      300: "#A3B8B1",
      400: "#89A49B",
      500: "#6F9085",
      600: "#59736A",
      700: "#435650",
      800: "#2D3935",
      900: "#161D1B",
    },
    brandYellow: {
      50: "#FEFAE7",
      100: "#FCF1BB",
      200: "#FAE88F",
      300: "#F8DE63",
      400: "#F6D537",
      500: "#F4CC0B",
      600: "#C3A309",
      700: "#927B07",
      800: "#615205",
      900: "#312902",
    },
    brandPeach: {
      50: "#FEF2E7",
      100: "#FBDABC",
      200: "#F8C390",
      300: "#F6AB65",
      400: "#F3943A",
      500: "#F17C0E",
      600: "#C1630B",
      700: "#914A08",
      800: "#603206",
      900: "#301903",
    },
    brandOrange: {
      50: "#FCEFE8",
      100: "#F7D1BF",
      200: "#F2B396",
      300: "#ED966D",
      400: "#E97844",
      500: "#E45A1B",
      600: "#B64816",
      700: "#893610",
      800: "#5B240B",
      900: "#2E1205",
    },
    brandGray: {
      50: "#F2F3F2",
      100: "#D9DDDB",
      200: "#C1C8C4",
      300: "#A9B2AD",
      400: "#909D96",
      500: "#788780",
      600: "#606C66",
      700: "#48514D",
      800: "#303633",
      900: "#181B1A",
    },
    brandBlack: {
      50: "#F2F2F2",
      100: "#DBDBDB",
      200: "#C4C4C4",
      300: "#ADADAD",
      400: "#969696",
      500: "#808080",
      600: "#666666",
      700: "#4D4D4D",
      800: "#333333",
      900: "#1A1A1A",
    },
  },
});

export default theme;
