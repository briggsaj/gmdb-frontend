describe("Home page", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("header contains react", () => {
      cy.get('.App-header').should('contain', 'React')
    })
  })