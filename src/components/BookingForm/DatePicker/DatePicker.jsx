import React from "react";
import { useBookingFormContext } from "../../../context/BookingContext";

function DatePicker({ formik }) {
  const { dateToday, availableTimesDispatch } = useBookingFormContext();

  const handleDateAndTimeChange = (e) => {
    e.preventDefault();
    formik.handleChange(e);
    const tempPayload = ["17:30", "18:30", "19:30", "20:30", "21:30", "22:30"];
    console.log("dateToday:", dateToday, "\n", "formik", formik.values.date);
    if (dateToday === formik.values.date) {
      availableTimesDispatch({ type: "today", payload: tempPayload });
    } else {
      availableTimesDispatch({ type: "updateTimes", payload: tempPayload });
    }
  };

  return (
    <>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date ?? dateToday}
        onChange={handleDateAndTimeChange}
      />
    </>
  );
}

export default DatePicker;
