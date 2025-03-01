/// <reference types="cypress" />

describe('Test Case FE testing Aplikasi Pinterest',() =>{
    beforeEach(()=>{
        cy.visit('https://id.pinterest.com/login/')
    })
    it('Test Username bener & password benar => harus sukses login', () => {
       cy.get('#email').type('ilhamwafiq107@gmail.com')
       cy.get('#password').type('@Facebook123')
      cy.get('[data-test-id="registerFormSubmitButton"] > .oRi > .RCK').click()

      //verifikasi berhasil login
      cy.get('input').should('be.visible')
       // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
    });

    it('Test Username bener & password salah => harus gagal login', () => {
        cy.get('#email').type('ilhamwafiq107@gmail.com')
        cy.get('#password').type('salah')
       cy.get('[data-test-id="registerFormSubmitButton"] > .oRi > .RCK').click()

       //verifikasi gagal login
       cy.contains('The password you entered is incorrect.').should('be.visible')
       // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
      
    });

    it('Test Username salah & password benar => harus gagal login', () => {
        cy.get('#email').type('johnson@gmail.com')
        cy.get('#password').type('@Facebook123')
       cy.get('[data-test-id="registerFormSubmitButton"] > .oRi > .RCK').click()

       //verifikasi gagal login
       cy.contains('We noticed some strange activity on your account.').should('be.visible')
       // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
       
    });

    it('Test Username salah & password salah => harus gagal login', () => {
        cy.get('#email').type('johnson@gmail.com')
        cy.get('#password').type('@Eduwork')
       cy.get('[data-test-id="registerFormSubmitButton"] > .oRi > .RCK').click()

       cy.contains('We protected your account').should('be.visible')
       // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
       
    });

    it('Test Forgot password & email sudah terdaftar => akan terima email update password', () => {
        cy.get('.X8m > .nrl').click()
        cy.url().should('include','/password/reset/')

        cy.get('#userQuery').type('ilhamwafiq {enter}')
       cy.get(':nth-child(1) > .hjq > .sAJ').click()
       cy.contains('This is me').click()
       cy.url().should('contain','/password/reset/')
       cy.contains('Email sent').should('be.visible')
       // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
       
    });

    it('Test Forgot password & email belum terdaftar => tidak akan terima email update password', () => {
        cy.get('.X8m > .nrl').click()
        cy.url().should('include','/password/reset/')

        cy.get('#userQuery').type('johnsonsadam {enter}')
        cy.contains("Hmm, we couldn't find an account with that info.").should('be.visible')
        cy.url().should('contain','/password/reset/')
        // Pastikan data login sudah dihapus
    cy.clearCookies();
    cy.clearLocalStorage();
        

    });

    afterEach(()=>{
      cy.clearAppState(); // Membersihkan semua state

    });
   
});