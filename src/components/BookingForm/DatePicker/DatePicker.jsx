import React from "react";

function DatePicker({ handleChange, dateInput }) {
  return (
    <>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={dateInput.value ?? dateInput.initialValue}
        onChange={handleChange}
      />
    </>
  );
}

export default DatePicker;
