export default function Navbar() {
  return (
      <nav>
      <div className="logo">
        <img src="/logo.png" alt="Can Can Logo" /> 
      </div>

      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/products">Products</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </div>

      <div>
        <button>🛒</button>
      </div>
    </nav>
  );
}