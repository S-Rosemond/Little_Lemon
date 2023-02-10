import { render, fireEvent, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";

describe("Booking Form Calendar", () => {
  const handleChange = jest.fn();
  render(<BookingForm onChange={handleChange} />);
  const calendarInput = screen.getByLabelText("Choose date");

  test("Should render calendar label and input", () => {
    expect(calendarInput).toBeInTheDocument();
  });
  test("Should type of date", () => {
    expect(calendarInput).toHaveAttribute("type", "date");
  });
  test("Should have today's date as default value", () => {
    const date = new Date();
    const today = date.toISOString().slice(0, 10);
    expect(calendarInput.value).toBe("2023-2-23");
  });
});
