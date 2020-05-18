describe("Title", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("successfully loads", () => {
      cy.visit('http://localhost:3000')
    })
  })