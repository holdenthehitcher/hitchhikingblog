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
      <div className="row">
        <div className="col-2">
          <h5 className="footerHeaders">Links</h5>
          <ul className="list-unstyled footerLinksList">
            {navLinks.map(({ to, text }, i) => (
              <li key={i}>
                <Link href={to}>
                  <a className="footerLinks">{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col col-sm-4">
          <h5 className="footerHeaders">Social</h5>
          <ul className="list-unstyled socialAlignCenter">
            {socialLinks.map(({ href, linkClass, iconClass }, i) => (
              <li key={i} className="socialAlign">
                <a className={`btn btn-social-icon socialSize ${linkClass}`} href={href}>
                  <i className={`fa socialLogos ${iconClass}`} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-3">
          <h5 className="footerHeaders">Message</h5>
          <Button type="modal" className="btn btn-lg btn-primary socialAlignCenter">
            Contact
          </Button>
        </div>
        <div className="col-3">
          <h5 className="footerHeaders">Letters</h5>
          <input type="text" className="socialAlignCenter" />
          <br/>
          <Button type="submit">Sign-up</Button>
        </div>
      </div>
    </footer>
  );
}
