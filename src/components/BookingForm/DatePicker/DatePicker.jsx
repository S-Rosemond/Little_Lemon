import { useEffect } from "react";
import { useBookingFormContext } from "../../../context/BookingContext";

function DatePicker({ formik }) {
  const { dateToday, availableTimesDispatch } = useBookingFormContext();

  useEffect(() => {
    const tempPayload = ["17:30", "18:30", "19:30", "20:30", "21:30", "22:30"];
    let time;
    if (dateToday === formik.values.date) {
      availableTimesDispatch({ type: "today", payload: tempPayload });
      time = "17:00";
    } else if (formik.values.date !== undefined) {
      availableTimesDispatch({ type: "updateTimes", payload: tempPayload });
      time = "17:30";
    }

    formik.setFieldValue("time", time);
  }, [formik.values.date]);

  return (
    <>
      <label htmlFor="date">Choose date</label>
      <input
        type="date"
        id="date"
        name="date"
        value={formik.values.date ?? dateToday}
        onChange={formik.handleChange}
      />
    </>
  );
}

export default DatePicker;
