import React from 'react'
import { SignUpTabItem, SignUpTabPanel, TwoFactorAuthForm } from '../components/SignUp/AuthComponents'
import { TextField } from '@mui/material'
import { mount } from 'cypress/react18'
import { Button } from '@aws-amplify/ui-react'

describe('<SignUpTabItem />', () => {
  it('renders with text', () => {
    const text = "Test Text"
    mount(<SignUpTabItem text={text} waiting={false} complete={false} />)
    cy.contains(text)
  })

  it('shows CircularProgress when waiting is true', () => {
    mount(<SignUpTabItem text="Waiting" waiting={true} complete={false} />)
    cy.get('.MuiCircularProgress-root').should('exist')
  })

  it('shows CheckCircle when complete is true', () => {
    mount(<SignUpTabItem text="Complete" waiting={false} complete={true} />)
    cy.get('.MuiSvgIcon-root').should('exist')
  })

  it('does not show CircularProgress and CheckCircle when both are false', () => {
    mount(<SignUpTabItem text="None" waiting={false} complete={false} />)
    cy.get('.MuiCircularProgress-root').should('not.exist')
    cy.get('.MuiSvgIcon-root').should('not.exist')
  })
})

describe('<SignUpTabPanel />', () => {
  it('renders content when value equals index', () => {
    mount(
      <SignUpTabPanel value={0} index={0}>
        <div data-cy="test-content">Test Content</div>
      </SignUpTabPanel>
    )
    cy.get('[data-cy=test-content]').should('be.visible')
  })

  it('hides content when value does not equal index', () => {
    mount(
      <SignUpTabPanel value={1} index={0}>
        <div data-cy="test-content">Test Content</div>
      </SignUpTabPanel>
    )
    cy.get('[data-cy=test-content]').should('not.exist')
  })

  it('handles input change', () => {
    mount(
      <SignUpTabPanel value={0} index={0}>
        <TextField data-cy="test-input" label="Test Input" />
      </SignUpTabPanel>
    )
    cy.get('[data-cy=test-input] input').type('Hello World')
    cy.get('[data-cy=test-input] input').should('have.value', 'Hello World')
  })

  it('handles button click', () => {
    const onClickSpy = cy.spy().as('onClickSpy')
    mount(
      <SignUpTabPanel value={0} index={0}>
        <Button data-cy="test-button" onClick={onClickSpy}>Test Button</Button>
      </SignUpTabPanel>
    )
    cy.get('[data-cy=test-button]').click()
    cy.get('@onClickSpy').should('have.been.calledOnce')
  })
})

describe('<TwoFactorAuthForm />', () => {
  it('renders', () => {
    const username = "testuser"
    const handleConfirmSignupMock = cy.stub().resolves({ signUpComplete: true })
    const onTfaSuccess = cy.stub()
    cy.mount(
      <TwoFactorAuthForm 
        username={username} 
        onTfaSuccess={onTfaSuccess} 
        handleConfirmSignup={handleConfirmSignupMock}
      />)
    cy.contains('Two-Factor Authentication').should('be.visible')
  })

  it('accepts input in the TFA code field', () => {
    const username = "testuser"
    const handleConfirmSignupMock = cy.stub().resolves({ signUpComplete: true })
    const onTfaSuccess = cy.stub()
    cy.mount(
      <TwoFactorAuthForm 
        username={username} 
        onTfaSuccess={onTfaSuccess} 
        handleConfirmSignup={handleConfirmSignupMock}
      />)
    cy.get('input').type('123456')
    cy.get('input').should('have.value', '123456')
  })

  it('calls onTfaSuccess when submit button is clicked', () => {
    const username = "testuser"
    const onTfaSuccess = cy.stub().as('onTfaSuccess')
    const handleConfirmSignupMock = cy.stub().resolves({ signUpComplete: true })

    cy.mount(
      <TwoFactorAuthForm 
        username={username} 
        onTfaSuccess={onTfaSuccess} 
        handleConfirmSignup={handleConfirmSignupMock}
      />
    )
    cy.get('input').type('123456')
    cy.get('button').click()
    cy.get('@onTfaSuccess').should('have.been.calledOnce')
  })
})