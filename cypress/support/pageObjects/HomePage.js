class HomePage {

    getEditBox() {
        return cy.get('input[name="name"]:nth-child(2)') // the "name" field
    }

    getTwoWayDataBinding() {
        return cy.get(':nth-child(4) > .ng-untouched')
        // the box at the end of the page which changes when we type in the name
        // shows same value as getEditBox()
    }

    getGender() {
        return cy.get('select')
    }

    getEntrepreneur() {
        return cy.get('#inlineRadio3')
    }

    getShopTab() {
        return cy.get(':nth-child(2) > .nav-link')
    }

}

export default HomePage