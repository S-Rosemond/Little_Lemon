import { render, fireEvent, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./Navbar";

function returnByText(text) {
  return screen.getByText(text);
}

describe("Navbar Home", () => {
  beforeEach(() => {
    render(<Navbar />, { wrapper: BrowserRouter });
  });
  test("Should render page with Home in document", () => {
    const home = returnByText("Home");
    expect(home).toBeInTheDocument();
  });
  test("Should render page with Menu in document", () => {
    const menu = returnByText();
    expect(menu).toBeInTheDocument();
  });
  test("Should render page with Reservation in document", () => {
    const reserve = returnByText();
    expect(reserve).toBeInTheDocument();
  });
  test("Should render page with About in document", () => {
    const about = returnByText();
    expect(about).toBeInTheDocument();
  });
});
// describe('Navbar Menu', ()=> {
//     test('Should on click change to menu page with online menu in document')
// })
// describe('Navbar Reservations', ()=> {
//     test('Should on click change to menu page with online menu in document')

// })
// describe('Navbar About', ()=> {
//     test('Should on click change to menu page with online menu in document')

// })
