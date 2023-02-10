import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import getISOStringToday from "../../util/getISOString";
import BookingForm from "./BookingForm";

describe("Booking Form Calendar", () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(<BookingForm handleChange={handleChange} />);
  });

  test("Should render calendar label and input", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toBeInTheDocument();
  });

  test("Should be of type date", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toHaveAttribute("type", "date");
  });

  test("Should have id of res-date", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toHaveAttribute("id", "res-date");
  });

  test("Should have today's date as default value", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    const today = getISOStringToday().slice(0, 10);
    expect(calendarInput.value).toBe(today);
  });

  test("Should change date to selected value", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    fireEvent.change(calendarInput, { target: { value: "2023-02-22" } });
    expect(calendarInput.value).toBe("2023-02-22");
  });
});

describe("Booking Form Time Picker", () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(<BookingForm handleChange={handleChange} />);
  });

  test("Should render time picker label and input", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toBeInTheDocument();
  });

  test("Should have id of res-time", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toHaveAttribute("id", "res-time");
  });

  test("Should have default value of 17:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput.value).toBe("17:00");
  });

  test("Should not change time to selected value", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "16:00" } });
    // 16:00 is not an option so no change is expected thus zero length
    expect(timeInput.value).toHaveLength(0);
  });

  test("Should change time to selected value", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "20:00" } });
    expect(timeInput.value).toBe("20:00");
  });
});

// describe("Booking Form Guest Picker", () => {
//   const handleChange = jest.fn();
//   render(<BookingForm handleChange={handleChange} />);
//   const guestInput = screen.getByLabelText(/Number of guests/i);

//   test("Should render guest picker and input", () => {
//     expect(guestInput).toBeInTheDocument();
//   });
// });
