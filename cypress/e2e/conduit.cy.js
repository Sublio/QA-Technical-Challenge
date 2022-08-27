describe("Log in feature", () => {
    it("It should show wrong email/pass with using not registered credentials(Negative scenario)", () =>{
        cy.login('test@testcom', 'testpass') //wrong credentials
        cy.get('.error-messages').should('be.visible')
    })

    it("It should be logged in succefully with existing credentials", () =>{
        cy.login('testdenis@mail.com', 'testtest') // valid credential
        cy.get('ul > li:nth-child(4) > a').should('have.attr', 'href').and('include', 'Denis1260')
    })

    it('It should do smth', ()=>{
        cy.log('Test');
    })
})