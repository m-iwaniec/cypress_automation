/// <reference types = "Cypress" />

// neat-csv plugin
const neatCSV = require('neat-csv')
//import neatCSV from 'neat-csv'

//global variable
let productName

describe("JWT session test", function() {    

    it("is logged in through local storage", async() => {


    // set the token
        cy.LoginAPI().then(function() {

            
            // needs to resolve the promise because it is a custom command
            cy.visit(Cypress.env('url') + "/client", {
            //cy.visit('https://rahulshettyacademy.com/client/', {

                // set custom options
                onBeforeLoad : function(window) 
                { //js function

                    window.localStorage.setItem('token', Cypress.env('token'))
                    // retrieve and set token (before loading)
                }

            })

        })


        cy.wait(3000)
        
    // GET NAME OF THE PRODCUT    
        cy.get('.card-body b').eq(1).then(function(elem) {
            productName = elem.text()
        })


        cy.get(':nth-child(2) > .card > .card-body > .w-10').click()
        // cy.get('.card-body button:nth-last-of-type()).eq(1).click()
        cy.wait(3000)
        cy.get(':nth-child(3) > .card > .card-body > .w-10').click()

        cy.wait(3000)
        cy.get('[routerlink*="cart"]').click({force:true})

        cy.get('.subtotal > ul > :nth-child(3) > .btn').click()

        cy.wait(3000)
        //cy.get('div .form-group [class="input txt text-validated"]').type('gre')
        //cy.get('[placeholder="Select Country"]').type('gre')
        cy.get('.form-group > .input').type('gre')
        // cy.get('[placeholder*="Country"]').type('gre')
        cy.wait(3000)
        
    // find the country
        //cy.get('.ta-results .ng-star-inserted').each(($el, index, $list) => {
        
        // cy.get('.ta-results button').each(($el, index, $list) => {
        //     if($el.text === "Greenland") {
        //         cy.log(text)
        //         cy.wrap($el).click({force:true})
        //     }
        // })

        cy.get('.ta-results > :nth-child(5)').click({force:true})
        //cy.get('ta-results button').should('have.value', 'Greenland')
        //cy.get('.form-group').type('Greenland{enter}').should('have.value', 'Greenland')


        cy.get('.btnn').click({force: true})

        cy.wait(3000)
        //cy.contains('Click To Download Order Details in CSV').click({force:true})
        cy.get('.order-summary button').click({force:true})



    // handling the csv file

        // Cypress.config("fileServerFolder") = /home/martyna/cypress_automation/
        // cy.readFile('/home/martyna/cypress_automation/cypress/downloads/order-invoice_testmail.csv')
        cy.readFile(Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_testmail.csv')
        .then(async function(text) {

        // async and await come together
        const csv = await neatCSV(text)
        // creates js obj out of it
        console.log(csv)

        // csv[0].product Name - need to get rid of the space between the words (name of the property)
        // csv[0].productName would be fine
        const actualProductCSV = csv[1]["Product Name"]
        expect(productName).to.equal(actualProductCSV)
        
        })

        
        



    })

})