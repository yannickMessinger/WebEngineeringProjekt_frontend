import cypress from "cypress";
import "@testing-library/cypress/add-commands";

function logIn() {
    cy.findByRole("img", { name: /empire_logo/i }).click();
    cy.get('[data-cy="char_button_right"]').click();
    cy.get('[data-cy="char_button_right"]').click();
    cy.get('[data-cy="char_button_right"]').click();
    cy.findByRole("button", { name: /LOS/i }).click();

    cy.get('input[placeholder*="Vorname"]').type("Lena");
    cy.get('input[placeholder*="Nachname"]').type("Ngo");
    cy.get('input[placeholder*="Username"]').type("lenaxxx");
    cy.get('input[placeholder*="Geburtstag"]').type("2000-03-22");
    cy.get('input[placeholder*="Mailadresse"]').type("lena@web.de");
    cy.get('input[placeholder*="Telefonnummer"]').type("123123");
    cy.findByRole("button", { name: /Registrieren/i }).click();

    cy.findByText(/quiz/).click();
}

describe("setup quiz", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
        logIn();
    });

    it("select difficulty", () => {
        cy.get("label").should("contain.text", "easy");
        cy.wait(1000);
        cy.get("button").should("contain.text", "ändern").first().click();
        cy.wait(1000);
        cy.get("div").contains("mittel").click();
        cy.wait(1000);
        cy.get("label").should("contain.text", "medium");
        cy.wait(1000);
        cy.get("button").should("contain.text", "ändern").first().click();
        cy.wait(1000);
        cy.get("div").contains("schwer").click();
        cy.wait(1000);
        cy.get("label").should("contain.text", "hard");
    });

    it("select amount of questions", () => {
        cy.get("label").should("contain.text", "10");
        cy.wait(1000);
        cy.get('button:contains("ändern")').eq(1).click();
        cy.wait(1000);
        cy.get("div").contains("15").click();
        cy.wait(1000);
        cy.get("label").should("contain.text", "15");
        cy.wait(1000);
        cy.get('button:contains("ändern")').eq(1).click();
        cy.wait(1000);
        cy.get("div").contains("20").click();
        cy.wait(1000);
        cy.get("label").should("contain.text", "20");
    });

    it("start the game", () => {
        cy.contains("button", "Let's start!").click();
        cy.wait(1000);
        cy.contains("p", "May the force be with you!").click();
        Cypress.config("requestTimeout", 10000);
        cy.intercept(
            "GET",
            "http://localhost:1337/api/questions?filters[difficulty][$eq]=easy&populate=*",
            { fixture: "questions.json" }
        ).as("getQuestions");
        cy.wait("@getQuestions");

        for (let i = 0; i < 3; i++) {
            Cypress.config("defaultCommandTimeout", 300000);
            // eslint-disable-next-line no-loop-func

            cy.get('h2[class^="Question_question_text"]').each(($h2) => {
                const text = $h2.text();
                Cypress.config("defaultCommandTimeout", 300000);
                if (text.includes("Wer ist der ater von Luke Skywalker?")) {
                    cy.get("li")
                        .should("contain.text", "Darth ader")
                        .first()
                        .click();

                    // cy.get(
                    //     '[class="MultipleChoice_rightPy2HZ MultipleChoice_disableClickm4Pt+"]'
                    // );
                    cy.get('[class^="MultipleChoice_right"]');
                } else if (
                    text.includes(
                        "Wie viele Lichtschwerter besitzt General Griveous?"
                    )
                ) {
                    //cy.get('[class="Slider_sliderHXO38"]').invoke('val', 4).trigger('input')
                    cy.contains("button", "Fertig").click();
                    cy.wait(2000);
                } else if (
                    text.includes("Wer ist der `ater dieses Characters?")
                ) {
                    cy.get("p").contains("Jango Fett").click();

                    cy.get('[class^="PictureAnswer_right"]');
                } else if (text.includes("Fülle den Satz aus!")) {
                    cy.get("select").as("selection");
                    cy.get("@selection").select("rotes");
                    cy.contains("button", "Fertig").click();
                    cy.get('[class*="FillInTheBlank_right"]');
                }
                cy.wait(5000);
            });
        }
    });
});
