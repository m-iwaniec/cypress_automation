/// <reference types = "Cypress" />

describe("Thirteenth test", function() {    

    it("Thirteenth test case", function() {

        cy.visit(Cypress.env('url') + "/angularAppdemo/")

        
        // cy.intercept({requestobject}, {responseobject}) - mock the response
        // cy.intercept(method, url, routeHandler) - mock the request
        cy.intercept("GET", "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty", 
        (req) => {
        req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"
        // modify the url

        //request gets sent to the server
        req.continue((res) => {

            // you get the response back
            // verify if the response starts with 403
            //expect(res.statusCode).to.equal(403)

            })

        }).as('dummyUrl')


        // gets triggered when user clicks on the library button
        cy.get('.btn-primary').should('have.text', ' Virtual Library ').click()

        cy.wait('@dummyUrl')


    })

})