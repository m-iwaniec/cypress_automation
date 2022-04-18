/// <reference types = "Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


before(function() {
    cy.fixture('example').then(function(data) {
        this.data = data
    })
  })



describe("Tenth test", function() {

    before(function() {

        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    

    it("Tenth test case", function() {

        Cypress.config('defaultCommandTimeout', 10000)
        // to override cypress.json GLOBALLY


        
        // new folder = pageObjects, HomePage.js
        // HomePage.js needs to be imported

        const homePage = new HomePage()
        // created an object for new class
        
        const productPage = new ProductPage()



        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        homePage.getEditBox().type(this.data.name)
        homePage.getGender().select(this.data.gender)
        homePage.getTwoWayDataBinding().should('have.value', this.data.name)
        homePage.getEditBox().should('have.attr', 'minlength', 2)
        homePage.getEntrepreneur().should('be.disabled')
        homePage.getShopTab().click()


        cy.selectProduct('Samsung')
        cy.log('Added one Samsung phone')


        


        this.data.productName.forEach(function(element){

            cy.selectProduct(element)
        })


        productPage.checkOutButton().click()
        cy.get(':nth-child(6) > :nth-child(5) > .btn').click()


        cy.get('#country').type('Ind')
        // make sure it doesnt timeout before 'India' shows up
        // defaultCommandTimeout in cypress.json (for the whole framework)
        // to override defaultCommandTimeout:
        // Cypress.config('defaultCommandTimeout', 10000)
        // declare it before a specific action for it to start working from this moment
        // from now until the test is finished


        cy.contains('India').click()
        cy.get('#country').should('have.value', 'India')

        // cy.get('#checkbox2').click({force:true})
        cy.get('.checkbox').click()
        cy.get('input[type="checkbox"]').should('be.checked')
        cy.get('.ng-untouched > .btn').click()
        

    // REGEX
        // cy.get('.alert').should('have.text', '''\n          ×\n          Success! Thank you! Your order will be delivered in next few weeks :-).\n        ''')
        // use regex instead because of spaces and \n

        cy.get('.alert').then(function(element) {

           const actualText = element.text()

           // if(actualText.includes('Sucess')) {
            // }

        // ALTERNATIVELY, USE AN ASSERTION
            expect(actualText.includes("Success")).to.be.true
            // syntax: expect(true).to.be.true

        })        

        // same as
        // cy.contains('Success! Thank you! Your order will be delivered in next few weeks :-)').should('be.visible')
        // or just cy.contains('Success!')
  
    }) 

})