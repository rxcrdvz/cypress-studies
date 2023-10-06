/// <reference types="cypress" />

describe("Multileve Dropdown Menu from https://qaplayground.dev/apps/multi-level-dropdown/#home", () => {

    it("vavlidate the multi-level menus items", () => {
        cy.visit("https://qaplayground.dev/apps/multi-level-dropdown/#home")
        cy.get(".navbar-nav").should("be.visible")
        cy.get(".nav-item").last().click()
        cy.get(".menu").should("be.visible")
        //first sub-menu
        cy.get(".menu > .menu-item").should(($items1) =>{
            expect($items1).have.length(3)
            expect($items1.eq(0)).to.contain('My Profile')
            expect($items1.eq(1)).to.contain('Settings')
            expect($items1.eq(2)).to.contain('Animals')
        })

        //second sub-menu
        cy.get(".menu-item").contains("Settings").click()
        cy.get(".menu-secondary-enter-done").should("be.visible")
        cy.get(".menu-secondary-enter-done > .menu-item").should(($items2) =>{
            expect($items2).have.length(5)
            expect($items2.eq(0)).to.contain('My Tutorial')
            expect($items2.eq(1)).to.contain('HTML')
            expect($items2.eq(2)).to.contain('CSS')
            expect($items2.eq(3)).to.contain('JavaScript')
            expect($items2.eq(4)).to.contain('Awesome!')
        })
        cy.get("h2").contains("My Tutorial").click()
        //third sub-menu
        cy.get(".menu-item").contains("Animals").click()
        cy.get(".menu-secondary-enter-done > .menu-item").should(($items3) =>{
            expect($items3).have.length(5)
            expect($items3.eq(0)).to.contain('Animals')
            expect($items3.eq(1)).to.contain('Kangaroo')
            expect($items3.eq(2)).to.contain('Frog')
            expect($items3.eq(3)).to.contain('Horse')
            expect($items3.eq(4)).to.contain('Hedgehog')
        })
    })
})