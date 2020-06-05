import React, { Component } from "react";
import Link from "next/link";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from "reactstrap";

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
              <ul className="nav my-auto ml-4">
                <li className="nav-item active">
                  <Link href="/">
                    <a className="nav-link">Home</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Articles</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Shop</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Gear</a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a className="nav-link">Donate</a>
                  </Link>
                </li>
              </ul>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
