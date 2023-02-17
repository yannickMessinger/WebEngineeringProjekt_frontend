import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { LightDarkSideChoice } from "../../components/Character/LightDarkSideChoice/LightDarkSideChoice";
import { CharacterChoice } from "../../pages/CharacterCoice/CharacterChoice";

test("TopLogo component contains correct output, is rendered correctly", () => {
  render(
    <MemoryRouter>
      <CharacterChoice />
    </MemoryRouter>
  );
  const chooseYour = screen.getByText(/Waehle deine/i);
  const character = screen.getByText(/Seite/i);

  expect(chooseYour).toBeInTheDocument();
  expect(character).toBeInTheDocument();
});

test("light and dark side buttons appear in LightDarkChoice Component", () => {
  const setSideChoosen = jest.fn();

  setSideChoosen(false);
  const useStateMock: any = (sideChoosen: boolean) => [
    sideChoosen,
    setSideChoosen,
  ];
  jest.spyOn(React, "useState").mockImplementation(useStateMock);

  render(
    <MemoryRouter>
      <LightDarkSideChoice setSideChoosen={useStateMock} />
    </MemoryRouter>
  );

  const lightButton = screen.getByAltText(/rebel_logo/i);
  const darkButton = screen.getByAltText(/empire_logo/i);

  expect(lightButton).toBeInTheDocument;
  expect(darkButton).toBeInTheDocument;
});
