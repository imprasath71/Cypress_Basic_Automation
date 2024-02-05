/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/");
    cy.get('.search-keyword').type("Ca")
    cy.wait(2000)
    // //assertions
    // cy.get('.product:visible').should('have.length',4)
    
    //aliasing in cypress
    cy.get('.products').as('productLocator') 

    //parent child chaining
    cy.get('@productLocator').find('.product').should('have.length',4)
    //click on 2nd product
    cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
    cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()
    





    // cy.get('@productLocator').find('.product').each(($e1,index,$list) => {
    //     const text = $e1.find('h4.product-name').text()
    //     if (text.includes("Cashews")){
    //         cy.wrap($e1).find('button').click()
    //     }
    // })

    // //assertion
    // cy.get('.brand').should('have.text','GREENKART')
    // //here we have to manually handle the promise statement because non cypress things come into place when 
    // // saving it to other variable. 

    // cy.get('.brand').then(function(logotext){
    //     cy.log(logotext.text())
    // })

    
}

    
)
}
)