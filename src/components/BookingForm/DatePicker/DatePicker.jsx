import { useEffect } from "react";
import { useBookingFormContext } from "../../../context/BookingContext";
import { fetchAPI } from "../../../util/fakeApi";
import { Input } from "@chakra-ui/react";

function DatePicker({ formik }) {
  const { dateToday, availableTimesDispatch } = useBookingFormContext();

  useEffect(() => {
    const fetchFunction = () => {
      const fetchedData = fetchAPI();
      let time = fetchedData[0];

      availableTimesDispatch({ type: "updateTimes", payload: fetchedData });
      formik.setFieldValue("time", time);
    };
    fetchFunction();

    return () => fetchFunction();
  }, [formik.values.date]);

  return (
    <>
      <label htmlFor="date">Choose date</label>

      <Input
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

// function DatePicker({ formik }) {
//   const { dateToday, availableTimesDispatch } = useBookingFormContext();

//   useEffect(() => {
//     const fetchFunction = () => {
//       const fetchedData = fetchAPI();
//       let time = fetchedData[0];

//       availableTimesDispatch({ type: "updateTimes", payload: fetchedData });
//       formik.setFieldValue("time", time);
//     };
//     fetchFunction();

//     return () => fetchFunction();
//   }, [formik.values.date]);

//   return (
//     <>
//       <label htmlFor="date">Choose date</label>
//       <input
//         type="date"
//         id="date"
//         name="date"
//         value={formik.values.date ?? dateToday}
//         onChange={formik.handleChange}
//       />
//     </>
//   );
// }
