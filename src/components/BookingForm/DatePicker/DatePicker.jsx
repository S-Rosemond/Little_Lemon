import React from "react";
import { useBookingFormContext } from "../../../context/BookingContext";

function DatePicker() {
  const { datePicker } = useBookingFormContext();
  const { handleDateChange, dateInput } = datePicker;
  return (
    <>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={dateInput.value ?? dateInput.initialValue}
        onChange={handleDateChange}
      />
    </>
  );
}

export default DatePicker;
