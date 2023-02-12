import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import getISOStringToday from "../../util/getISOString";
import Main from "./Main";

describe("Booking Form Calendar (Date Picker)", () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(<Main handleChange={handleChange} />);
  });

  test("Should render calendar label and input", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toBeInTheDocument();
  });

  test("Should be of type date", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toHaveAttribute("type", "date");
  });

  test("Should have id of date", () => {
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toHaveAttribute("id", "date");
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
    render(<Main handleChange={handleChange} />);
  });

  test("Should render time picker label and input", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toBeInTheDocument();
  });

  test("Should have id of time", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toHaveAttribute("id", "time");
  });

  test("Should have default value of 17:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput.value).toBe("17:00");
    expect(screen.getByText("17:00").selected).toBe(true);
  });

  test("Should not change time to invalid value", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "16:00" } });
    // 16:00 is not a valid option so no change is expected
    expect(timeInput.value).toBe("17:00");
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

  test("Should have specified select option 17:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText("17:00")]);
    expect(screen.getByText("17:00").selected).toBe(true);
  });

  test("Should have specified select option 18:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText("18:00")]);
    expect(screen.getByText("18:00").selected).toBe(true);
  });
  test("Should have specified select option 19:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText("19:00")]);
    expect(screen.getByText("19:00").selected).toBe(true);
  });
  test("Should have specified select option 20:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText("20:00")]);
    expect(screen.getByText("20:00").selected).toBe(true);
  });
  test("Should have specified select option 21:00", () => {
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText("21:00")]);
    expect(screen.getByText("21:00").selected).toBe(true);
  });
});

describe("Booking Form Guest Picker", () => {
  const handleChange = jest.fn();
  let guestInput;
  beforeEach(() => {
    render(<Main handleChange={handleChange} />);
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
  test("Should be a valid element", () => {
    fireEvent.change(guestInput, { target: { value: 7 } });
    expect(guestInput).toBeValid();
    expect(guestInput.value).toBe("7");
  });

  test("Should not be a valid element when entering out of bound maximum", () => {
    fireEvent.change(guestInput, { target: { value: 11 } });
    expect(guestInput).not.toBeValid();
  });
});

describe("Booking Form TimePickerOptions", () => {
  const handleChange = jest.fn();
  let calendarInput;
  let timeInput;

  beforeEach(() => {
    render(<Main handleChange={handleChange} />);
    calendarInput = screen.getByLabelText("Choose date");
    timeInput = screen.getByLabelText(/Choose time/i);
  });

  test("Should have default value of 17:30", () => {
    fireEvent.change(calendarInput, { target: { value: "2023-10-17" } });
    // this fails as expected
    // expect(screen.getByText("18:30").selected).toBe(true);
    expect(screen.getByText("17:30").selected).toBe(true);
  });

  test("Should change available time when changing date", () => {
    fireEvent.change(calendarInput, { target: { value: "2023-02-17" } });
    userEvent.selectOptions(timeInput, ["18:30"]);

    expect(screen.getByText("18:30").selected).toBe(true);
  });
});

describe("Booking Form Occasion Picker", () => {
  const handleChange = jest.fn();
  let occasionInput;
  beforeEach(() => {
    render(<Main handleChange={handleChange} />);
    occasionInput = screen.getByLabelText(/Occasion/i);
  });

  test("Should render label and input in document", () => {
    expect(occasionInput).toBeInTheDocument();
  });

  test("Should have id of occasion", () => {
    expect(occasionInput).toHaveAttribute("id", "occasion");
  });

  test("Should have default value of Birthday", () => {
    expect(occasionInput.value).toBe("Birthday");
  });

  test("Should not change occasion to invalid value", () => {
    fireEvent.change(occasionInput, { target: { value: "Party" } });
    // no change expected
    expect(occasionInput.value).toBe("Birthday");
  });

  test("Should change occasion to valid value", () => {
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });
    expect(occasionInput.value).toBe("Anniversary");
  });
});

// Todo submit form
describe("Booking Form Submit", () => {
  const handleClick = jest.fn();
  let submitButton;
  // beforeEach(() => {
  //   render(<Main onSubmit={handleSubmit} />);
  //   submitButton = screen.getByRole("button");
  // });

  test("Should be in document with test id submit-button", () => {
    render(<Main onClick={handleClick} />);
    const submitButton = screen.getByRole("button");
    expect(submitButton).toBeInTheDocument();
  });

  test("Should be called with all text properties", async () => {
    const options = {
      date: "2023-02-22",
      time: "20:30",
      guests: 7,
      occasion: "Anniversary",
    };

    render(<Main onSubmit={handleSubmit} />);
    const submitButton = screen.getByRole("button");
    const timeInput = screen.getByLabelText(/Choose time/i);
    const calendarInput = screen.getByLabelText("Choose date");
    const guestInput = screen.getByLabelText(/Number of guests/i);
    const occasionInput = screen.getByLabelText(/Occasion/i);

    fireEvent.change(calendarInput, { target: { value: options.date } });
    fireEvent.change(timeInput, { target: { value: options.time } });
    fireEvent.change(guestInput, { target: { value: options.guests } });
    fireEvent.change(occasionInput, { target: { value: options.occasion } });
    fireEvent.click(submitButton);

    expect(handleClick).toHaveBeenCalled();
    // expect(handleSubmit).toHaveBeenCalledWith(options);
  });
});
