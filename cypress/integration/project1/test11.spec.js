/// <reference types = "Cypress" />

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

        cy.visit(Cypress.env('url') + '/angularpractice/shop/')

        this.data.productName.forEach(function(element){
            cy.selectProduct(element)
        })

        productPage.checkOutButton().click()

    
    // ADDING UP THE PRICES

        var sum = 0

        // get total for each product
        // or cy.get('tr td: nth-child(4) strong')

        cy.get('tr > :nth-child(4) > strong').each(($el, index, $list) => {

            const text = $el.text()        // $ is every iteration

            // if(text.includes('₹')) {
                
            //cy.log($el.text())    
            // ₹. 50000 is a string
            // need to remove the whitespace, dot and ₹ 
            // then convert to an integer

            const amount = $el.text()
            var res = amount.split(' ')
            // split te string based on whitespace
            // res[0] = ₹.
            // res[1] = 5000
            res = res[1].trim()

            cy.log(res)
            // now it is getting integers
            
            sum = Number(sum) + Number(res)


            // })    


        }).then(function(){     // resolve the promise
            // bc of this, sum will no longer be printed as 0 (it would be still bc cypress is asynchr)

            cy.log('The total is: ' + sum)
            cy.get('h3 strong').should('include.text', sum)

        })         

        cy.get('h3 strong').then(function(element){ 

            element.text()
        
            const amount = element.text()         // store it
            var res = amount.split(' ')           // split
            var total = res[1].trim()            // trim

            expect(Number(total)).to.equal(sum)

        })
  
    }) 

})