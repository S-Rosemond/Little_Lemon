import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import getISOStringToday from "../../util/getISOString";
import BookingForm from "./BookingForm";

describe("Booking Form Calendar", () => {
  const handleChange = jest.fn();
  render(<BookingForm handleChange={handleChange} />);
  const calendarInput = screen.getByLabelText("Choose date");

  test("Should render calendar label and input", () => {
    expect(calendarInput).toBeInTheDocument();
  });
  test("Should be of type date", () => {
    expect(calendarInput).toHaveAttribute("type", "date");
  });
  test("Should have today's date as default value", () => {
    const today = getISOStringToday().slice(0, 10);
    expect(calendarInput.value).toBe(today);
  });
  test("Should change date to selected value", () => {
    fireEvent.change(calendarInput, { target: { value: "2023-02-22" } });
    expect(calendarInput.value).toBe("2023-02-22");
  });
});
