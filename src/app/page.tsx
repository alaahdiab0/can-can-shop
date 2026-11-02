

import FooterSection from "@/components/FooterSection";
import PromoBanner from "@/components/PromoBanner";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoriesSection from "@/components/CategoriesSection";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <div id="home">
        <Navbar />
        <Hero />
      </div>

      <div id="products">
        <CategoriesSection />
        <FeaturedProducts />
      </div>

      <PromoBanner />

      <div id="about">
        <FooterSection />
      </div>
    </main>
  );
}
