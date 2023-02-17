import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

// button radius 16px for reserve a Table; brand yellow 500

function DefaultButtons({
  text,
  color,
  bgColor,
  width,
  height,
  borderRadius,
  colorScheme,
  to,
  hover,
  children,
}) {
  return (
    <Link to={to}>
      <Button
        width={width}
        height={height}
        spinnerPlacement="start"
        bg={bgColor}
        color={color}
        px="32px"
        borderRadius={borderRadius}
        _hover={hover}
        colorScheme={colorScheme}
        className="default-button"
      >
        {text ?? children}
      </Button>
    </Link>
  );
}

export default DefaultButtons;
