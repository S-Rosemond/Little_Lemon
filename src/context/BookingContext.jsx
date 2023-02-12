import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";
import getISOStringToday from "../util/getISOString";
import updateTimes, { initializeTimes } from "./UpdateTimesReducer";

const BookingFormContext = createContext();

// may use reducer
const BookingFormProvider = ({ children }) => {
  const [dateToday, setDateToday] = useState("");

  const [availableTimes, availableTimesDispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  useEffect(() => {
    const today = getISOStringToday().slice(0, 10);
    setDateToday(today);
  }, []);

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
