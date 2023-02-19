import { MenuItem } from "@chakra-ui/react";
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

export function ChakraTimePickerOptions({ Component }) {
  const { availableTimes } = useBookingFormContext();
  const ComponentOption = Component ?? MenuItem;

  return (
    <>
      {availableTimes.currentValue.map((el) => {
        return <ComponentOption key={el}>{el} </ComponentOption>;
      })}
    </>
  );
}

export default TimePickerOptions;
