//write 'rfc' to import React it's a sortcut
import React from 'react'
import PropTypes from 'prop-types'
//we will import the Link from the react-router
import { Link } from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-${props.mode} bg-${props.mode}  navbar-expand-lg `}> {/*bg-body-tertiary*/} 
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* to link instead of anchor tag we will use Link  and in plzce of 'href' we will use 'to' , here we can use the <a> tag also but it will reload and the page whenver u click , which will make ur website slower*/}
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">{props.aboutText}</Link>
        </li>
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-primary" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch mx-3 text-${props.modeTheme}`}>
                  {/* OR */}
                {/* <div className={`form-check form-switch mx-3 text-${props.mode ==='light' ?'dark':'light'}`}>  */}
        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeName}</label>
      </div>
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


