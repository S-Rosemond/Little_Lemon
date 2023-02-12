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
import { submitAPI } from "../../util/fakeApi";

function BookingForm() {
  const { dateToday, availableTimes } = useBookingFormContext();
  const formik = useFormik({
    initialValues: {
      occasion: "Birthday",
      time: availableTimes[0],
      guests: "1",
      date: dateToday,
    },
    onSubmit: (values) => {
      console.log(values);
      const response = submitAPI(values);

      if (response) {
        localStorage.setItem("booking", values);
        formik.resetForm();
        //navigate('/confirmedBooking')
      }
    },
    validationSchema: Yup.object({
      date: Yup.string().required("required"),
      time: Yup.string().required("required"),
      guest: Yup.number().positive().integer(),
      occasion: Yup.string()
        .oneOf(["Birthday", "Engagement", "Anniversary"])
        .required("required"),
    }),
  });
  const { handleSubmit, isSubmitting, errors } = formik;
  const submitForm = (e) => {
    handleSubmit(e);
  };
  // console.log(errors);
  // console.log(formik.values);
  return (
    <form className="booking-form" onSubmit={submitForm}>
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
