import { Button } from "@chakra-ui/react";

// button radius 16px for reserve a Table; brand yellow 500

function DefaultButtons({
  text,
  buttonColor,
  buttonBg,
  buttonW,
  buttonH,
  borderRadius,
}) {
  return (
    <Button
      width={buttonW}
      height={buttonH}
      spinnerPlacement="start"
      bg={buttonBg}
      color={buttonColor}
      px="32px"
      borderRadius={borderRadius}
    >
      {text}
    </Button>
  );
}

export default DefaultButtons;
