/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import '../styles/style.css'

function Header({ setSearchText }) {
  const [searchedText, setSearchedText] = useState('');

  const handleSearchInput = (event) => {
    setSearchedText(event.target.value);
  };

  const handleSearchSubmit = () => {
    setSearchText(searchedText);
  };
  
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav.Link href="#cart" className='cart-link'>Cart(0)</Nav.Link>
            <Form className='searchForm'>
            <FormControl
              onChange={handleSearchInput}
              value={searchedText}
              type="text"
              placeholder="Search"
              className="mr-sm-2"
            />
            <Button onClick={handleSearchSubmit} variant="outline-success">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  );
}

export default Header;
