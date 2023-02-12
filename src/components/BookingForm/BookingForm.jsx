import BookingFormProvider from "../../context/BookingContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm() {
  const formik = useFormik({
    initialValues: {
      occasion: "",
      time: "",
      guests: "",
      date: undefined,
    },
    validationSchema: Yup.object({
      occasion: Yup.string().required(),
      time: Yup.string().required(),
      guest: Yup.string().required(),
      date: Yup.string().required(),
    }),
  });
  const { handleSubmit, getFieldProps } = formik;
  return (
    <BookingFormProvider>
      <form className="booking-form" onSubmit={handleSubmit}>
        <DatePicker formik={formik} />
        <TimePicker getFieldProps={getFieldProps} />
        <GuestPicker getFieldProps={getFieldProps} />
        <OccasionPicker getFieldProps={getFieldProps} />
        <input type="submit" value="Make Your reservation" />
      </form>
    </BookingFormProvider>
  );
}

export default BookingForm;

/**

const date = new Date()
const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
const value = date.toISOString().slice(0, 10)
 */
