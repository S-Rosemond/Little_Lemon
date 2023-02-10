import React from "react";

function GuestPicker() {
  return (
    <>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
    </>
  );
}

export default GuestPicker;
