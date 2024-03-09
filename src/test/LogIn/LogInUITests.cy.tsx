import React from 'react'
import { mount } from 'cypress/react18'
import { LogInForm } from '@/src/components/LogIn' 
import * as nextRouter from 'next/router'
import * as Auth from 'aws-amplify/auth';

describe('<LogInForm />', () => {
    beforeEach(() => {
        cy.stub(nextRouter, 'useRouter').returns({
            push: cy.stub().as('routerPush'), // Mock the push function
            route: '/',
            pathname: '',
            query: '',
            asPath: '',
        })
    })
    it('renders correctly', () => {
        mount(<LogInForm loggedIn={false} />)
        cy.get('input[type="text"]').should('be.visible')
        cy.get('input[type="password"]').should('be.visible')
        cy.contains('Log In').should('be.visible')
    })

    it('allows input for username and password', () => {
        mount(
            <LogInForm loggedIn={false} />
        )
        cy.get('input[type="text"]').type('testUser')
        cy.get('input[type="password"]').type('testPass')
        cy.get('input[type="text"]').should('have.value', 'testUser')
        cy.get('input[type="password"]').should('have.value', 'testPass')
    })

    it('accepts attempted login upon "Log In" button click', () => {
        cy.stub(Auth, 'signIn').resolves({
            username: 'testUser'
        })        
        const mockSignIn = cy.stub().resolves()
        cy.stub(require('aws-amplify/auth'), 'signIn').callsFake(mockSignIn)

        const mockLogin = cy.stub()

        cy.stub(require('@/src/state/AuthGlobalState'), 'useAuth').returns({
            login: mockLogin,
            avatarUrl: ''
        })
    
        mount(<LogInForm loggedIn={false} /> )

        cy.get('input[type="text"]').type('testUser')
        cy.get('input[type="password"]').type('testPass')
        cy.contains('Log In').click()
    })
})
