import React, { Component } from "react";
import Link from "next/link";
import { Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse } from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar sticky="top" expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <h5>Holden's Catering Company</h5>
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar>
            <Nav>
              <NavItem className="nav-item active">
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/articles">
                  <a>Articles</a>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/shop">
                  <a>Shop</a>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/gear">
                  <a>Gear</a>
                </Link>
              </NavItem>
              <NavItem className="nav-item">
                <Link href="/donate">
                  <a>Donate</a>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
