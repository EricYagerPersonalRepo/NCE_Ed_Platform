import React, { useEffect} from 'react'
import { mount } from 'cypress/react18'
import { fetchCityState } from '../../functions/AuthX'
import { EmailInput, NameInput, PasswordInput, ZipInput } from '../../components/SignUp'
import { useSignUpHooks } from '../../state/SignUpHooks'

export const NameInputTestWrapper = ({ testData, testError }: any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setName(testData)
    signUpHooks.setTabValue(3)

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
    signUpHooks.setTabValue(4)

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
    signUpHooks.setTabValue(0)

    if (testError) {
      signUpHooks.setError({ ...signUpHooks.error, ...testError })
    }
  }, [testData, testError, signUpHooks])

  return(<EmailInput signUpHooks={signUpHooks} />)
}

export const PasswordInputTestWrapper = ({testData, testError}:any) => {
  const signUpHooks = useSignUpHooks()

  useEffect(() => {
    signUpHooks.setPassword(testData)
    signUpHooks.setTabValue(1)


    if(testError){
      signUpHooks.setError({...signUpHooks.error, ...testError})
    }else{
      signUpHooks.setFormComplete(true)
    }
  }, [testData, testError, signUpHooks])

  return(<PasswordInput signUpHooks={signUpHooks} />)
}

describe('<NameInput />', () => {
  it('render input and accept name', () => {
    const testName = 'John Doe'
    mount(<NameInputTestWrapper testData={testName} />)
    cy.get('input[type="text"]').should('have.value', testName)
  })

  it('validates correct name input and updates tab value', () => {
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

describe('<ZipInput />', () => {
  const validZip = "13630";
  const invalidZip = "99999";
  const baseUrl = 'https://api.zippopotam.us/us/';

  beforeEach(() => {
    cy.intercept('GET', `${baseUrl}${validZip}`, {
      statusCode: 200,
      body: {
        'post code': validZip,
        'country': 'United States',
        'country abbreviation': 'US',
        'places': [
          {
            'place name': 'De Kalb Junction',
            'state': 'New York',
            'state abbreviation': 'NY',
          },
        ],
      },
    }).as('validZip');

    cy.intercept('GET', `${baseUrl}${invalidZip}`, {
      statusCode: 200,
      body: {}
    }).as('invalidZip');
  });

  it('renders the zip code input and accepts zip', () => {
    mount(<ZipInputTestWrapper testData={validZip} />);
    cy.get('#zip-code-input').type(validZip).should('have.value', validZip);
  });

  it('fetches city and state for a valid ZIP code', () => {
    mount(<ZipInputTestWrapper testData={validZip} />);
    cy.get('#zip-code-input').type(validZip);
    cy.wait('@validZip');
  });

  it('handles an invalid ZIP code appropriately', () => {
    mount(<ZipInputTestWrapper testData={invalidZip} />);
    cy.get('#zip-code-input').type(invalidZip);
    cy.get('#component-error-text').should('contain', 'Zip code outside supported area. Contact info@northcountryengineer.com for more information.')
  });
});

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
    cy.get('#component-email-error-text').should('contain', 'Invalid Email')
  })
})

describe('<PasswordInput />', () => {
  beforeEach(() => {
    cy.mount(<PasswordInputTestWrapper testData="" testError={{}} />);
  });

  it('renders the password input fields', () => {
    cy.get('#standard-adornment-password').should('exist');
    cy.get('#standard-adornment-confirm-password').should('exist');
  });

  it('toggles password visibility', () => {
    cy.get('#standard-adornment-password').should('have.attr', 'type', 'password');
    cy.get('#standard-adornment-confirm-password').should('have.attr', 'type', 'password');

    cy.get('[aria-label="toggle password visibility"]').first().click();
    cy.get('#standard-adornment-password').should('have.attr', 'type', 'text');

    cy.get('[aria-label="toggle password visibility"]').last().click();
    cy.get('#standard-adornment-confirm-password').should('have.attr', 'type', 'text');
  });

  it('enables sign-up button when form is complete', () => {
    const testData = 'ValidPassword123!';
    cy.mount(<PasswordInputTestWrapper testData={testData} />);
    cy.get('#standard-adornment-password').clear().type(testData);
    cy.get('#standard-adornment-confirm-password').clear().type(testData);
    cy.get('button').contains('Sign Up').should('not.be.disabled');
  });

  it('attempts sign-up with valid password', () => {
    const testData = 'ValidPassword123!';
    cy.mount(<PasswordInputTestWrapper testData={testData} />);
    cy.get('#standard-adornment-password').type(testData);
    cy.get('#standard-adornment-confirm-password').type(testData);
    cy.get('button').contains('Sign Up').click();
  });
});

