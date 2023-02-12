import React from "react";

function GuestPicker({ getFieldProps }) {
  return (
    <>
      <label htmlFor="guests">Number of guests</label>
      <input
        name="guests"
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        {...getFieldProps("guests")}
      />
    </>
  );
}

export default GuestPicker;
