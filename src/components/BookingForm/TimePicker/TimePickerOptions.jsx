import { MenuItem } from "@chakra-ui/react";
import { useBookingFormContext } from "../../../context/BookingContext";

function CreateSelectOptions({ array, Component }) {
  const { availableTimes } = useBookingFormContext();
  const createOption = (el) => <option key={el}>{el}</option>;
  const optionList = array ?? availableTimes.currentValue;

  return (
    <>
      {optionList.map((el) =>
        Component ? <Component key={el}>{el}</Component> : createOption(el)
      )}
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

export default CreateSelectOptions;
