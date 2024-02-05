/// <reference types ="Cypress" />
/// <reference types ="cypress-iframe" />
import 'cypress-iframe';
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
    // cy.get('#courses-iframe').its('0.contentDocument.body').then(cy.wrap).xpath('//h1[text()="The iframe element"]').should('be.visible');
    cy.frameLoaded("#courses-iframe")

    cy.iframe().find("a[href*='mentorship']").eq(0).click()

    
}

    
)
}
)