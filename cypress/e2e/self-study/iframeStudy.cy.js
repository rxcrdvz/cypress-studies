/// <reference types="cypress" />
import 'cypress-iframe';

describe("click button inside iframe from https://qaplayground.dev/apps/iframe/", () => {

    it("click the button inside the iframe", () => {
        //visit the website
        cy.visit("https://qaplayground.dev/apps/iframe/")
        //access the iframes
        cy.enter("#frame1").then( getBody => {
            getBody().find("#frame2")
                .its("0.contentDocument")
                .its("body").within(() =>{
                    cy.get(".btn-green-outline").click()
                    cy.get("#msg").should("be.visible")
                })
        })
    })



})