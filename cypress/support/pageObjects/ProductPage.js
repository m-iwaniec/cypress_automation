class ProductPage {

    checkOutButton() {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link') // checkout button
    }
}
    
export default ProductPage