import Link from "next/link";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Navigation = () => {
  const navCats = [
    {
      link: "/hitchhiking",
      title: "Hitchhiking",
    },
    {
      link: "/volunteering",
      title: "Volunteering",
    },
    {
      link: "/culinary",
      title: "Culinary",
    },
    {
      link: "/gear",
      title: "Gear",
    },
  ];
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
          <Link href="/allstories" passHref>
            <a className="navLinkStyled">Stories</a>
          </Link>
          <NavDropdown title="Categories" id="basic-nav-dropdown" className="navLinkStyled">
            <ul className="list-unstyled navCatCenter">
              {navCats.map(({ link, title }, i) => (
                <li key={i}>
                  <Link href={link}>
                    <a className="dropdownLinkStyled">{title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
