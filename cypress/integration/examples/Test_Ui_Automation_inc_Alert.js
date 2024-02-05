/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");

    //radio button handling
    cy.get('input[value="radio2"]').check().should('be.checked')

    //alert button handling

    cy.get('#alertbtn').click()
    // cy.get('#confirmbtn').click()
    cy.on('window:alert',(str)=>{
        expect(str).to.equal('Hello , share this practice page and share your knowledge')
    })

    cy.on('window:confirm',(str)=>{
        expect(str).to.equal('Hello , Are you sure you want to confirm?')
    })




    
}

    
)
}
)