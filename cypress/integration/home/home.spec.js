describe("Title", () => {
    beforeEach(() => {
        cy.visit('/')
    })
    it("successfully loads image for movie", () => {
      cy.visit('http://localhost:3000')
      cy.get('div[class=poster]').find("img").should('be.visible')
    })
  })