import {
  FormHelperText,
  Select,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
// import TimePickerOptions from "./TimePickerOptions";
import CreateSelectOptions from "./TimePickerOptions";

function TimePicker({ formik }) {
  return (
    <>
      <FormControl isInvalid={formik.errors.time}>
        <FormLabel htmlFor="time">Choose time</FormLabel>
        <Select name="time" id="time" {...formik.getFieldProps("time")}>
          <CreateSelectOptions />
        </Select>
        <FormHelperText>
          Please select an intended time of attendance
        </FormHelperText>
      </FormControl>
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
