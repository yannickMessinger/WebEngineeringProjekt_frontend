import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { TopLogo } from "../components/Character/TopLogo/TopLogo";
import "@testing-library/jest-dom";
import { LightDarkSideChoice } from "../components/Character/LightDarkSideChoice/LightDarkSideChoice";
import { CharacterChoiceDisplay } from "../components/Character/CharacterChoiceDisplay/CharacterChoiceDisplay";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { CharacterChoice } from "../pages/CharacterCoice/CharacterChoice";


test("TopLogo component contains correct output, is rendered correctly", () => {
  render(
    <MemoryRouter>
      <CharacterChoice/>
    </MemoryRouter>
  );
  const chooseYour = screen.getByText(/Waehle deine/i);
  const character = screen.getByText(/Seite/i);

  expect(chooseYour).toBeInTheDocument();
  expect(character).toBeInTheDocument();
});

test("light and dark side buttons appear in LightDarkChoice Component", () => {
  render(<LightDarkSideChoice setSideChoosen={function (value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  } } />);

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
  expect(testImage.alt).toBe("arrow_left");
});

/*
test("Go Button takes user to loginform component", () => {
  render(<App />);
  const user = userEvent;

  user.click(screen.getByRole("button",{name:/LOS/i}));

  expect(screen.getByText(/Willkommen/i)).toBeInTheDocument();
});
*/

