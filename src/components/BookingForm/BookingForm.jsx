import React, { useEffect, useState } from "react";
import getISOStringToday from "../../util/getISOString";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm() {
  const [dateInput, setDateInput] = useState({
    initialValue: "",
    value: undefined,
  });

  const handleChange = (e) =>
    setDateInput({ ...dateInput, value: e.target.value });

  useEffect(() => {
    const today = getISOStringToday().slice(0, 10);
    setDateInput((prev) => ({ ...prev, initialValue: today }));
  }, []);
  return (
    <form className="booking-form">
      <DatePicker handleChange={handleChange} dateInput={dateInput} />
      <TimePicker />
      <GuestPicker />
      <OccasionPicker />
      <input type="submit" value="Make Your reservation" />
    </form>
  );
}

export default BookingForm;

/**

const date = new Date()
const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
const value = date.toISOString().slice(0, 10)
 */
