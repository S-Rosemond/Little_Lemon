import { useFormik } from "formik";
import * as Yup from "yup";
import { useBookingFormContext } from "../../context/BookingContext";
import BookingForm from "../../components/BookingForm/BookingForm";
import { submitAPI } from "../../util/fakeApi";

function Main() {
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
        .oneOf([
          "Birthday",
          "Engagement",
          "Anniversary",
          "Graduation",
          "General Occasion",
        ])
        .required("required"),
    }),
  });

  return (
    <main className="booking-form__main">
      <BookingForm formik={formik} dateToday={dateToday} />
    </main>
  );
}

export default Main;
