/// <reference  types="cypress" />
import 'cypress-iframe';

describe ("react-shopping-cart-testing", () => {
    beforeEach(() =>{
        cy.visit("https://react-shopping-cart-67954.firebaseapp.com/")
    })

    it("add items to cart", () => {
       
        //click add to cart button
        cy.get(".dwOYCh > .sc-124al1g-0").click()
       
        //popup cart page should appear
        cy.get(".sc-1h98xa9-4.hzlwTK")
            .should("be.visible");
        //closing popup cartpage
        cy.get(".sc-1h98xa9-0.gFkyvN").click()
       
        //popup cartpage should close
        cy.get(".sc-1h98xa9-4.hzlwTK")
            .should("not.exist");
        
    })

    it("add multiple items to cart", ()=>{
        //adding  two of same item
        for(let n = 0; n < 3; n++ ){
            cy.get(".dwOYCh > .sc-124al1g-0").click()
        }
    })

    it("checkout items", () => {
        cy.get("button", "Checkout").click()
    })

})