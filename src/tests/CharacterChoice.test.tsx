import React from "react";
import { render, screen, queryByAttribute } from "@testing-library/react";
import { CharacterChoice } from "../pages/CharacterCoice/CharacterChoice";
import { MemoryRouter } from "react-router-dom";
import { TopLogo } from "../components/Character/TopLogo/TopLogo";
import "@testing-library/jest-dom";
import { LightDarkSideChoice } from "../components/Character/LightDarkSideChoice/LightDarkSideChoice";
import { CharacterChoiceDisplay } from "../components/Character/CharacterChoiceDisplay/CharacterChoiceDisplay";
import { ButtonBox } from "../components/Character/BottomButtonBox/ButtonBox";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { CharacterStylingContextProvider } from "../context/CharacterStylingContext";

test("TopLogo component contains correct output, is rendered correctly", () => {
  render(
    <MemoryRouter>
      <TopLogo />
    </MemoryRouter>
  );
  const chooseYour = screen.getByText(/Choose your/i);
  const character = screen.getByText(/Character/i);

  expect(chooseYour).toBeInTheDocument();
  expect(character).toBeInTheDocument();
});

test("light and dark side buttons appear in LightDarkChoice Component", () => {
  render(<LightDarkSideChoice />);

  const lightButton = screen.getByAltText(/rebel_logo/i);
  const darkButton = screen.getByAltText(/empire_logo/i);

  expect(lightButton).toBeInTheDocument;
  expect(darkButton).toBeInTheDocument;
});

test("Character Display has correct alt title", () => {
  render(
    <MemoryRouter>
      <CharacterChoiceDisplay />
    </MemoryRouter>
  );

  const testImage = document.querySelector("img") as HTMLImageElement;
  //const img = screen.getByTestId("Yoda")
  expect(testImage.alt).toBe("charPic");
});

test("Go Button takes user to loginform component", () => {
  render(<App />);
  const user = userEvent;

  user.click(screen.getByRole("button",{name:/go/i}));

  expect(screen.getByText(/Welcome/i)).toBeInTheDocument();
});

test("test context", () => {
  
  render(
    <MemoryRouter>
      <CharacterStylingContextProvider>
        <CharacterChoice/>
      </CharacterStylingContextProvider>
    </MemoryRouter>
  );
  const user = userEvent;
 
  user.click(screen.getByAltText(/empire_logo/i));
  
});
