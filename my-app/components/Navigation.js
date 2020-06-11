import React, { useState } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const [isNavOpen, toggleNav] = useState(false);

  return (
    <>
      <Navbar sticky="top" expand="sm">
        <div className="row">
          <Navbar.Brand href="/">
            <a>Holden the Hitcher</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => toggleNav(!isNavOpen)} />
          <Navbar.Collapse isopen={isNavOpen} navbar>
            <Nav>
              <Nav.Link>
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </Nav.Link>
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item href="/articles">Articles - Home Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Hitchhiking</NavDropdown.Item>
                <NavDropdown.Item href="/">Volunteering</NavDropdown.Item>
                <NavDropdown.Item href="/">Culinary</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link>
                <Link href="/gear">
                  <a>Gear</a>
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link href="/donate">
                  <a>Donate</a>
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
