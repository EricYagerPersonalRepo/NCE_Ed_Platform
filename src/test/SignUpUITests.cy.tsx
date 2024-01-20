import React from 'react'
import SignUp  from '@/pages/SignUp'
import { mount } from 'cypress/react18'
import Router from 'next/router'

describe('<SignUp />', () => {
  context('stubbing out `useRouter` hook', () => {
    let router
    
    beforeEach(() => {
      router = {
        back: cy.stub().as('routerBack')
      }

      cy.stub(Router, 'router').returns(router)
    })
  })

  it('renders', () => {
    // Mock the router with a push function
    const mockRouter = {
      push: cy.stub().as('routerPush'),
    }

    // Pass false for loggedIn and true/false for isMobile
    mount(<SignUp loggedIn={false} isMobile={true} router={mockRouter}/>)
  })
})