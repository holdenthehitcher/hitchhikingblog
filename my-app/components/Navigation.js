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
          <Navbar.Brand>
            <Link href="/home">
              <a>Holden the Hitcher</a>
            </Link>
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
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link href="/articles">
                      <a>Articles - Home Page</a>
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link href="/hitchhiking">
                      <a>Hitchhiking</a>
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link href="/volunteering">
                      <a>Volunteering</a>
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Nav.Link>
                    <Link href="/culinary">
                      <a>Culinary</a>
                    </Link>
                  </Nav.Link>
                </NavDropdown.Item>
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
