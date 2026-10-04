

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import "./PromoBanner.css";

export default function PromoBanner() {
  return (
    
    <section className="promo-section">
      <div className="promo-banner">
        <div className="promo-content">
          <span className="promo-tag">SPECIAL OFFER</span>
          <h2 className="promo-title">
            Get <span>20% OFF</span>
          </h2>
          <p className="promo-text">on your first order</p>

          <Link href="/shop" className="promo-btn">
            Shop Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}