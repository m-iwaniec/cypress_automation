/// <reference types = "Cypress" />

describe("Eighth test", function() {


    // BEFORE
    before(function() {
        // runs before all tests in the block

        cy.fixture('example').then(function(data) {
            // Load a fixed set of data located in a file
            // cy.fixture('name of the file')

            this.data = data
        // when using fixtures, you cannot access it later outside this function, so make it global
        // usually, first use as(), then this.something = something

        })
    })


    it("Eighth test case", function() {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        
        // 'input[name="name"]' - 2 elements matching the selector
        // cy.get('form input form-control:nth-child(1)').type('Bob') - doesnt work?
        
        // cy.get(':nth-child(1) > .form-control').type('Bob')
        // above is ok, but sometimes its tricky with classnames bc they can change depending on the input
        cy.get('input[name="name"]:nth-child(2)')

        .type(this.data.name)
        // using fixtures (this. indicates its global variable)
        // or .type('Bob')

        .should('have.value', 'bob')
        .should('have.value', this.data.name)

        // asserting the same element, but with different locator:
        // cy.get(':nth-child(1) > .form-control').should('have.value', 'bob').should('have.value', this.data.name)


    // MIN LENGTH
        .should('have.attr', 'minlength', '2')
        // minlength is an attribute in dom
        // can also do this using .prop() and resolving the promise
        // e1.prop('minlength'
        

        cy.get('select')
        // tagname select
        .select(this.data.gender)
        // using fixtures or .select('Male')
        // method select() for dropdown menu
        .should('have.value', 'Male')
        .should('have.value', this.data.gender)



        cy.get(':nth-child(2) > .form-control')
        .type(this.data.email)
        .should('have.value', 'hello@cypress.io')
        .should('have.value', this.data.email)



        cy.get('#exampleInputPassword1')
        .type(this.data.password)
        .should('have.value', 'ABC123abc!')
        .should('have.value', this.data.password)


        // check
        cy.get('#exampleCheck1')
        .should('not.be.checked')
        .check()
        .should('be.checked')


        // radio
        cy.get('input[name="inlineRadioOptions"')
        .should('not.be.checked')
        .check(['option2'])
        
        // the rest of radio assertions
        cy.get('[value="option2"]')
        .should('be.checked')
        cy.get('[value="option1"]')
        .should('not.be.checked')
        cy.get('[value="option3"]')
        .should('not.be.checked')

        // disabled radio (or could be invisible - should('be.invisible'))
        cy.get('#inlineRadio3').should('be.disabled')


    // CALENDAR
        //cy.get(':nth-child(8) > .form-control').click().type('1999-12-10')
        cy.get('input[type="date"').click().type('1999-12-31')

        cy.contains('Submit').click()

        
        cy.get('.alert').then(function(element) {

            const alertText = element.text()
            
            if(alertText.includes('Success')) {
                cy.log('found "sucsess"!')

             } else {
                 cy.log('did not find "success"')
             }

            // expect(alertText.includes("Success")).to.be.true

 
        })        

    })
})