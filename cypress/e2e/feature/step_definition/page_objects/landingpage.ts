export class LandingPage {



    //locators
    static title = ():string =>{ return '//section//img'}
    static sortby_title = (titleName:string):string =>{ return '//tr//th[text()="'+titleName+'"]'}
    static sortby_arrowup = ():string =>{ return ''}
    static sortby_arrowdown = ():string =>{ return ''}
    static movie_by_name = (movieName:string):string =>{ return '//td//a[text()="'+movieName+'"]'}
    static last_movie_name = ():string =>{return '(//tr//td//a)[last()]'}


    //action methods
    static VerifyLastMovieName(movieName: string) {
        cy.xpath(this.last_movie_name())
        .contains(movieName)
        
    }
    static VerifyTitleArrowupDisplayed() {
        throw new Error("Method not implemented.")
    }
    static ClickHeader(title: string) {
        cy.xpath(this.sortby_title(title))
        .click();
    }
    static VerifyPageTitleDisplayed() {
        cy.xpath(this.title())
        .should('exist')
    }

	static ViewMoviewDetails(movieName: string) {
		cy.xpath(this.movie_by_name(movieName))
        .click();
	}
}