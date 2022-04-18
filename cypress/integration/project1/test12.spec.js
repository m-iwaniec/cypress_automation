/// <reference types = "Cypress" />

import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


before(function() {
    cy.fixture('example').then(function(data) {
        this.data = data
    })
  })


describe("Eleventh test", function() {
    before(function() {
        cy.fixture('example').then(function(data) {
            this.data = data
        })
    })
    

    it("Eleventh test case", function() {

        const productPage = new ProductPage()

        
    })

})