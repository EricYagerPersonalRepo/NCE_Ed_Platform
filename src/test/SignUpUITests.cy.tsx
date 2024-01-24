import React, { useEffect, useRef } from 'react'
import { mount } from 'cypress/react18'
import { fetchCityState } from '../functions/AuthFunctions'
import { BirthdayInput, EmailInput, NameInput, PasswordInput, ZipInput } from '../components/SignUp'
import { useSignUpHooks } from '../state/SignUpHooks'


/**
 * Test Wrappers
 * 
 * TODO: Write a generic test wrapper that takes the component in 
 * so we don't have to write individual wrappers for each component
 */

export const BirthdayInputTestWrapper = ({ testData, testError }: any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setBirthday(testData)
    signUpHooks.setTabValue(0)

    if (testError) {
      signUpHooks.setError({ ...signUpHooks.error, ...testError })
    }
  }, [testData, testError, signUpHooks])

  return <BirthdayInput signUpHooks={signUpHooks} />
}

export const NameInputTestWrapper = ({ testData, testError }: any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setName(testData)
    signUpHooks.setTabValue(1)

    if (testError) {
      signUpHooks.setError({ ...signUpHooks.error, ...testError })
    }
  }, [testData, testError, signUpHooks])

  return <NameInput signUpHooks={signUpHooks} />
}

export const ZipInputTestWrapper = ({testData, testError}:any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setZipCode(testData)
    signUpHooks.setTabValue(2)

    if(testError){
      signUpHooks.setError({...signUpHooks.error, ...testError})
    }
  }, [testData, testError, signUpHooks])

  return(<ZipInput signUpHooks={signUpHooks} />)
}

export const EmailInputTestWrapper =  ({testData, testError}:any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setUsername(testData)
    signUpHooks.setTabValue(3)

  }, [testData, testError, signUpHooks])

  return(<EmailInput signUpHooks={signUpHooks} />)
}

export const PasswordInputTestWrapper = ({testData, testError}:any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setPassword(testData)
    signUpHooks.setTabValue(4)


    if(testError){
      signUpHooks.setError({...signUpHooks.error, ...testError})
    }else{
      signUpHooks.setFormComplete(true)
    }
  }, [testData, testError, signUpHooks])

  return(<PasswordInput signUpHooks={signUpHooks} />)
}

/**
 * Tests
 */

describe('<BirthdayInput />', () => {

  it('renders and interacts with the birthday input', () => {
    const testData = '2000-01-01'
    mount(<BirthdayInputTestWrapper testData={testData} />)
    cy.get('input[type="date"]').should('have.value', testData)
  })

  it('displays error message for birthday < 16 YOE', () => {
    const testData = {birthday: '2014-01-01'}
    mount(<BirthdayInputTestWrapper testData={testData.birthday}/>)
    cy.get('.MuiFormHelperText-root.Mui-error')
      .should('contain', 'You must be at least 16 years old to sign up.')
      .and('be.visible')
  })
})

describe('<NameInput />', () => {

  it('render input and accept name', () => {
    const testName = 'John Doe'
    mount(<NameInputTestWrapper testData={testName} />)
    cy.get('input[type="text"]').should('have.value', testName)
  })

  it('validates correct name input', () => {
    const testName = 'John Doe'
    mount(<NameInputTestWrapper testData={testName} />)
    cy.get('button').contains('Done').click()
  })

  it('shows error message for invalid name input', () => {
    const testName = 'John'
    const testError = { name: "Please enter full name. Example: John Doe" }
    mount(<NameInputTestWrapper testData={testName} testError={testError} />)
    cy.get('#component-error-text').should('contain', 'Please enter full name. Example: John Doe')
  })
})


describe('<Zip Code Input />', () => {
  const baseUrl = 'https://api.zippopotam.us/us/'
  const validZip = "13630"
  const invalidZip = "99999"

  it('renders the zip code input and accepts zip', () => {
    mount( <ZipInputTestWrapper testData={validZip} />)
    cy.get('input[placeholder="Zip Code"]').type(validZip)
    cy.get('#zip-code-input').should('have.value', validZip)
  })

  it('fetches city and state for a valid ZIP code', () => {
    const mockResponse = {
      places: [{ 'place name': 'SomeCity', 'state': 'SomeState' }]
    }

    cy.intercept('GET', `${baseUrl}${validZip}`, mockResponse).as('getCityState')

    // Call your function here. Ensure that fetchCityState is imported and can be called within the test context.
    fetchCityState(validZip).then((result) => {
      expect(result.City).to.equal('SomeCity')
      expect(result.State).to.equal('SomeState')
    })

    cy.wait('@getCityState').its('response.statusCode').should('eq', 200)
  })
})


describe('<EmailInput />', () => {

  it('render input and accept email', () => {
    const testEmail = 'xxx@xxx.com'
    mount(<EmailInputTestWrapper testData={testEmail} />)
    cy.get('input[type="text"]').should('have.value', testEmail)
  })

  it('validates correct email input', () => {
    const testEmail = 'xxx@xxx.com'
    mount(<EmailInputTestWrapper testData={testEmail} />)
    cy.get('button').contains('Done').click()
  })

  it('shows error message for invalid email input', () => {
    const testEmail = 'xxx'
    const testError = { email: "Invalid Email" }
    mount(<EmailInputTestWrapper testData={testEmail} testError={testError} />)
    cy.get('button').contains('Done').click()
    cy.get('#component-email-error-text').should('contain', 'Please enter a valid email address. Example: joe@example.com')
  })
})

describe('<PasswordInput />', () => {
  it('renders the password input fields', () => {
    mount(<PasswordInputTestWrapper testData="" />)
    cy.get('#standard-adornment-password').should('exist')
    cy.get('#standard-adornment-confirm-password').should('exist')
  })

  it('toggles password visibility', () => {
    mount(<PasswordInputTestWrapper testData="" />)

    cy.get('#standard-adornment-password').should('have.attr', 'type', 'password')
    cy.get('#standard-adornment-confirm-password').should('have.attr', 'type', 'password')
    cy.get('#standard-adornment-password + div button').click()
    cy.get('#standard-adornment-password').should('have.attr', 'type', 'text')
    cy.get('#standard-adornment-confirm-password + div button').click()
    cy.get('#standard-adornment-confirm-password').should('have.attr', 'type', 'text')
  })

  it('enables sign-up button when form is complete', () => {
    const testData = 'ValidPassword123!'
    mount(<PasswordInputTestWrapper testData={testData} />)
    cy.get('#standard-adornment-password').type(testData)
    cy.get('#standard-adornment-confirm-password').type(testData)
    cy.get('button').contains('Sign Up').should('not.be.disabled')
  })

  it('attempts sign-up with valid password', () => {
    const testData = 'ValidPassword123!'
    mount(<PasswordInputTestWrapper testData={testData} />)
    cy.get('#standard-adornment-password').type(testData)
    cy.get('#standard-adornment-confirm-password').type(testData)

    cy.get('button').contains('Sign Up').click()
  })

})
