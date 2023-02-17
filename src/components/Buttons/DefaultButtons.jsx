import { Button } from "@chakra-ui/react";

// button radius 16px for reserve a Table; brand yellow 500

function DefaultButtons({
  text,
  color,
  bgColor,
  width,
  height,
  borderRadius,
  children,
}) {
  return (
    <Button
      width={width}
      height={height}
      spinnerPlacement="start"
      bg={bgColor}
      color={color}
      px="32px"
      borderRadius={borderRadius}
    >
      {text ?? children}
    </Button>
  );
}

export default DefaultButtons;
