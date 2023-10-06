/// <reference  types="cypress" />

describe ("Scroll to find the button from https://qaplayground.dev/apps/covered/", () => {
    it("scroll  to find the button", () => {
        cy.visit("https://qaplayground.dev/apps/covered/")
        cy.get("#info").should("be.visible")
        cy.wait(3000)
        cy.get("#fugitive").scrollIntoView().click()
        cy.wait(3000)
        cy.get("#info").should("have.text", "Mission accomplished").scrollIntoView()
    })
})