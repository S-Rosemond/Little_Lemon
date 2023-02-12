import React from "react";

function OccasionPicker({ formik }) {
  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        {...formik.getFieldProps("occasion")}
      >
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
    </>
  );
}

export default OccasionPicker;
