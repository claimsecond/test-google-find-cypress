/// <reference types="cypress" /> 


describe('Google search with "cypress" typed in and go to the first result', () => {
    it('Goes to Google, types "cypress" and workout the output', () => {
        cy.visit("https://google.com/ncr")
            .get('[name=q]')
            .type('cypress github{enter}')
        cy.wait(10000)
        cy.get('#rso>div').children().should('be.visible')
        cy.get('#rso>div').children().should('have.length.at.least', 6)
        cy.get('#rso>div').then(els => {
            cy.get(els[0].querySelector('a')).click()
        })
        cy.wait(10000) 
        cy.origin("https://github.com/cypress-io/cypress", () => {
            cy.get('title').should('have.text', 'GitHub - cypress-io/cypress: Fast, easy and reliable testing for anything that runs in a browser.')
        })  
    })
})