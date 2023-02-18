import { Image } from "@chakra-ui/react";
import logo from "../../logo.svg";

function Logo({ width }) {
  return <img width={width} src={logo} alt="Little Lemon Logo" />;
}
export function ChakraImageLogo({ boxSize }) {
  return <Image src={logo} boxSize={boxSize} />;
}

export default Logo;
