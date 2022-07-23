import React from 'react'
import PropTypes from 'prop-types'
import Navigation from '../Navigation/Navigation'

function Header(props) {
  return (
    <header className='container-fuid bg-dark row'>
      <Navigation></Navigation>
    </header>
  )
}

Header.propTypes = {}

export default Header
