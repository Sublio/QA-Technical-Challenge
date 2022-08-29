const valid_credentials = {'email':'testdenis@mail.com', 'pass': 'testtest'}
const invalid_credentials = {'email': ' test@test.com', 'pass':'testpass'}

describe("Log in feature", () => {
    it("It should show an errror message in attempt to login with invalid credentials(Negative scenario)", () =>{
        cy.login(invalid_credentials.email, invalid_credentials.pass) //wrong credentials
        cy.get('.error-messages').should('be.visible')
    })

    it("It should be logged in succefully with existing credentials", () =>{
        cy.login(valid_credentials.email, valid_credentials.pass) // valid credential
        cy.get('ul > li:nth-child(4) > a').should('have.attr', 'href').and('include', 'Denis1260')
    })

    it('It should logout', ()=>{
        cy.login(valid_credentials.email, valid_credentials.pass) // valid credential
        cy.contains('Settings').click()
        cy.get('.btn').contains('logout.').click()
        cy.get('.nav-item:nth-child(3) > a').should('have.attr', 'href').and('include', '#register')
    })
})