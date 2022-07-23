import React from 'react'

const Navigation = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark'>
            <a href="#" className="navbar-brand">Bussiness trip managment</a>
            <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav">
                    <a href="#" className="nav-item nav-link active">Home</a>
                    <a href="#" className="nav-item nav-link">Services</a>
                    <a href="#" className="nav-item nav-link">About</a>
                    <a href="#" className="nav-item nav-link">Contact</a>
                </div>
                <div className="navbar-nav ms-auto">              	
                    <a href="#" className="nav-item nav-link">Login</a>
                    <a href="#" className="nav-item nav-link">Register</a>
                </div>
            </div>
    </nav>
  )
}

export default Navigation