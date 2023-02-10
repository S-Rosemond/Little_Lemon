import { createContext, useContext, useState, useEffect } from "react";
import getISOStringToday from "../util/getISOString";

const BookingFormContext = createContext();

// may use reducer
const BookingFormProvider = ({ children }) => {
  const [dateInput, setDateInput] = useState({
    initialValue: "",
    value: undefined,
  });

  const handleDateChange = (e) =>
    setDateInput({ ...dateInput, value: e.target.value });

  useEffect(() => {
    const today = getISOStringToday().slice(0, 10);
    setDateInput((prev) => ({ ...prev, initialValue: today }));
  }, []);

  const options = {
    datePicker: {
      dateInput,
      handleDateChange,
    },
    timePicker: {},
  };

  return (
    <BookingFormContext.Provider value={options}>
      {children}
    </BookingFormContext.Provider>
  );
};

export const useBookingFormContext = () => useContext(BookingFormContext);

export default BookingFormProvider;
