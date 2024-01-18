describe('SignUp Page Basic Test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/SignUp')
  })

  it('should display the SignUp form with necessary fields', () => {
      // Check if the SignUp form is present
      cy.get('form').should('exist').log('SignUp form is present')
  })



  
})
