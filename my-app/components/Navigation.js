import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import styled from "styled-components";

const Navigation = () => {
  const BrandStyled = styled.a`
    font-family: "Indie Flower", cursive;
    font-size: 60px;
    margin-right: 20px;
  `;

  const NavLinkStyled = styled.a`
    font-family: "Bellota", cursive;
    font-size: 35px;
  `;

  return (
    <Navbar sticky="top" expand="md">
      <Navbar.Brand>
        <Link href="/home" passHref>
          <BrandStyled>Holden the Hitcher</BrandStyled>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link href="/home" passHref>
            <Nav.Link>
              <NavLinkStyled>Home</NavLinkStyled>
            </Nav.Link>
          </Link>
          <NavDropdown title="Articles" id="basic-nav-dropdown" className="navLinkStyled">
            <NavDropdown.Item>
              <Link href="/articles">
                <NavLinkStyled>Articles - Home Page</NavLinkStyled>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>
              <Link href="/hitchhiking">
                <NavLinkStyled>Hitchhiking</NavLinkStyled>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/volunteering">
                <NavLinkStyled>Volunteering</NavLinkStyled>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/culinary">
                <NavLinkStyled>Culinary</NavLinkStyled>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
          <Link href="/gear" passHref>
            <Nav.Link>
              <NavLinkStyled>Gear</NavLinkStyled>
            </Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
