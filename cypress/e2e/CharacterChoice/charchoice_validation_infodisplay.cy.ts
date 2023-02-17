import cypress from "cypress";
import "@testing-library/cypress/add-commands";

describe("userjourney", () => {
  it("user journey where user picks dark side, than picks character bossk, registers, form is validated, and than displays character info.", () => {
    cy.visit("http://localhost:3000/");
    //checking Header text and conditional rendering when no side is selected
    cy.findByText(/waehle deine/i).should("exist");
    cy.findByText(/seite/i).should("exist");
    cy.findByText(/charakter/i).should("not.exist");
    cy.findByRole("button", { name: /LOS/i }).should('not.exist');
    cy.findByRole("img", { name: /charpic/i }).should("not.exist");
    cy.wait(1000);

    //choosing side
    cy.findByRole("img", { name: /empire_logo/i }).click();
    cy.wait(1000);

    //checking conditional rendering and choosing character bossk
    cy.findByText(/charakter/i).should("exist");
    cy.findByRole("img", { name: /charpic/i }).should("exist");
    cy.findByRole("button", { name: /LOS/i }).should('exist');
    cy.wait(500);
    cy.get('[data-cy="char_button_right"]').click();
    cy.wait(1000);
    cy.get('[data-cy="char_button_right"]').click();
    cy.wait(1000);
    cy.get('[data-cy="char_button_right"]').click();
    cy.wait(1000);
    cy.findByRole("button", { name: /LOS/i }).click();
    cy.wait(1000);

    //checking login form for right bossk picture
    cy.get('[data-cy="login_header"]')
      .find("img")
      .should("have.attr", "test-id")
      .should("include", "Bossk");

    //checking form validation, if error msg is displayed and if lightsabers behave correctly
    cy.get('[data-cy="blade_left"]').should("not.be.visible");
    cy.get('[data-cy="blade_right"]').should("not.be.visible");
    cy.get('input[placeholder*="Vorname"]').type("yannick");
    cy.findByRole("button", { name: /Registrieren/i }).click();
    cy.findByText(/Vorname leer/i).should("not.exist");
    cy.findByText(/Nachname leer/i).should("exist");
    cy.wait(1000);
    cy.get('[data-cy="blade_left"]').should("be.visible");
    cy.get('[data-cy="blade_right"]').should("be.visible");
    cy.wait(500);
    cy.get('input[placeholder*="Nachname"]').type("Messinger");
    cy.get('input[placeholder*="Username"]').type("messi");
    cy.get('input[placeholder*="Geburtstag"]').type("2024-06-03");
    cy.get('input[placeholder*="Mailadresse"]').type("messi.de");
    cy.get('input[placeholder*="Telefonnummer"]').type("4567abc");
    cy.findByRole("button", { name: /Registrieren/i }).click();
    cy.wait(1000);
    cy.findByText(/Vorname leer/i).should("not.exist");
    cy.findByText(/Nachname leer/i).should("not.exist");
    cy.findByText(/Username leer/i).should("not.exist");
    cy.findByText(/kein Geb. aus Zukunft/i).should("exist");
    cy.findByText(/Format: user@example.com/i).should("exist");
    cy.findByText(/nur Zahlen!/i).should("exist");
    cy.get('input[placeholder*="Geburtstag"]').clear();
    cy.wait(500);
    cy.get('input[placeholder*="Geburtstag"]').type("1991-06-03");
    cy.wait(500);
    cy.get('input[placeholder*="Mailadresse"]').clear();
    cy.wait(500);
    cy.get('input[placeholder*="Mailadresse"]').type("messi@web.de");
    cy.wait(500);
    cy.get('input[placeholder*="Telefonnummer"]').clear();
    cy.wait(500);
    cy.get('input[placeholder*="Telefonnummer"]').type("556789");
    cy.wait(500);
    cy.findByRole("button", { name: /Registrieren/i }).click();
    cy.get('[data-cy="blade_left"]').should("be.visible");
    cy.get('[data-cy="blade_right"]').should("be.visible");
    cy.wait(4000);
    cy.findByText(/nur Zahlen!/i).should("not.exist");
    cy.findByText(/Format: user@example.com/i).should("not.exist");
    cy.wait(1000);
    
    //check if navigating to menu and character info page works correctly
    cy.findByText(/quiz/i).should("exist");
    cy.findByText(/wetter/i).should("exist");
    cy.findByText(/character info/i).should("exist");
    cy.wait(1000);
    cy.findByText(/character info/i).click();
    cy.wait(6000);
    cy.findByText(/name: bossk/i).should("exist");
  });
});
