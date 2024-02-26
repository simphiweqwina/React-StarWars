export class Details{

    //locators
    static species_by_name = (species:string):string => {return "//div//h1[text()='Species']/../..//ul//li[text()='"+species+"']"}
    static section_heading = (sectionName:string):string => {return '//div//h1[text()="'+sectionName+'"]'}

    //action methods
    static VerifySpeciesExist(speciesName: string) {
		cy.xpath(this.species_by_name(speciesName))
        .should('be.visible')
	}

    static VerifySectionIsDisplayed(sectionName: string) {
		cy.xpath(this.section_heading(sectionName))
        .should('be.visible')
	}
}