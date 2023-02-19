import { Input, Select } from "@chakra-ui/react";
import React from "react";
import { CreateSelectNumber } from "../TimePicker/TimePickerOptions";

function GuestPicker({ formik }) {
  return (
    <>
      <label htmlFor="guests">Number of guests</label>
      <Select
        name="guests"
        type="number"
        min="1"
        max="10"
        id="guests"
        {...formik.getFieldProps("guests")}
      >
        <CreateSelectNumber number={10} />
      </Select>
    </>
  );
}

export default GuestPicker;

// function AltGuestPicker({ formik }) {
//   return (
//     <>
//       <label htmlFor="guests">Number of guests</label>
//       <Select
//         name="guests"
//         type="number"
//         min="1"
//         max="10"
//         id="guests"
//         {...formik.getFieldProps("guests")}
//       >
//         <CreateSelectNumber number={10} />
//       </Select>
//     </>
//   );
// }
