import React from 'react'
import { Link } from 'react-router-dom';
// import logo from '../568-20x30.jpg';

const Header = () => {
    return(
<div>
    <header >
    <nav className="navbar navbar-expand-md navbar-dark " style={{backgroundColor:"red",color:"white"}}>
    <div className="container-fluid">
      <span className="navbar-brand" style={{color:"white"}}><Link to={'/'} style={{color:"white",font:"-moz-initial",textDecoration:"none"}}> Little Flower</Link></span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          
          <li className="nav-item">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          </li>
          <li className="nav-item">
            <span className="nav-link disabled"  tabIndex="-1" aria-disabled="true" style={{color:"black"}}></span>
          </li>
        </ul>
        <form className="d-flex">
          
        
        </form>
      </div>
    </div>
  </nav>
    </header>
</div>
    )
    
}

export default Header;