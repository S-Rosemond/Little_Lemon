import { useState } from "react";
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

  const { handleSubmit, isSubmitting, errors, values } = formik;

  const submitForm = (e) => {
    e.preventDefault();
    const dayToday = Number(dateToday.slice(8, 10));
    if (Number(values.date.slice(8, 10)) < dayToday) {
      formik.setFieldError(
        "date",
        "You cannot select a day in the past. Please select a valid day"
      );
      // console.log(dayToday, Number(values.date.slice(8, 10)));
      return;
    }
    handleSubmit(e);
  };

  const [step, setStep] = useState(0);

  const handleNext = (e) => {
    e.preventDefault();

    setStep((prev) => prev + 1);
  };

  const handlePrevious = (e) => {
    e.preventDefault();

    setStep((prev) => prev - 1);
  };

  return (
    <main className="booking-form__main">
      <form className="booking-form" onSubmit={submitForm}>
        <BookingForm
          formik={formik}
          dateToday={dateToday}
          handlePrevious={handlePrevious}
        />
      </form>
    </main>
  );
}

export default Main;
