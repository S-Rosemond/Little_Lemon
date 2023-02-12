import React from "react";
import TimePickerOptions from "./TimePickerOptions";

function TimePicker({ getFieldProps }) {
  return (
    <>
      <label htmlFor="time">Choose time</label>
      <select name="time" id="time" {...getFieldProps("time")}>
        <TimePickerOptions />
      </select>
    </>
  );
}

export default TimePicker;
