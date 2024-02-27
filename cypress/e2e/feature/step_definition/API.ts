import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps";

var responseData = "";

Given("I get movie data from endpoint {string}", (endpoint:string) => {
    cy.request("GET", endpoint).then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.results).length.to.be.greaterThan(1)
        responseData = response.body.results;
        cy.log(responseData)
      })
});

Then("the count shall be {string}", (number:number) => {
	expect(responseData.length).equals(+number)
});


Then("the director of movie number {string} shall be {string}", (index:string,directorName:string) => {
	const movieDetails:any = responseData[+index];
    expect(movieDetails["director"]).equals(directorName)

});


Then("the producer of movie number {string} shall NOT be {string}", (index:string,producerName:string) => {
	const movieDetails:any = responseData[+index];
    expect(movieDetails["producer"]).not.equal(producerName)
});



