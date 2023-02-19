import { MenuButton, MenuList, Menu, Button, Select } from "@chakra-ui/react";
import React from "react";
import { ChakraCreateMenuListOptions } from "../TimePicker/TimePickerOptions";

function OccasionPicker({ formik }) {
  const array = ["Birthday", "Engagement", "Anniversary"];
  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <Select
        id="occasion"
        name="occasion"
        {...formik.getFieldProps("occasion")}
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </Select>
    </>
  );
}

export default OccasionPicker;

// function OccasionPicker({ formik }) {
//   const array = ["Birthday", "Engagement", "Anniversary"];
//   return (
//     <>
//       <Menu {...formik.getFieldProps("occasion")}>
//         <MenuButton as={Button} colorScheme="brandYellow" color="black.900">
//           <label id="occasion">Occasion</label>
//         </MenuButton>
//         <MenuList aria-labelledby="occasion">
//           <ChakraCreateMenuListOptions array={array} />
//         </MenuList>
//       </Menu>
//     </>
//   );
// }

// function oldOccasionPicker({ formik }) {
//   return (
//     <>
//       <label htmlFor="occasion">Occasion</label>
//       <select
//         id="occasion"
//         name="occasion"
//         {...formik.getFieldProps("occasion")}
//       >
//         <option>Birthday</option>
//         <option>Engagement</option>
//         <option>Anniversary</option>
//       </select>
//     </>
//   );
// }
