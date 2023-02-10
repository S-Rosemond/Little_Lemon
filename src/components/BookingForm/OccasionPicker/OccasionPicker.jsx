import React from "react";

function OccasionPicker() {
  return (
    <>
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
    </>
  );
}

export default OccasionPicker;
