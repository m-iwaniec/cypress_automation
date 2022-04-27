/// <reference types = "Cypress" />

import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";


Given("I open the page", () => {
    cy.visit(Cypress.env('url') + '/angularpractice/')
})



When("I add the products to the cart", function() {
    const homePage = new HomePage()    
    const productPage = new ProductPage()
    homePage.getShopTab().click()
    cy.selectProduct('Samsung')

    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })
    productPage.checkOutButton().click()
})



And("Validate the total of the prices", () => {
    var sum = 0
    cy.get('tr > :nth-child(4) > strong').each(($el, index, $list) => {

        const amount = $el.text()
        var res = amount.split(' ')
        res = res[1].trim()
        cy.log(res)
        sum = Number(sum) + Number(res)

    }).then(function(){    
        cy.log('The total is: ' + sum)
        cy.get('h3 strong').should('include.text', sum)
    })         

    cy.get('h3 strong').then(function(element) { 
        element.text()
        const amount = element.text()         
        var res = amount.split(' ')        
        var total = res[1].trim()          
        expect(Number(total)).to.equal(sum)
    })

})



Then("I select the country, sumbit, and verify the success message", () => {
    
    cy.get('.alert').then(function(element) {
        const actualText = element.text()
        expect(actualText.includes("Success")).to.be.true
    })
})


When("I fill the form details", function(dataTable) {
    // FROM .FEATURE FILE:
    // |name | gender | row 0
    // |sam  | female | row 1

    // [name, gender], [sam, female]
    //    0 index,       1 index

    nameForForm = dataTable.rawTable[1][0]
    genderForForm = dataTable.rawTable[1][1]
    // homePage.getEditBox().type(dataTable.rawTable[1][0])
    homePage.getEditBox().type(nameForForm)
    //homePage.getGender().select(dataTable.rawTable[1][1])
    homePage.getGender().type(genderForForm)

})


Then("Validate the form's behaviour", () => {
    homePage.getTwoWayDataBinding().should('have.value', nameForForm)
    homePage.getEditBox().should('have.attr', 'minlength', 2)
    homePage.getEntrepreneur().should('be.disabled')
})


And("I select the shop page", () => {
    homePage.getShopTab().click()
})
