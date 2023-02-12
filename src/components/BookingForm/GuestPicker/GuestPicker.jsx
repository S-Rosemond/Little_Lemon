import React from "react";

function GuestPicker({ formik }) {
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
        {...formik.getFieldProps("guests")}
      />
    </>
  );
}

export default GuestPicker;
