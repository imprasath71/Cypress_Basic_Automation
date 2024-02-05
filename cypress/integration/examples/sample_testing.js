/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    cy.contains('Click for JS Alert').click()


    //confirm alert
    cy.contains('Click for JS Confirm').click()
    cy.on("window.confirm",(t)=>{
        expect(t).to.equal("I am a JS Confirm")
    });
    



}
)
}
)