import { useBookingFormContext } from "../../../context/BookingContext";

function TimePickerOptions() {
  const { availableTimes } = useBookingFormContext();

  return (
    <>
      {availableTimes.currentValue.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </>
  );
}

export default TimePickerOptions;
