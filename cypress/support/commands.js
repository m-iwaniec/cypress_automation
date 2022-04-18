// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })

// add blackberry phone to the cart

Cypress.Commands.add('selectProduct', (productName ) => {
    cy.get('h4.card-title').each(($e1, index, $list) => {
                
        const text = $e1.text()

        if(text.includes(productName))
            {
                // cy.get(':nth-child(4) > .card > .card-footer > .btn').click()
                // button.btn.btn-info = tagname.class
                // cy.get('button.btn.btn-info').eq(3).click()
                cy.get('button.btn.btn-info').eq(index).click()
                
            }
    })
})

// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
