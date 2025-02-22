/* eslint-disable react/prop-types */
import React from 'react'
import './Layout.css'
import Footer from './footer/Footer'
import Header from './header/Header'

const Layout = ({children}) => {
  return (
    <div className="layout">
      <Header />
      <main className='layout-content'>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout