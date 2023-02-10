import BookingFormProvider from "../../context/BookingContext";
import "./BookingForm.css";
import DatePicker from "./DatePicker/DatePicker";
import GuestPicker from "./GuestPicker/GuestPicker";
import OccasionPicker from "./OccasionPicker/OccasionPicker";
import TimePicker from "./TimePicker/TimePicker";

function BookingForm() {
  return (
    <BookingFormProvider>
      <form className="booking-form">
        <DatePicker />
        <TimePicker />
        <GuestPicker />
        <OccasionPicker />
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
