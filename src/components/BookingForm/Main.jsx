import React from "react";
import BookingFormProvider from "../../context/BookingContext";
import BookingForm from "./BookingForm";

function Main() {
  return (
    <BookingFormProvider>
      <main>
        <BookingForm />
      </main>
    </BookingFormProvider>
  );
}

export default Main;
