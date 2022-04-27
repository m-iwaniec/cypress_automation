/// <reference types = "Cypress" />

describe("First test", function() {
    it("First test case", function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        cy.get(".search-keyword").type("ca")
        // cypress acts like findElement in selenium
        cy.wait(2000)

// method 1 

        cy.get('.product:visible').should('have.length', 4)
        // :visible is a pseudo selector to find ONLY visible elements

        cy.get('.products').find('.product').should('have.length', 4)
        // products is a parent to product class

        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        // .eq(2) is a selector to find the third element in the list (Capsicum)

// method 2

        cy.get('.products').find('.product').each(($el, index, $list) => {
            // a loop
            const textVeg = $el.find('h4.product-name').text()
            // $el = product
            // h4.product-name to find only 4 elements
            if(textVeg.includes('Cashews')) {
            // the loop will run until it finds cashews (4th product)
            
            // there is only one button for cashews, so:
            cy.wrap($el).find('button').click()
            // have to wrap to click when using find
             
            } else {
                cy.log('could not find "Cashews"')
              }

            // the code will iterate until finds cashews and then click on button
        
          })

          cy.get('.brand').then(function(logoelement)
          {
            // cy.get('.brand') = promise is resolved by .then() and resolve variable = (function(logoelement)
            cy.log(logoelement.text())
            

            // const logo = cy.get('.brand')
            // here promise would get confused, handle it manually as above
            // BECAUSE VARIABLE IS NOT CYPRESS, cannot resolve promise (like find() or thn() can)
            // text() is not a cyress command (but jQuery)

            // cy.log(logo.text())
            // would throw an error = 'logo.text is not a function'

            // const logo = cy.get('.brand')
            // cy.get('.brand').text()
            // this could resolve the promie but text() is not cypress method
            // cy.get(...).text is not a function
          })

            // if a cypress command has a child thats not cypress, the child can resolve the promise and then accept the parent input

            cy.get('.products').as('productLocator')
            cy.get('@productLocator').find('.product').should('have.length', 4)
            console.log('TEST printing at the start of the test')
            
            cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
              cy.log('clicked on ADD TO CART - cy.log()')
              console.log('clicked on ADD TO CART - console.log')
              // will print this console.log in sequence, after executing the command (not right away at the start of the test)
          })

            cy.get('.brand').should('have.length', 1)
            cy.get('.brand').should('have.text', 'GREENKART')
            // assert if logo element is correctly displayed
            // should belongs to cy library

    })

})