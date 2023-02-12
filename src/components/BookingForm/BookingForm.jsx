import BookingFormProvider, {
  useBookingFormContext,
} from "../../context/BookingContext";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm() {
  const { dateToday } = useBookingFormContext();
  const formik = useFormik({
    initialValues: {
      occasion: "Birthday",
      time: "17:00",
      guests: "1",
      date: dateToday,
    },
    onSubmit: (values) => {
      console.log(values);
      return values;
    },
    validationSchema: Yup.object({
      date: Yup.string().required("required"),
      time: Yup.string().required("required"),
      guest: Yup.number().positive().integer().required("required"),
      occasion: Yup.string()
        .oneOf(["Birthday", "Engagement", "Anniversary"])
        .required("required"),
    }),
  });
  const { handleSubmit, isSubmitting } = formik;
  // console.log(formik.errors);
  // console.log(formik.touched);
  console.log(formik.values);
  return (
    <form className="booking-form" onSubmit={handleSubmit}>
      <DatePicker formik={formik} />
      <TimePicker formik={formik} />
      <GuestPicker formik={formik} />
      <OccasionPicker formik={formik} />
      <input
        disabled={isSubmitting}
        type="submit"
        value="Make Your reservation"
        formik={formik}
      />
    </form>
  );
}

export default BookingForm;

/**

const date = new Date()
const options = {year: 'numeric', month: 'numeric', day: 'numeric'}
const value = date.toISOString().slice(0, 10)
 */
