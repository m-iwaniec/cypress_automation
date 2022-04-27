/// <reference types = "Cypress" />

describe("Twelfth test", function() {    

    it("Twelfth test case", function() {

        cy.visit(Cypress.env('url') + "/angularAppdemo/")

        
    // intercept() method - Spy and stub network requests and responses.

        // cy.intercept({requestobject}, 
        // {responseobject})
        cy.intercept({
            method : "GET",
            url : "https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty"
        },
        {
            // mock the response
            statusCode : 200,
            body : [
                {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            },
            {
                "book_name": "RestAssured with Java",
                "isbn": "RSU",
                "aisle": "2301"
            }
        ]

        }).as('bookretrievals')

        cy.get('.btn-primary').should('have.text', ' Virtual Library ').click()

        cy.wait('@bookretrievals').should(({request, response}) => {
        // access the response with should
        // length of response array = rows of the table

            cy.get('tr').should('have.length', response.body.length + 1)
            // one row + header = 2
            response.body.length

        })

        // cy.get('p').should('have.text', 'Oops only 1 Book available')
    })

})