import React, { useState } from "react";
import Link from "next/link";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from "reactstrap";

const Header = () => {

  const [isNavOpen, toggleNav] = useState(false);
    const navigation = [
      {
        href: "/home",
        text: "Home",
      },
      {
        href: "/articles",
        text: "Articles",
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
      <Navbar sticky="top" expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <h5>Holden's Catering Company</h5>
          </NavbarBrand>
          <NavbarToggler onClick={() => toggleNav} />
          <Collapse isOpen={!isNavOpen} navbar>
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
    );
  }


export default Header;
