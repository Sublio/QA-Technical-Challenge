describe("Simple api test", () => {
    it("It should get 200 response on baseURL healthcheck request)", () =>{

        cy.request({
            method: 'GET', 
            url: 'https://react-redux.realworld.io', 
          }).then( ({ status }) => {
            expect(status).to.eq(200)
          })
    })
})