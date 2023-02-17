import cypress from "cypress"
import '@testing-library/cypress/add-commands'


describe('userjourney', () => {
    it('weather-app round-trip', () => {
        //preparation
        //choose character
        cy.visit('http://localhost:3000')
        cy.get('[alt="empire_logo"]').click()
        cy.get("button").should("contain.text", "LOS").first().click()

        //registrate
        cy.get('input[placeholder*="Vorname"]').type('Florian')
        cy.get('input[placeholder*="Nachname"]').type('Bohn')
        cy.get('input[placeholder*="Username"]').type('FloBo')
        cy.get('input[placeholder*="Geburtstag"]').type('2014-01-03')
        cy.get('input[placeholder*="Mailadresse"]').type('flo@bohn.de')
        cy.get('input[placeholder*="Telefonnummer"]').type('014535345')
        cy.get("button").should("contain.text", "Registrieren").first().click()
        cy.wait(1000)
        cy.get("div").contains("Wetter").click();


        //weather
        //check start font and background
        cy.get('[data-cy="weather_planet"]').contains("Auf welchem Planeten herrschen die gleichen Temperaturen, wie bei dir auf der Erde?")
        cy.get('[data-cy="weather_planet"]').contains("Gebe deinen Standort ein, um es herauszufinden!")
        cy.get('[data-cy="weather_background"]')
            .should('have.css', 'background-image')
            .and('include', 'default.png')

        //enter a location and proof screen
        cy.get('input').type('Wiesbaden')
        cy.get('[data-cy="searchbar_button"]').click()
        cy.wait(1000)
        cy.get('[data-cy="weather_location"]')
            .should('have.text', 'Wiesbaden')
        cy.get('[data-cy="weather_background"]')
            .should('have.css', 'background-image')
            .and('not.include', 'default.png')
            .and('not.include', 'default.png');
        cy.get('[data-cy="date"]')
            .should('have.text', 'Aktuelles Wetter')
        cy.get('[data-cy="current_weather_button"]')
            .should('have.css', 'cursor', 'default')
        cy.get('[data-cy="tiles"]')
            .should("be.visible")

        //klick through tiles
        cy.get('[data-cy="tile_4"]')
            .click();
        cy.get('[data-cy="tile_1"]')
            .click();
        cy.get('[data-cy="tile_2"]')
            .click();
        cy.get('[data-cy="tile_3"]')
            .click();
        cy.get('[data-cy="tile_0"]')
            .click();
        cy.get('[data-cy="tile_5"]')
            .click();
        cy.get('[data-cy="tile_6"]')
            .click();

        //go back to current weather
        cy.get('[data-cy="current_weather_button"]')
            .should('have.css', 'cursor', 'pointer')
        cy.get('[data-cy="current_weather_button"]')
            .click();
        cy.get('[data-cy="current_weather_button"]')
            .should('have.css', 'cursor', 'default')

        //use fold button
        cy.get('[data-cy="fold_button"]')
            .click()
        cy.get('[data-cy="tiles"]')
            .not("be.visible")
        cy.get('[data-cy="fold_button"]')
            .click()
            
        //enter non existent location
        cy.get('input').clear()
        cy.get('input').type("Hogwarts")
        cy.get('[data-cy="searchbar_button"]').click()
        cy.get('[data-cy="weather_planet"]').contains("Diesen Standort gibt es leider nicht!")
    })
})
