
"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Can Can Logo" />
      </div>

      

      <div className={`nav-links ${menuOpen ? "active" : ""}`}>
        <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="/products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="/contact" onClick={() => setMenuOpen(false)}>Contact</a>
      </div>

      
    </nav>
  );
}
