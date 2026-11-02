
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <a href="#home">
          <img src="/logo.png" alt="Can Can Logo" />
        </a>
      </div>

        <button
    className="menu-toggle"
    onClick={() => setMenuOpen(!menuOpen)}
    aria-label="Toggle menu"
    aria-expanded={menuOpen}
  >
    <span></span>
    <span></span>
    <span></span>
  </button>

  <div className={`nav-links ${menuOpen ? "active" : ""}`}>
  <a href="#home" onClick={() => setMenuOpen(false)}>
    Home
  </a>

  <a href="#products" onClick={() => setMenuOpen(false)}>
    Products
  </a>

  <a href="#about" onClick={() => setMenuOpen(false)}>
    About
  </a>
</div>
</nav>

);
}
