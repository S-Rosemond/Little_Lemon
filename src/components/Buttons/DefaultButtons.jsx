import "./DefaultButtons.css";
import { Button } from "@chakra-ui/react";

function DefaultButtons({ text }) {
  return (
    <Button spinnerPlacement="start" className="btn">
      {text}
    </Button>
  );
}

export default DefaultButtons;
