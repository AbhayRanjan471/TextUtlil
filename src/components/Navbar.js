//write 'rfc' to import React it's a sortcut
import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <nav className="navbar navbar-dark bg-dark  navbar-expand-lg  "> {/*bg-body-tertiary*/} 
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.aboutText}</a>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  )
}

//setting the type for the proptypes
Navbar.propTypes = {
    title: PropTypes.string.isRequired, //we are setting type of the proptype , our first proptype that is title which is of type STring and its should not be undefine bcz we have used undefine
    aboutText: PropTypes.string
 }
 
 //Setting the default props
 //by-default the props value will be this 
 Navbar.defaultProps = {
    title: 'Set title here',
    aboutText: 'About text here'
 };


