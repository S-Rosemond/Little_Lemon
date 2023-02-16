import BookingFormProvider from "../../context/BookingContext";
import BookingForm from "../../components/BookingForm/BookingForm";

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
