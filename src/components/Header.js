import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'



function Header() {
  return (
    <> <Navbar  variant="dark">
    <Container className='head'>
      

      <Navbar.Brand href="/">
        <img
          alt=""
          src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png"
          width="50"
          height="50"
          className="d-inline-block align-top"
          
          
          />  

<a>Smoke House</a>      
</Navbar.Brand>


    </Container>
  </Navbar></>
  )
}

export default Header