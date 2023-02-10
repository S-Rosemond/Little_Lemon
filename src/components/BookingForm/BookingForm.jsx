import React, { useEffect, useState } from "react";
import getISOStringToday from "../../util/getISOString";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";

function BookingForm() {
  const [dateInput, setDateInput] = useState({
    initialValue: "",
    value: undefined,
  });

  const handleChange = (e) =>
    setDateInput({ ...dateInput, value: e.target.value });

  useEffect(() => {
    const today = getISOStringToday().slice(0, 10);
    setDateInput({ ...dateInput, initialValue: today });
  }, [dateInput.initialValue]);
  return (
    <form className="booking-form">
      <DatePicker handleChange={handleChange} dateInput={dateInput} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input type="number" placeholder="1" min="1" max="10" id="guests" />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion">
        <option>Birthday</option>
        <option>Engagement</option>
        <option>Anniversary</option>
      </select>
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
