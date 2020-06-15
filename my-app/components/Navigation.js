import React, { useState } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  

  return (
    <>
      <Navbar sticky="top" expand="sm">
        <div className="row">
          <Navbar.Brand>
            <Link href="/home" passHref>
              <a>Holden the Hitcher</a>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"  />
          <Navbar.Collapse >
            <Nav>
              <Link href="/home" passHref>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item>
                  <Link href="/articles">
                    <a>Articles - Home Page</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Link href="/hitchhiking">
                    <a>Hitchhiking</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/volunteering">
                    <a>Volunteering</a>
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link href="/culinary">
                    <a>Culinary</a>
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Link href="/gear" passHref>
                <Nav.Link>Gear</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
