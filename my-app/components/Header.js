import React, { useState } from "react";
import Link from "next/link";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from "reactstrap";

const Header = () => {
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
    <Navbar sticky="top">
      <div className="row">
        <NavbarBrand href="/">
          <h5>Hitch Hike with Holden</h5>
        </NavbarBrand>
        <Nav>
          {navigation.map(({ href, text }, i) => (
            <NavItem key={i} className="nav-item">
              <Link href={href}>
                <a>{text}</a>
              </Link>
            </NavItem>
          ))}
        </Nav>
      </div>
    </Navbar>
  );
};

export default Header;
