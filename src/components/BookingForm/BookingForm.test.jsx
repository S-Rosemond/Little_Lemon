import { render, fireEvent, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import getISOStringToday from "../../util/getISOString";
import BookingForm from "./BookingForm";

describe("Booking Form Calendar (Date Picker)", () => {
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
    // WORKS WITH MANUAL DATE
    // expect(calendarInput.value).toBe("2023-02-10");
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

  test("Should not change time to invalid value", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "16:00" } });
    // 16:00 is not a valid option so no change is expected thus zero length
    expect(timeInput.value).toHaveLength(0);
  });

  test("Should change time to selected value", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "20:00" } });
    expect(timeInput.value).toBe("20:00");
  });

  test("Should change time by selecting an option", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    // too similar to fireEvent.change
    userEvent.selectOptions(timeInput, ["19:00"]);
    expect(timeInput.value).toBe("19:00");
  });
});

describe("Booking Form Guest Picker", () => {
  const handleChange = jest.fn();
  let guestInput;
  beforeEach(() => {
    render(<BookingForm handleChange={handleChange} />);
    guestInput = screen.getByLabelText(/Number of guests/i);
  });

  test("Should render guest picker and input", () => {
    expect(guestInput).toBeInTheDocument();
  });

  test("Should have type of number", () => {
    expect(guestInput).toHaveAttribute("type", "number");
  });

  test("Should have id of guests", () => {
    expect(guestInput).toHaveAttribute("id", "guests");
  });

  test("Should not be a valid element when entering out of bound minimum", () => {
    // 100% works and correct logic, passing invalid value = invalid element
    fireEvent.change(guestInput, { target: { value: 0 } });
    expect(guestInput).not.toBeValid();
  });
  test("Should not be a valid element", () => {
    // 100% works and correct logic, passing invalid value = invalid element
    fireEvent.change(guestInput, { target: { value: 7 } });
    expect(guestInput).toBeValid();
    expect(guestInput.value).toBe("7");
  });

  test("Should not be a valid element when entering out of bound maximum", () => {
    fireEvent.change(guestInput, { target: { value: 11 } });
    expect(guestInput).not.toBeValid();
  });
});

describe("Booking Form Occasion Picker", () => {
  const handleChange = jest.fn();
  let occasionInput;
  beforeEach(() => {
    render(<BookingForm handleChange={handleChange} />);
    occasionInput = screen.getByLabelText(/Occasion/i);
  });

  test("Should render label and input in document", () => {
    expect(occasionInput).toBeInTheDocument();
  });

  test("Should have id of occasion", () => {
    expect(occasionInput).toHaveAttribute("id", "occasion");
  });

  test("Should have default value of Birthday", () => {
    expect(occasion.value).toBe("Birthday");
  });

  test("Should not change occasion to invalid value", () => {
    fireEvent.change(occasion, { target: { value: "Party" } });
    expect(occasion.value).toHaveLength(0);
  });

  test("Should change occasion to valid value", () => {
    fireEvent.change(occasion, { target: { value: "Anniversary" } });
    expect(occasion.value).toBe("Anniversary");
  });
});

// Todo submit form
