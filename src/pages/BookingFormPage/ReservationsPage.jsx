import BookingFormProvider from "../../context/BookingContext";
import Reservations from "./Reservations";

function ReservationsPage() {
  return (
    <BookingFormProvider>
      <Reservations />
    </BookingFormProvider>
  );
}

export default ReservationsPage;
