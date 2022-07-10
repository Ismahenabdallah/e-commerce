/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Carticon from './CartIcon';
import RoutePages from './RoutePages';
export default function Navbars() {
  return (
    <Container>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <h5 className="navbar-brand" to="/">Store</h5>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li> 
      
        
      </ul>
      <Carticon />
 
   
    </div>
  </div>
</nav>
      <RoutePages/>
    </Container>
  )
}
const Container = styled.div({
   
  });