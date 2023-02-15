import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { LoginForm } from "../components/LoginForm/Form/LoginForm";
import { LoginFormOuterWrapper } from "../components/LoginForm/LoginOuterWrapper/LoginOuterWrapper";
import userEvent from "@testing-library/user-event";
import { Lightsaber } from "../components/Lightsaber/Lightsaber";

test("test login form", () => {
  render(
    <MemoryRouter>
      <LoginFormOuterWrapper/>
    </MemoryRouter>
  );
  

  userEvent.type(screen.getByPlaceholderText(/firstName/i),"Yannick")
  //const error = screen.getAllByTestId('firstNameError')

  screen.debug();
});
