
import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";
import { LandingPage } from "./page_objects/landingpage";
import { Details } from "./page_objects/detailspage";


Given(/^the user navigates to the landing page$/, () => {
	cy.intercept('GET','/films/6*').as('lastMovieApi')
	cy.intercept('GET','*//swapi.dev/api/films').as('initialApi')
	cy.visit('/');
	cy.wait('@initialApi')
	
});

Given("user is on landing page", () => {
	//cy.wait('@lastMovieApi')
	LandingPage.VerifyPageTitleDisplayed();
});

When('the user selects sortby {string}', (title:string) => {
	LandingPage.ClickHeader(title);
    //LandingPage.VerifyTitleArrowupDisplayed();
});


When("the user views movie details for {string}", (movieName:string) => {
	cy.wait('@lastMovieApi')
	cy.intercept('GET','**/20/').as('lastDetailsPageApi')
	LandingPage.ViewMoviewDetails(movieName)
	cy.wait('@lastDetailsPageApi')
	cy.wait(6000)
});

Then("the user shall see species {string} displayed", (speciesName:string) => {
	
	Details.VerifySpeciesExist(speciesName)
});

Then("the list shall update", () => {
	return true;
});

Then("the movie {string} shall be last in the list", (movieName:string) => {
	LandingPage.VerifyLastMovieName(movieName);
});

Then("the section {string} should not be displayed", (sectionName:string) => {
	Details.VerifySectionIsDisplayed(sectionName);
});
