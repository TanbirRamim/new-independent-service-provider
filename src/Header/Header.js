import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  return (
    <Navbar
      className="d-flex justify-content-between px-5 "
      bg="dark"
      variant="dark"
    >
      <Navbar.Brand className="">
        <h1>Tanbir's Career Consultancy</h1>
      </Navbar.Brand>
      <Nav className="px-2 mx-2 gap={3}">
        <CustomLink to="/"> Home</CustomLink>
        <CustomLink to="/About"> About</CustomLink>
        <CustomLink to="/Services"> Services</CustomLink>
        <CustomLink to="/Login"> Login</CustomLink>
        <CustomLink to="/Story"> Story</CustomLink>
      </Nav>
    </Navbar>
  );
};

export default Header;
