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

export function ChakraCreateMenuListOptions({ Component, array }) {
  const { availableTimes } = useBookingFormContext();
  const ComponentOption = Component ?? MenuItem;
  const arrayToMap = array ?? availableTimes.currentValue;

  return (
    <>
      {arrayToMap.map((el) => {
        return <ComponentOption key={el}>{el} </ComponentOption>;
      })}
    </>
  );
}

export default TimePickerOptions;
