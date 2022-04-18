/// <reference types = "Cypress" />

describe("Fourth test", function() {
    it("Fourth test case", function() {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
       

// COLUMNS / TABLES

        // find the column you want (chropath)
        // tr td:nth-child(2) is the whole column
        cy.get('tr td:nth-child(2)').each(($e1, index, $list) => {
                // parent - child

            const text = $e1.text()
            // $ is every iteration

            if(text.includes('Resume'))
              {
                cy.get('tr td:nth-child(2)')
                // siblings

                .eq(index)

                .next()
                // find the column and row you say, then move to the next colum in that row
                // moves to a silbing of an element

                .then(function(price){
                    const priceText = price.text()
                    expect(priceText).to.equal('0')
                })
            
            } //    else {
            //     cy.log('could not find the text you were looking for')
            // }

        })
    })
})