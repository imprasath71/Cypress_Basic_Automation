/// <reference types ="Cypress" />
import checkoutPage from "../pageObjects/Check_out_Page"
import HomePage from "../pageObjects/Home_Page"
import ProductPage from "../pageObjects/Product_Page"
describe('My first Test ',function(){
   
        before(function() {
            // Steps which need to be executed before all tests
            cy.fixture('example').then(function(data){
                this.data = data
            })
          })
        it('My First Test Suite',function(){

            
            cy.visit('https://rahulshettyacademy.com/angularpractice/')

            //Object for HomePage class 
            const homePage = new HomePage()
            //Object for ProductPage Class
            const productPage = new ProductPage()
            //Object for checkout class
            const CheckOutPage  = new checkoutPage()
            homePage.getEditBox().type(this.data.name)
            //Male Gender
            homePage.getGender().select(this.data.gender)
            //Name and Two way data binding validation
            homePage.getTwoWayDataBinding().should('have.value',this.data.name)
            //minlength attribute validation
            homePage.getEditBox().should('have.attr','minlength','2')
            //disabled check 
            homePage.getRadioButton().should('be.disabled')

            //Shop Navigation
            homePage.getShopTab().click()


            


    
            //selectProduct is custom cypress commmand Refer commands.js 
            //cy.selectProduct('Blackberry')

            //Array Iteration in JS For selecting multiple products stored in example.json

            this.data.productName.forEach(function(element) {
                console.log(element)
                cy.selectProduct(element)
            });

            productPage.getCheckOutButton().click()
            let count = 0

            cy.get('.table-hover .col-sm-1:nth-child(4)').each(($element,index,$list)=>{

                const Product_price = $element.text()
                let product_price_int_value = parseInt(Product_price.replace(/\D/g, ''));
                count = count+product_price_int_value
                
             }).then(function(){
                cy.log(count)
             })
             cy.get('.text-right h3').then(function($element){
                const Product_Sum = $element.text()
                let Product_Sum_int_value = parseInt(Product_Sum.replace(/\D/g, ''))
                cy.log(Product_Sum_int_value)
                cy.log(count)
                expect(count).to.be.equal(Product_Sum_int_value)
             })
             

            // CheckOutPage.getCheckoutButton().click()
           

            // //dynamic dropdown
            // cy.get('#country').type('India')
            // cy.wait(9000)
            // cy.get('.suggestions > ul > li > a').click()

            // cy.get("#checkbox2").click( {force:true} )
            // cy.get('.btn-success').click()

            // cy.get('.alert').then(function(element){
            //     const actualText = element.text()
            //     expect(actualText.includes("Success")).to.be.true

            // })

            
        
            
        



        })


    }
)