/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
    cy.get('tr td:nth-child(2)').each(($e1,index,$list) => {
            const text = $e1.text()
            if(text.includes('Master Selenium Automation in simple Python Language')){
                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                    const price_text = price.text()
                    expect(price_text).to.equal('25')
                })

            }
    cy.get('div.mouse-hover-content').invoke('show')
    cy.contains('Top').click()


    })
   
 
    
}
)
}
)