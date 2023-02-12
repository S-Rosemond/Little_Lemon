import { createContext, useContext, useReducer } from "react";
import getISOStringToday from "../util/getISOString";
import updateTimes, { initializeTimes } from "./UpdateTimesReducer";

const BookingFormContext = createContext();

// may use reducer
const BookingFormProvider = ({ children }) => {
  const dateToday = getISOStringToday().slice(0, 10);

  const [availableTimes, availableTimesDispatch] = useReducer(
    updateTimes,
    initializeTimes(dateToday)
  );

  const options = {
    dateToday,
    availableTimes,
    availableTimesDispatch,
  };

  return (
    <BookingFormContext.Provider value={options}>
      {children}
    </BookingFormContext.Provider>
  );
};

export const useBookingFormContext = () => useContext(BookingFormContext);

export default BookingFormProvider;
