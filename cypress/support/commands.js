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


// custom command for login credentials

Cypress.Commands.add('LoginAPI', () => {
    
    cy.request("POST", "https://rahulshettyacademy.com/api/ecom/auth/login", {"userEmail":"testmail@testmail.com","userPassword":"Test12345!"})
    .then(function(response) {
    // request(method, url, payload)
    // network -> payload -> view source
    
    // then catch the response
    expect(response.status).to.eq(200)

    Cypress.env('token', response.body.token);
    // env value = Cypress.env(key value, actual value)
    // token is now available in the whole project
    // token needs to be injected into the browser

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
