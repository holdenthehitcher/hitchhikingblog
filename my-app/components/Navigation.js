import React, { useState } from "react";
import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const [isNavOpen, toggleNav] = useState(false);

  const navigation = [
    {
      href: "/home",
      text: "Home",
    },
    {
      href: "/articles",
      text: "Featured Articles",
    },
    {
      href: "/gear",
      text: "Gear",
    },
    {
      href: "/donate",
      text: "Donate",
    },
  ];

  return (
    <>
      <Navbar sticky="top" expand="md">
        <div className="row">
          <Navbar.Brand href="/">
            <a>Hitch Hike with Holden</a>
          </Navbar.Brand>
          <Navbar.Toggle onClick={() => toggleNav(!isNavOpen)} />
          <Navbar.Collapse isopen={isNavOpen} navbar>
            <Nav>
              <Nav.Item key="1" className="nav-item">
                <Link href="/home">
                  <a> Home </a>
                </Link>
              </Nav.Item>
              <NavDropdown title="Articles" id="basic-nav-dropdown">
                <NavDropdown.Item href="/articles">Articles - Home Page</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Hitchhiking</NavDropdown.Item>
                <NavDropdown.Item href="/">Volunteering</NavDropdown.Item>
                <NavDropdown.Item href="/">Culinary</NavDropdown.Item>
              </NavDropdown>
              <Nav.Item key="3" className="nav-item">
                <Link href="/gear">
                  <a> Gear </a>
                </Link>
              </Nav.Item>
              <Nav.Item key="4" className="nav-item">
                <Link href="/donate">
                  <a> Donate </a>
                </Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
