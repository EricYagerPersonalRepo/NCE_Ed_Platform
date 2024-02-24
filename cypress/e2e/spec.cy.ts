describe('SignUp Page Basic Test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/SignUp')
  })

  it('should display the SignUp form with necessary fields', () => {
      // Check if the SignUp form is present
      cy.get('#sign-up').should('exist').log('Sign-up container is present')
      cy.get('form').should('exist').log('SignUp form is present')
  })
})

describe('SignIn Page Basic Test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/LogIn')
  })

  it('should display the LogIn form with necessary fields', () => {
        cy.get('#user-name').should('exist').log('User name field is present')
        cy.get('#password').should('exist').log('Password field is present')
  })
}) 
