/// <reference types="cypress" />

describe('Calculate Your BMI',()=>{
    it('VALIDATE CALCULATE USING BMI', () => {
        cy.visit('https://fitbybeat.com/')
        cy.url().should('include','fitbybeat.com')
        cy.contains('Calculate Your BMI').should('be.visible')

        //input semua kolom
        cy.get('input[name="height"]').type('180')
        cy.get('input[name="weight"]').type('55')
        cy.get('input[name="age"]').type('30')
        cy.get('[name="sex"]').select('male',{force:true})
        cy.get('[name="activity_level"]').select('Little or no Exercise/ desk job',{force:true})
        cy.get(':nth-child(6) > .qodef-btn > .qodef-btn-text').click()

        cy.contains('You are Underweight!').should('be.visible')
    });
})