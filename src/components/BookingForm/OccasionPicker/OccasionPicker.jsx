import React from "react";

function OccasionPicker({ getFieldProps }) {
  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" name="occasion" {...getFieldProps("occasion")}>
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
    </>
  );
}

export default OccasionPicker;
