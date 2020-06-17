import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {

  return (
    <Navbar sticky="top" expand="md">
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
          <NavDropdown title="Articles" id="basic-nav-dropdown" className="navLinkStyled">
            <NavDropdown.Item>
              <Link href="/articles">
                <a className="dropdownLinkStyled">Articles - Home Page</a>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Divider />
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
          </NavDropdown>
          <Link href="/gear" passHref>
            <a className="navLinkStyled">Gear</a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
