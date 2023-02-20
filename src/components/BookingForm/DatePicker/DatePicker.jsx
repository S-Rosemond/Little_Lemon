import { useEffect } from "react";
import { useBookingFormContext } from "../../../context/BookingContext";
import { fetchAPI } from "../../../util/fakeApi";
import {
  FormControl,
  Input,
  FormLabel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react";

function DatePicker({ formik }) {
  const { dateToday } = useBookingFormContext();

  return (
    <>
      <FormControl isInvalid={formik.errors.date}>
        <FormLabel htmlFor="date">Choose date</FormLabel>

        <Input
          type="date"
          id="date"
          name="date"
          value={formik.values.date ?? dateToday}
          onChange={formik.handleChange}
        />
        {formik.errors.date ? (
          <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
        ) : (
          <FormHelperText>
            Please select a date to for reservation
          </FormHelperText>
        )}
      </FormControl>
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
