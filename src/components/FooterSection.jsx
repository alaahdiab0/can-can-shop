"use client";

import Link from "next/link";
import "./FooterSection.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYoutube,
  FaHeart,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";
import { GiCandyCanes } from "react-icons/gi";

const quickLinks = [
  { label: "Home", href: "/home" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "FAQ", href: "/faq" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Track Order", href: "/track-order" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: FaInstagram },
  { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "TikTok", href: "#", Icon: FaTiktok },
  { label: "YouTube", href: "#", Icon: FaYoutube },
];

export default function FooterSection() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="footer-section">
      <span className="footer-blob footer-blob-bl" />
      <span className="footer-blob footer-blob-tr" />
      <span className="footer-arc footer-arc-left" />
      <span className="footer-arc footer-arc-right" />

      <div className="footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <GiCandyCanes className="footer-logo-icon" />
            <div>
              <h2>Can Can</h2>
              <small>SWEETS &amp; MORE</small>
            </div>
          </div>

          <p className="footer-tagline">
            Life is <b>sweeter here</b> <FaHeart />
          </p>

          <div className="footer-socials">
            {socials.map(({ label, href, Icon }) => (
              <a key={label} href={href} aria-label={label}>
                <Icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            {quickLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h3>Customer Service</h3>
          <ul>
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer-col footer-contact">
          <h3>Contact Us</h3>
          <ul>
            <li><FaLocationDot /> Cairo, Egypt</li>
            <li><FaPhone /> +20 123 456 7890</li>
            <li><FaEnvelope /> info@cancan.com</li>
          </ul>
        </div>
      </div>

      <hr className="footer-divider" />
      <p className="footer-copy">&copy; 2025 Can Can. All rights reserved.</p>

      <button className="footer-to-top" aria-label="Back to top" onClick={scrollToTop}>
        <FaArrowUp />
      </button>
    </footer>
  );
}