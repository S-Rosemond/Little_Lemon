import React from "react";
import TimePickerOptions from "./TimePickerOptions";

function TimePicker({ formik }) {
  return (
    <>
      <label htmlFor="time">Choose time</label>
      <select name="time" id="time" {...formik.getFieldProps("time")}>
        <TimePickerOptions />
      </select>
    </>
  );
}

export default TimePicker;
