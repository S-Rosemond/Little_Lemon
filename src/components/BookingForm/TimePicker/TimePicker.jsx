import { Menu, MenuButton, MenuList, Button } from "@chakra-ui/react";
import React from "react";
// import TimePickerOptions from "./TimePickerOptions";
import { ChakraTimePickerOptions } from "./TimePickerOptions";

function TimePicker({ formik }) {
  return (
    <>
      <Menu>
        <MenuButton as={Button} colorScheme="brandYellow" color="black.900">
          <label id="time">Choose time</label>
        </MenuButton>
        <MenuList
          aria-labelledby="time"
          name="time"
          {...formik.getFieldProps("time")}
        >
          <ChakraTimePickerOptions />
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
