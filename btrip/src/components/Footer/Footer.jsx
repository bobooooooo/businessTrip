import React from 'react'
import PropTypes from 'prop-types'

function Footer(props) {
  return (
     <footer className='bg-dark text-light fixed-bottom'>
        <section className='row'>
            <section className='col-md-12 text-center'>
                <p>Copyright &copy; 2022 This is the footer</p>
            </section>
            <section className='col-md-6 text-md-end'>
                {/* <a href='#' className='text-dark'>Terms of Use</a> 
                <span className='text-muted mx-2'>|</span> 
                <a href='#' className='text-dark'>Privacy Policy</a> */}
            </section>
        </section>
    </footer>
  )
}

Footer.propTypes = {}

export default Footer
