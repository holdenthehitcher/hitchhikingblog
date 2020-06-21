import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand>
        <Link href="/home" passHref>
          <a className="brandLogo">Holden the Hitcher</a>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse>
        <Nav>
          <Link href="/home" passHref>
            <a className="navLinkStyled">Home</a>
          </Link>
          <Link href="/allstories" passHref>
            <a className="navLinkStyled">Stories</a>
          </Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="navLinkStyled">
            <NavDropdown.Item>
              <Link href="/hitchhiking">
                <a className="dropdownLinkStyled">Hitchhiking</a>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/volunteering">
                <a className="dropdownLinkStyled">Volunteering</a>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/culinary">
                <a className="dropdownLinkStyled">Culinary</a>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link href="/gear" passHref>
                <a className="dropdownLinkStyled">Gear</a>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
