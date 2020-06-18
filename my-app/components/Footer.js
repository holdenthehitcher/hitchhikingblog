import React from "react";
import Link from "next/link";
import Button from "react-bootstrap/Button";

const navLinks = [
  {
    to: "/home",
    text: "Home",
  },
  {
    to: "/articles",
    text: "Articles",
  },
  {
    to: "/gear",
    text: "Gear",
  },
];

const socialLinks = [
  {
    href: "http://instagram.com/",
    linkClass: "btn-instagram",
    iconClass: "fa-instagram",
  },
  {
    href: "http://www.facebook.com/",
    linkClass: "btn-facebook",
    iconClass: "fa-facebook",
  },
  {
    href: "http://twitter.com/",
    linkClass: "btn-twitter",
    iconClass: "fa-twitter",
  },
  {
    href: "http://youtube.com/",
    linkClass: "btn-google",
    iconClass: "fa-youtube",
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="row d-flex justify-content-center">
        <div className="col-3">
          <h5>Links</h5>
          <ul className="list-unstyled">
            {navLinks.map(({ to, text }, i) => (
              <li key={i}>
                <Link href={to}>
                  <a>{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h5>Social</h5>
          <ul className="list-unstyled">
            {socialLinks.map(({ href, linkClass, iconClass }, i) => (
              <li key={i}>
                <a className={`btn btn-social-icon ${linkClass}`} href={href}>
                  <i className={`fa ${iconClass}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <br />
          <h5>Leave a Message</h5>
          <Button type="modal" className="btn btn-lg btn-primary">
            Contact
          </Button>
        </div>
        <div className="col-3">
          <h5>Sign-Up</h5>
          <input type="text"/>
        </div>
      </div>
    </footer>
  );
}
