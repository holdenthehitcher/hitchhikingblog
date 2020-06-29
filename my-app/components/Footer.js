import React from "react";
import Link from "next/link";
import ContactModal from "./ContactModal";
import Newsletter from "./Newsletter";

const navLinks = [
  {
    to: "/home",
    text: "Home",
  },
  {
    to: "/allstories",
    text: "Stories",
  },
  {
    to: "/hitchhiking",
    text: "Hitchhiking",
  },
  {
    to: "/volunteering",
    text: "Volunteering",
  },
  {
    to: "/culinary",
    text: "Culinary",
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
        <div className="col linksCol">
          <h5 className="footerHeaders">Links</h5>
          <ul className="list-unstyled footerWrapCenter">
            {navLinks.map(({ to, text }, i) => (
              <li key={i}>
                <Link href={to}>
                  <a className="footerLinks">{text}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="col footerWrapCenter" >
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
        <div className="col-5 col-sm-4">
          <div className="col">
            <h5 className="footerHeaders">Message</h5>
            <ContactModal />
            <div className="col mt-4" style={{padding: 0}}>
              <h5 className="footerHeaders">Letters</h5>
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
