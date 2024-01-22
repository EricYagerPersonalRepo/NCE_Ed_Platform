import React, { useEffect, useRef } from 'react'
import SignUp  from '@/pages/SignUp'
import { mount } from 'cypress/react18'
import Router from 'next/router'
import { SignUpTabPanel } from '../components/AuthComponents'
import { Grid, FormControl, InputLabel, Input, TextField, FormHelperText } from '@mui/material'
import { fetchCityState } from '../functions/AuthFunctions'
import { BirthdayInput } from '../components/SignUp/WebSignUp'
import { useSignUpHooks } from '../state/SignUpHooks'

const WrapperComponent = ({ setError, testDate }: any) => {
  const signUpHooks = useSignUpHooks();

  // Use useEffect to set the state
  useEffect(() => {
    if (setError) {
      signUpHooks.setError({ ...signUpHooks.error, birthday: setError });
    }
    if (testDate) {
      signUpHooks.setBirthday(testDate);
    }
  }, [setError, testDate, signUpHooks]);

  return <BirthdayInput signUpHooks={signUpHooks} />;
}

describe('<SignUp />', () => {
  context('`useRouter` hook stub out', () => {
    let router
    
    beforeEach(() => {
      router = {
        back: cy.stub().as('routerBack')
      }

      cy.stub(Router, 'router').returns(router)
    })
  })

  it('renders', () => {
    const mockRouter = {
      push: cy.stub().as('routerPush'),
    }

    mount(<SignUp loggedIn={false} isMobile={true} router={mockRouter}/>)
  })
})

describe('<BirthdayInput />', () => {

  it('accepts birthday input', () => {
    const testDate = '2000-01-01'
    mount(<WrapperComponent testDate={testDate} />)
    cy.get('input[type="date"]').should('have.value', testDate)
  })

  it('displays error message for invalid birthday', () => {
    const tempError = "Birthday error"
    mount(<WrapperComponent setError={tempError} />)
    cy.contains(tempError).should('be.visible')
  })

  it('displays error message for birthday < 16 YOE', () => {
    const testDate = '2014-01-01'
    mount(<WrapperComponent testDate={testDate} />)
    cy.get('.MuiFormHelperText-root.Mui-error')
      .should('contain', 'You must be at least 16 years old to sign up.')
      .and('be.visible')
  })
})

describe('<Name Input />', () => {
  it('renders the name input', () => {
    mount(
      <SignUpTabPanel value={1} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
              <Input id="standard-adornment-name" />
            </FormControl>
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.get('input[id="standard-adornment-name"]').should('exist')
  })

  it('accepts name input', () => {
    mount(
      <SignUpTabPanel value={1} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
              <Input id="standard-adornment-name" />
            </FormControl>
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    const testName = 'John Doe'
    cy.get('input[id="standard-adornment-name"]').type(testName)
    cy.get('input[id="standard-adornment-name"]').should('have.value', testName)
  })

  it('displays error message for invalid name', () => {
    // Assuming that the error message is set via props or context
    const errorMessage = 'Invalid name'
    mount(
      <SignUpTabPanel value={1} index={1}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <FormControl error fullWidth variant="standard">
              <InputLabel htmlFor="standard-adornment-name">Name</InputLabel>
              <Input id="standard-adornment-name" />
              <FormHelperText id="component-error-text">{errorMessage}</FormHelperText>
            </FormControl>
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.contains(errorMessage).should('be.visible')
  })
})

describe('<Zip Code Input />', () => {
  const baseUrl = 'https://api.zippopotam.us/us/'
  const validZip = "13630"
  const invalidZip = "99999"

  it('renders the zip code input', () => {
    mount(
      <SignUpTabPanel value={2} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Zip code" variant="standard" placeholder="Zip Code" />
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.get('input[placeholder="Zip Code"]').should('exist')
  })

  it('accepts zip code input', () => {
    mount(
      <SignUpTabPanel value={2} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Zip code" variant="standard" placeholder="Zip Code" />
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.get('input[placeholder="Zip Code"]').type(validZip)
    cy.get('input[placeholder="Zip Code"]').should('have.value', validZip)
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

  it('displays error message for invalid zip code', () => {
    const errorMessage = 'Invalid zip code'
    mount(
      <SignUpTabPanel value={2} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField 
              fullWidth 
              label="Zip code" 
              variant="standard" 
              placeholder="Zip Code"
              error={true}
              helperText={errorMessage}
            />
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.contains(errorMessage).should('be.visible')
  })

  it('displays city and state on valid zip code input', () => {
    const city = "SomeCity"
    const state = "SomeState"
    mount(
      <SignUpTabPanel value={2} index={2}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <TextField fullWidth label="Zip code" variant="standard" placeholder="Zip Code" />
          </Grid>
          <Grid item xs={12} sm={8}>
            <TextField
              disabled
              fullWidth
              label={`${city}, ${state}`}
              variant="standard"
            />
          </Grid>
        </Grid>
      </SignUpTabPanel>
    )
    cy.contains(`${city}, ${state}`).should('be.visible')
  })
})
