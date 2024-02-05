/// <reference types ="Cypress" />
describe('My first Test ',function()
{
it('My first testcase',function(){
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/#top");
    //checkbox UI selecting
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    //unchecking UI
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

    //select all checkboxes
    cy.get('input[type="checkbox"]').check(['option1','option2'])

    //dropdown static 
    cy.get('select').select('option2').should('have.value','option2')

    //dynamic dropdown
    cy.get('#autocomplete').type('Ame')
    cy.get('.ui-menu-item div').each(function($element,index,list){
        if($element.text()==="American Samoa"){
            $element.click()
        }
    })
    cy.get('#autocomplete').should('have.value','American Samoa')

    //visiblity and invisiblity handling
    cy.get('#displayed-text').should('be.visible')
    cy.get('#hide-textbox').click()
    cy.get('#displayed-text').should('not.be.visible')
    cy.get('#show-textbox').click()
    cy.get('#displayed-text').should('be.visible')


    //radio button handling
    cy.get('input[value="radio2"]').check().should('be.checked')
    


    
}

    
)
}
)