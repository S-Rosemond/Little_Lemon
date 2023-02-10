import React from "react";

function TimePicker() {
  return (
    <>
      <label htmlFor="res-time">Choose time</label>
      <select name="time" id="res-time ">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
    </>
  );
}

export default TimePicker;
