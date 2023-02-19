import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import React from "react";
// import TimePickerOptions from "./TimePickerOptions";
import { ChakraCreateMenuListOptions } from "./TimePickerOptions";

function TimePicker({ formik }) {
  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="brandYellow" color="black.900">
          <label id="time">Choose time</label>
        </MenuButton>
        <MenuList aria-labelledby="time" {...formik.getFieldProps("time")}>
          <ChakraCreateMenuListOptions />
        </MenuList>
      </Menu>
    </>
  );
}

export default TimePicker;

/* <label htmlFor="time">Choose time</label>
  <select name="time" id="time" {...formik.getFieldProps("time")}>
  <TimePickerOptions />
</select> */
