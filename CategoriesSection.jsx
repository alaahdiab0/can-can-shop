"use client";

import Image from "next/image";
import "./CategoriesSection.css";

const categories = [
  {
    name: "Chocolates",
    image: "/categories/ch1.png",
    link: "/category/chocolates",
  },
  {
    name: "Gummies",
    image: "/categories/ch2.png",
    link: "/category/gummies",
  },
  {
    name: "Lollipops",
    image: "/categories/ch3.png",
    link: "/category/lollipops",
  },
  {
    name: "Gift Boxes",
    image: "/categories/ch4.png",
    link: "/category/gift-boxes",
  },
  {
    name: "Sour Candies",
    image: "/categories/ch5.png",
    link: "/category/sour-candies",
  },
  {
    name: "Party Mix",
    image: "/categories/ch6.png",
    link: "/category/party-mix",
  },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section">
      
      {/* Heading */}
      <div className="categories-heading">
        <span className="categories-subtitle">
          SHOP BY CATEGORY
        </span>

        <div className="title-wrapper">
          <span className="decor-line left"></span>

          <h2>Our Categories</h2>

          <span className="decor-line right"></span>
        </div>
      </div>

      {/* Categories */}
      <div className="categories-grid">
        {categories.map((category) => (
          <a
            href={category.link}
            className="category-card"
            key={category.name}
          >
            <div className="category-image">
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width: 768px) 120px, 170px"
              />
            </div>

            <div className="category-name">
              <span>{category.name}</span>
              <span className="arrow">→</span>
            </div>
          </a>
        ))}
      </div>

    </section>
  );
}