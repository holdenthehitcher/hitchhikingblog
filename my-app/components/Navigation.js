import React, { useState } from "react";
import Link from "next/link";
import { Nav, NavbarBrand, NavDropdown, NavbarToggler, NavItem, Collapse } from "reactstrap";
import Navbar from "react-bootstrap/Navbar";

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
      href: "/shop",
      text: "Shop",
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
          <NavbarBrand href="/">
            <a>Hitch Hike with Holden</a>
            </NavbarBrand>
          <NavbarToggler onClick={() => toggleNav(!isNavOpen)} />
          <Collapse isOpen={isNavOpen} navbar>
            <Nav>
              {navigation.map(({ href, text }, i) => (
                <NavItem key={i} className="nav-item">
                  <Link href={href}>
                    <a>{text}</a>
                  </Link>
                </NavItem>
              ))}
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default Navigation;
