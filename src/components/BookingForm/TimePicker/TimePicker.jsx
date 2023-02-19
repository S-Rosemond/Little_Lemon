import { Menu, MenuButton, MenuList, Button, Select } from "@chakra-ui/react";
import React from "react";
// import TimePickerOptions from "./TimePickerOptions";
import CreateSelectOptions from "./TimePickerOptions";

function TimePicker({ formik }) {
  return (
    <>
      <label htmlFor="time">Choose time</label>
      <Select name="time" id="time" {...formik.getFieldProps("time")}>
        <CreateSelectOptions />
      </Select>
    </>
  );
}

export default TimePicker;

/* <label htmlFor="time">Choose time</label>
  <select name="time" id="time" {...formik.getFieldProps("time")}>
  <TimePickerOptions />
</select> */

// function OldChakraTimePicker({ formik }) {
//   return (
//     <>
//       <Menu>
//         <MenuButton as={Button} colorScheme="brandYellow" color="black.900">
//           <label id="time">Choose time</label>
//         </MenuButton>
//         <MenuList aria-labelledby="time" {...formik.getFieldProps("time")}>
//           <ChakraCreateMenuListOptions />
//         </MenuList>
//       </Menu>
//     </>
//   );
// }
