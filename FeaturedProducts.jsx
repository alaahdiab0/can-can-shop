"use client";
import Image from "next/image";
import "./FeaturedProducts.css";


import { useState } from "react";
import { Heart, ShoppingCart, Star } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Chocolate Box",
    price: 250,
    rating: 4.8,
    reviews: 120,
    image: "/FeaturedProducts/sw1.jpg",
  },
  {
    id: 2,
    name: "Gummy Mix",
    price: 150,
    rating: 4.6,
    reviews: 95,
    image: "/FeaturedProducts/sw2.jpg",
  },
  {
    id: 3,
    name: "Lollipop Box",
    price: 120,
    rating: 4.7,
    reviews: 88,
    image: "/FeaturedProducts/sw3.jpg",
  },
  {
    id: 4,
    name: "Sour Candy",
    price: 130,
    rating: 4.5,
    reviews: 72,
    image: "/FeaturedProducts/sw4.avif",
  },
];

export default function FeaturedProducts() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const addToCart = (id) => {
    setCart((prev) => [...prev, id]);
  };

    return (
    <section className="products-section">
      <div className="section-header">
        <p>BEST SELLERS</p>
        <div className="title-row">
          <span>⌁</span>
          <h2>Featured Products</h2>
          <span>⌁</span>
        </div>
      </div>

      <div className="products-grid">
        {products.map((product) => {
          const isFavorite = favorites.includes(product.id);
          const isAdded = cart.includes(product.id);

          return (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />

                <button
                  onClick={() => toggleFavorite(product.id)}
                  className="favorite-btn"
                >
                  <Heart
                    size={15}
                    fill={isFavorite ? "#f15a24" : "none"}
                    color="#f15a24"
                  />
                </button>
              </div>

              <h3>{product.name}</h3>
              <p className="price">EGP {product.price}</p>

              <div className="rating">
                <Star size={12} fill="#f15a24" color="#f15a24" />
                {product.rating} ({product.reviews})
              </div>

              <button
                onClick={() => addToCart(product.id)}
                className="cart-btn"
              >
                <ShoppingCart size={12} />
                {isAdded ? "Added" : "Add to Cart"}
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
}