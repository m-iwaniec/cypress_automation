/// <reference types = "Cypress" />

describe("Second test", function() {
    it("Second test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
// CHECKBOX / RADIO
        // use check() or click()

        cy.get('#checkBoxOption1')
        .check()
        // check a checkbox/radio,
        .should('be.checked')
        .and('have.value','option1')
        // assert

        cy.get('#checkBoxOption1')
        .uncheck()
        .should('not.be.checked')
        // check if unchecked

        // to check all checkboxes, find common property (e.g. type)
        // its 'input[type="checkbox"'
        // then, put it in cypress selector tool and see if all chosen boxes become checked
        cy.get('input[type="checkbox"')
        .check()
        .uncheck()
        // checks/unchecks all of them

        cy.get('input[type="checkbox"')
        .check(['option2', 'option3'])
        // signals what value (box) is to be checked
        // .check(['value', 'value'])

        // check specific value for radio button
        cy.get('[value="radio2"]')
        .check()
        .should('be.checked')


// STATIC DROPDOWN

        cy.get('select')
        .select('option2')
        // tagname select is for static dropdowns
        // .select('value')
        .should('have.value', 'option2')      
        // checks if option 2 is selected
        // .should('have.value', 'option1') - fails

// DYNAMIC DROPDOWN

        cy.get('#autocomplete').type('new')
        // check what sequence of characters (in cypress browser) captures all of the displayed options
        
        cy.get('.ui-menu-item div').each(($el, index, $list) => {
            // .class space tagname = common name for elements on dynamic dropdown menu
            // loop through the elements
           if($el.text() === "New Zealand")
           // text() is jQery, so must solve the promise manually
              {
                cy.wrap($el).click()
            } // else {
            //       cy.log('could not find "New Zealand"')
            //   }
        })
        cy.get('#autocomplete').should('have.value', 'New Zealand')


// HANDLING VISIBLE AND INVISIBLE ELEMENTS

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')        
    })

})
