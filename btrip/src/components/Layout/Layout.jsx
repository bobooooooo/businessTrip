import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/Header'
import Main from '../Main/Main/Main'
import Footer from '../Footer/Footer'

function Layout(props) {
  return (
    <>
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  )
}

Layout.propTypes = {}

export default Layout
