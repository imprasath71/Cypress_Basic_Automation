/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.origin('https://www.qaclickacademy.com',()=>{
        cy.get("#navbarSupportedContent a[href*='about']").click()
        cy.get('.mt-50 h2').should('contain','QAClick Academy ')
        

    })

 
   



    
}

    
)
}
)