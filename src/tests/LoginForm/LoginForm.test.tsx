import "@testing-library/jest-dom";
import React from "react";
import { LoginForm } from "../../components/LoginForm/Form/LoginForm";
import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import userEvent from "@testing-library/user-event";

test("Welcome message is displayed and input error fields exist in document when no values are typed and register button is pushed", () => {
  const mockStyle = { background: "" };
  const setErrorState = jest.fn();
  
  const setActivateSaber = jest.fn();
    const errorStateMock: any = (errorState: boolean) => [
    errorState,
    setErrorState,
  ];
  const activateSaberMock: any = (activateSaber: boolean) => [
    activateSaber,
    setActivateSaber,
  ];
  jest.spyOn(React, "useState").mockImplementation(errorStateMock);
  jest.spyOn(React, "useState").mockImplementation(activateSaberMock);

  render(
    <MemoryRouter>
      <LoginForm
        loginFormStyle={mockStyle}
        setErrorState={errorStateMock}
        activateSaber={activateSaberMock}
      ></LoginForm>
    </MemoryRouter>
  );
  const welcome = screen.getByText(/Willkommen/i);
  const buttonElement = screen.getByRole("button", { name: "Registrieren" });
  fireEvent.click(buttonElement);

  let error_firstname = screen.getByText("Vorname leer");
  let error_lastname = screen.getByText("Nachname leer");
  let error_username = screen.getByText("Nachname leer");
  let error_birthday = screen.getByText("Geburtstag leer");
  let error_mail = screen.getByText("Format: user@example.com");
  let error_phone = screen.getByText("TelNum leer");

  expect(welcome).toBeInTheDocument;
  expect(error_firstname).toBeInTheDocument;
  expect(error_lastname).toBeInTheDocument;
  expect(error_username).toBeInTheDocument;
  expect(error_birthday).toBeInTheDocument;
  expect(error_mail).toBeInTheDocument;
  expect(error_phone).toBeInTheDocument;
});

test("only correct input error fields visible", async () => {
  const mockStyle = { background: "" };
  const setErrorState = jest.fn();
  const setActivateSaber = jest.fn();

  
  const errorStateMock: any = (errorState: boolean) => [
    errorState,
    setErrorState,
  ];
  const activateSaberMock: any = (activateSaber: boolean) => [
    activateSaber,
    setActivateSaber,
  ];
  jest.spyOn(React, "useState").mockImplementation(errorStateMock);
  jest.spyOn(React, "useState").mockImplementation(activateSaberMock);

  render(
    <MemoryRouter>
      <LoginForm
        loginFormStyle={mockStyle}
        setErrorState={errorStateMock}
        activateSaber={activateSaberMock}
      ></LoginForm>
    </MemoryRouter>
  );

  userEvent.type(screen.getByPlaceholderText(/Vorname/i), "Yannick");
  userEvent.type(screen.getByPlaceholderText(/Nachname/i), "Messi");
  userEvent.type(screen.getByPlaceholderText(/Username/i), "MessiUser");

  const buttonElement = screen.getByRole("button", { name: "Registrieren" });
  fireEvent.click(buttonElement);

  let error_birthday = screen.getByText("Geburtstag leer");
  let error_mail = screen.getByText("Format: user@example.com");
  let error_phone = screen.getByText("TelNum leer");

  expect(error_birthday).toBeInTheDocument;
  expect(error_mail).toBeInTheDocument;
  expect(error_phone).toBeInTheDocument;
});
