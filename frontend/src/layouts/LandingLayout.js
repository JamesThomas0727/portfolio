import React from 'react'

import { Footer, NavBar, EmailBox } from '../components'
import Dashboard from '../components/Dashboard'
export default function LandingLayout() {
  return (
    <div className='static'>
      <NavBar id="navbar" />
      <Dashboard id="dashboard" />
      <EmailBox id="contact" />
      <Footer id="footer" />
    </div>
  )
}
