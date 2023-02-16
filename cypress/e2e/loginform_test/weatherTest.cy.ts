import cypress from "cypress"
import '@testing-library/cypress/add-commands'


describe('userjourney', () => {
    it('user journey where user enters a weather-location, than click through the tiles, fold tiles and enter not available weather location', () => {
        cy.visit('http://localhost:3000')

        //chose character
        cy.findByRole('img', { name: /empire_logo/i }).click()
        cy.findByRole('button', { name: /LOS/i }).click()

        //registrate
        cy.get('input[placeholder*="Vorname"]').type('Florian')
        cy.get('input[placeholder*="Nachname"]').type('Bohn')
        cy.get('input[placeholder*="Username"]').type('FloBo')
        cy.get('input[placeholder*="Geburtstag"]').type('2014-01-03')
        cy.get('input[placeholder*="Mailadresse"]').type('flo@bohn.de')
        cy.get('input[placeholder*="Telefonnummer"]').type('014535345')
        cy.findByRole('button', { name: /Registrieren/i }).click()
        cy.get("#root > div > div.Menu_menubox__Oo2pz > div:nth-child(2) > a > div")
            .click();

        //weather
        cy.findByText(/Auf welchem Planeten herrschen die gleichen Temperaturen, wie bei dir auf der Erde?/i).should('exist')
        cy.findByText(/Gebe deinen Standort ein, um es herauszufinden!?/i).should('exist');
        cy.get('.WeatherScreen_Background__xtiWU')
            .should('have.css', 'background-image')
            .and('include', 'default.png');
        cy.get('input').type('Wiesbaden');
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_Searchbar__vdJ6M > div > form > button").click();
        cy.wait(1000)
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_Location__\\+3ZXg")
            .findByText("Wiesbaden")
        cy.get('.WeatherScreen_Background__xtiWU')
            .should('have.css', 'background-image')
            .and('not.include', 'default.png')
            .and('not.include', 'default.png');
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > div")
            .findByText("Aktuelles Wetter")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_CurrentWeatherButton_disabled__O2mex")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_CurrentWeatherButton__xkrYG")
            .should("not.exist");
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ")
            .should("exist")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(4)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(3)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(2)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(1)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(5)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(6)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ > div:nth-child(7)")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_CurrentWeatherButton_disabled__O2mex")
            .should("not.exist")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_CurrentWeatherButton__xkrYG")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_CurrentWeatherButton_disabled__O2mex")
            .should("exist")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper_down__gal\\+w > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_FoldButton__jKOTr")
            .should("not.exist")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper__nCvTT > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_FoldButton__jKOTr")
            .click();
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_Tiles__3abCQ")
            .should("not.exist")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_WeatherForecast__JSOVp > div > div.WeatherForecastScreen_DescriptionControlWrapper_down__gal\\+w > div.WeatherForecastScreen_TileControlWrapper__S2ZL4 > button.WeatherForecastScreen_FoldButton__jKOTr")
            .click();
        cy.get('input').clear()
        cy.get('input').type("Hogwarts")
        cy.get("#root > div > div.WeatherScreen_WholeWeather__H5asB > div > div.WeatherScreen_Searchbar__vdJ6M > div > form > button").click();
        cy.findByText(/Diesen Standort gibt es leider nicht!/i).should('exist')
    })
})
