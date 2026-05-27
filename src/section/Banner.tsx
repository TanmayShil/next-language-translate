"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

import banner1 from "@/assets/banner1.jpg";
import banner2 from "@/assets/banner2.jpg";
import banner3 from "@/assets/banner3.jpg";
import { useTranslation } from "react-i18next";

const banners = [
  {
    image: banner1,
    title: "Discover Premium Products",
    subtitle:
      "Explore high-quality collections designed to match your lifestyle and everyday needs.",
    button: "Shop Now",
  },
  {
    image: banner2,
    title: "New Arrivals Just Dropped",
    subtitle:
      "Upgrade your experience with the latest trending products at the best prices.",
    button: "Explore Collection",
  },
  {
    image: banner3,
    title: "Smart Shopping Starts Here",
    subtitle:
      "Find stylish, reliable, and affordable products all in one place.",
    button: "View Products",
  },
];

const Banner = () => {
      const { t } = useTranslation()
  const [emblaRef] = useEmblaCarousel(
    {
      loop: true,
    },
    [
      Autoplay({
        delay: 3000,
      }),
    ],
  );

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {banners.map((banner, index) => (
            <div key={index} className="relative min-w-full h-screen">
              <Image
                src={banner.image}
                alt={t(banner.title)}
                fill
                priority
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/60" />
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                  <div className="max-w-2xl text-white space-y-6">
                    <p className="uppercase tracking-[6px] text-sm text-orange-400 font-semibold">
                      {t("title")}
                    </p>
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                      {t(banner.title)}
                    </h1>
                    <p className="text-base md:text-lg text-gray-200 leading-relaxed">
                      {t(banner.subtitle)}
                    </p>
                    <button className="bg-orange-500 hover:bg-orange-600 transition-all duration-300 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg" id="products">
                      {t(banner.button)}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Banner;
