"use client";

import Image from "next/image";
import "./CategoriesSection.css";

const categories = [
  { name: "Chocolates", image: "/categories/ch1.png" },
  { name: "Gummies", image: "/categories/ch2.png" },
  { name: "Lollipops", image: "/categories/ch3.png" },
  { name: "Gift Boxes", image: "/categories/ch4.png" },
  { name: "Sour Candies", image: "/categories/ch5.png" },
  { name: "Party Mix", image: "/categories/ch6.png" },
];

export default function CategoriesSection() {
  return (
    <section className="categories-section">
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

      <div className="categories-grid">
        {categories.map((category) => (
          <a
            href="#products"
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