describe('SignUp Page Basic Test', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/SignUp')
  })

  it('should display the SignUp form with necessary fields', () => {
      // Check if the SignUp form is present
      cy.get('#sign-up').should('exist').log('Sign-up container is present')
      cy.get('form').should('exist').log('SignUp form is present')
      /* ==== Generated with Cypress Studio ==== */
      cy.get('#standard-adornment-name-noerror').type('eric.p.yager@gmail.com');
      cy.get('.MuiInputAdornment-root > .MuiButtonBase-root').click();
      cy.get('#standard-adornment-password').clear();
      cy.get('#standard-adornment-password').type('$ocAdmin12');
      cy.get('#standard-adornment-confirm-password').clear();
      cy.get('#standard-adornment-confirm-password').type('$ocAdmin12');
      cy.get(':nth-child(3) > .MuiButtonBase-root').click();
      /* ==== End Cypress Studio ==== */
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

/**
 * Note: Significantly more work is necessary in here. This just makes sure it loads. E2E test needs to 
 * incorporate creation of a test user, sign in for the test user, and removal of the test user.
 */