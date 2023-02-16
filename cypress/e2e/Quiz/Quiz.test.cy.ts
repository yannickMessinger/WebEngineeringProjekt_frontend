import cypress from "cypress";
import "@testing-library/cypress/add-commands";

describe("setup quiz", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/quiz");
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
    });
});
