import { createContext, useContext } from "react";

const BookingFormContext = createContext();

const BookingFormProvider = ({ children }) => {
  return <BookingFormContext.Provider>{children}</BookingFormContext.Provider>;
};

export const useBookingFormContext = () => useContext(BookingFormContext);

export default BookingFormContext;
