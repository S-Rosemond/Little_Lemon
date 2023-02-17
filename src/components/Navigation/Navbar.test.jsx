import {
  render,
  fireEvent,
  screen,
  act,
  cleanup,
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import App from "../../app/App";
import { Navigation } from "../../router/RouterSetup";
import Navbar from "./Navbar";

function returnByText(text) {
  return screen.getByText(text);
}

describe("Navbar Home", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    cleanup();
  });
  test("Should render page with Home in document", () => {
    const home = returnByText("Home");
    expect(home).toBeInTheDocument();
  });
  test("Should render page with Menu in document", () => {
    const menu = returnByText("Menu");
    expect(menu).toBeInTheDocument();
  });
  test("Should render page with Reservation in document", () => {
    const reserve = returnByText("Reservations");
    expect(reserve).toBeInTheDocument();
  });
  test("Should render page with About in document", () => {
    const about = returnByText("About");
    expect(about).toBeInTheDocument();
  });
});

describe("Navbar Menu", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });

  afterEach(() => {
    cleanup();
  });
  test("Should on click change menu to active", async () => {
    const menu = returnByText("Menu");
    expect(menu).not.toHaveAttribute("class", "active");

    const user = userEvent.setup();
    await user.click(screen.getByText("Menu"));

    expect(menu).toHaveAttribute("class", "active");
  });
});

describe("Navbar Reservations", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });
  test("Should on click change reservations to active", async () => {
    const reservations = returnByText("Reservations");

    const user = userEvent.setup();
    await user.click(screen.getByText("Reservations"));

    expect(reservations).toHaveAttribute("class", "active");
  });
});

describe("Navbar About", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });
  afterEach(() => {
    cleanup();
  });
  test("Should on click change About to active", async () => {
    const about = returnByText("About");
    expect(about).not.toHaveAttribute("class", "active");

    const user = userEvent.setup();
    await user.click(screen.getByText("About"));

    expect(about).toHaveAttribute("class", "active");
  });
});
