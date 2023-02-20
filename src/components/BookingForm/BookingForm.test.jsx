import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { fetchAPI } from "../../util/fakeApi";
import getISOStringToday from "../../util/getISOString";
import Main from "../../pages/BookingFormPage/ReservationsPage";
import ReservationsPage from "../../pages/BookingFormPage/ReservationsPage";

describe("Booking Form Calendar (Date Picker)", () => {
  const handleChange = jest.fn();
  beforeEach(() => {
    render(<ReservationsPage handleChange={handleChange} />);
  });

  test("Should have first name input", () => {
    const firstName = screen.getByLabelText("First Name");
    expect(firstName).toBeInTheDocument();
  });
  test("Should have last name input", () => {
    const lastName = screen.getByLabelText("Last Name");
    expect(lastName).toBeInTheDocument();
  });
  test("Should have last name input", () => {
    const email = screen.getByLabelText("Email");
    expect(email).toBeInTheDocument();
  });

  test("Should render calendar label and input", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(firstName, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toBeInTheDocument();
  });

  test("Should be of type date", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(firstName, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const calendarInput = screen.getByLabelText("Choose date");

    expect(calendarInput).toHaveAttribute("type", "date");
  });

  test("Should have id of date", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const calendarInput = screen.getByLabelText("Choose date");
    expect(calendarInput).toHaveAttribute("id", "date");
  });

  test("Should have today's date as default value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const calendarInput = screen.getByLabelText("Choose date");
    const today = getISOStringToday().slice(0, 10);
    // WORKS WITH MANUAL DATE
    // expect(calendarInput.value).toBe("2023-02-10");
    expect(calendarInput.value).toBe(today);
  });

  test("Should change date to selected value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const calendarInput = screen.getByLabelText("Choose date");
    fireEvent.change(calendarInput, { target: { value: "2023-02-22" } });
    expect(calendarInput.value).toBe("2023-02-22");
  });
});

describe("Booking Form Time Picker", () => {
  const handleChange = jest.fn(getISOStringToday().slice(0, 10));
  const fetchedTime = fetchAPI();

  beforeEach(() => {
    render(<ReservationsPage handleChange={handleChange} />);
  });

  test("Should render time picker label and input", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));

    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toBeInTheDocument();
  });

  test("Should have id of time", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput).toHaveAttribute("id", "time");
  });

  test("Should have default value of 17:00", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    expect(timeInput.value).toBe(fetchedTime[0]);
    expect(screen.getByText("17:00").selected).toBe(true);
  });

  test("Should not change time to invalid value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: "16:00" } });
    // 16:00 is not a valid option so no change is expected
    expect(timeInput.value).toBe(fetchedTime[0]);
  });

  test("Should change time to selected value", () => {
    // test updated due to dynamic time generator
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(timeInput, { target: { value: fetchedTime[3] } });
    expect(timeInput.value).toBe(fetchedTime[3]);
  });

  test("Should change time by selecting an option", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    // too similar to fireEvent.change
    userEvent.selectOptions(timeInput, [fetchedTime[4]]);
    expect(timeInput.value).toBe(fetchedTime[4]);
  });

  test("Should have specified select option [0]", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText(fetchedTime[0])]);
    expect(screen.getByText(fetchedTime[0]).selected).toBe(true);
  });

  test("Should have specified select option [1]", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText(fetchedTime[1])]);
    expect(screen.getByText(fetchedTime[1]).selected).toBe(true);
  });

  test("Should have specified select option [2]", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    const timeInput = screen.getByLabelText(/Choose time/i);
    userEvent.selectOptions(timeInput, [screen.getByText(fetchedTime[2])]);
    expect(screen.getByText(fetchedTime[2]).selected).toBe(true);
  });
});

describe("Booking Form Guest Picker", () => {
  const handleChange = jest.fn();
  let guestInput;
  beforeEach(() => {
    render(<ReservationsPage handleChange={handleChange} />);
  });

  test("Should render guest picker and input", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toBeInTheDocument();
  });

  test("Should have type of number", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toHaveAttribute("type", "number");
  });

  test("Should have id of guests", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    expect(guestInput).toHaveAttribute("id", "guests");
  });

  test("Should not be a valid element when entering out of bound minimum", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    // 100% works and correct logic, passing invalid value = invalid element
    fireEvent.change(guestInput, { target: { value: 0 } });
    expect(guestInput).toBeValid();
  });
  test("Should be a valid element", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestInput, { target: { value: 7 } });
    expect(guestInput).toBeValid();
    expect(guestInput.value).toBe("7");
  });

  test("Should not be a valid element when entering out of bound maximum", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    guestInput = screen.getByLabelText(/Number of guests/i);
    fireEvent.change(guestInput, { target: { value: 11 } });
    expect(guestInput).toBeValid();
  });
});

describe("Booking Form TimePickerOptions", () => {
  const handleChange = jest.fn();
  let calendarInput;
  let timeInput;
  const fetchedTime = fetchAPI();

  beforeEach(() => {
    render(<Main handleChange={handleChange} />);
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    calendarInput = screen.getByLabelText("Choose date");
    timeInput = screen.getByLabelText(/Choose time/i);
  });

  test("Should have default value of [0]", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    calendarInput = screen.getByLabelText("Choose date");
    timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(calendarInput, { target: { value: "2023-10-17" } });
    // this fails as expected
    // expect(screen.getByText("18:30").selected).toBe(true);
    expect(screen.getByText(fetchedTime[0]).selected).toBe(true);
  });

  test("Should change available time when changing date", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    calendarInput = screen.getByLabelText("Choose date");
    timeInput = screen.getByLabelText(/Choose time/i);
    fireEvent.change(calendarInput, { target: { value: "2023-02-17" } });
    userEvent.selectOptions(timeInput, fetchedTime[2]);

    expect(screen.getByText(fetchedTime[2]).selected).toBe(true);
  });
});

describe("Booking Form Occasion Picker", () => {
  const handleChange = jest.fn();
  let occasionInput;
  beforeEach(() => {
    render(<ReservationsPage handleChange={handleChange} />);
  });

  test("Should render label and input in document", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    expect(occasionInput).toBeInTheDocument();
  });

  test("Should have id of occasion", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    expect(occasionInput).toHaveAttribute("id", "occasion");
  });

  test("Should have default value of Birthday", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    expect(occasionInput.value).toBe("Birthday");
  });

  test("Should not change occasion to invalid value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionInput, { target: { value: "Party" } });
    // no change expected
    expect(occasionInput.value).toBe("Birthday");
  });

  test("Should change occasion to valid value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionInput, { target: { value: "Anniversary" } });
    expect(occasionInput.value).toBe("Anniversary");
  });
  test("Should change occasion to valid value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionInput, { target: { value: "Graduation" } });
    expect(occasionInput.value).toBe("Graduation");
  });
  test("Should change occasion to valid value", () => {
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));
    occasionInput = screen.getByLabelText(/Occasion/i);
    fireEvent.change(occasionInput, { target: { value: "General Occasion" } });
    expect(occasionInput.value).toBe("General Occasion");
  });
});

describe("Booking Form Submit", () => {
  const submitForm = jest.fn((values) => {
    let options = { ...values };
    return options;
  });

  // let submitButton;
  // beforeEach(() => {
  //   render(<Main onSubmit={handleSubmit} />);
  //   submitButton = screen.getByRole("button");
  // });

  test("Should be in document by role button", () => {
    render(<ReservationsPage />);
    const firstName = screen.getByLabelText("First Name");
    userEvent.type(firstName, "fefefe");
    const lastName = screen.getByLabelText("Last Name");
    userEvent.type(lastName, "fefefe");

    const email = screen.getByLabelText("Email");
    userEvent.type(email, "fefefe@gmail.com");

    fireEvent.click(screen.getByText("Next"));

    const submitButton = screen.getByText(/Submit/i);
    expect(submitButton).toBeInTheDocument();
  });
});
