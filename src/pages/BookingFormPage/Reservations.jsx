import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBookingFormContext } from "../../context/BookingContext";
import BookingForm from "../../components/BookingForm/BookingForm";
import { submitAPI, fetchAPI } from "../../util/fakeApi";
import UserForm from "../../components/BookingForm/UserData/UserForm";
import ConfirmedBooking from "../../components/Feedback/ConfirmedBooking";

function Main() {
  const [step, setStep] = useState(0);
  const [bookingData, setBookingData] = useState(null);
  const { dateToday, availableTimes, availableTimesDispatch } =
    useBookingFormContext();
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      occasion: "Birthday",
      time: availableTimes[0],
      guests: "1",
      date: dateToday,
    },
    onSubmit: (values) => {
      console.log(values);
      const response = submitAPI(values);

      if (response) {
        // localStorage.setItem("booking", values);
        setBookingData(values);
        formik.resetForm();
        setStep(2);
        //navigate('/confirmedBooking')
      }
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required("Required"),
      lastName: Yup.string().required("Required"),
      email: Yup.string()
        .email("Please use a valid email format")
        .required("Required"),
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

  const { handleSubmit, values } = formik;

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
        {step === 0 && <UserForm handleNext={handleNext} formik={formik} />}
        {step === 1 && (
          <BookingForm
            formik={formik}
            dateToday={dateToday}
            handlePrevious={handlePrevious}
          />
        )}
        {step === 2 && <ConfirmedBooking bookingData={bookingData} />}
      </form>
    </main>
  );
}

export default Main;
