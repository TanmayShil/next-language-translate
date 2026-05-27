"use client";
import { useProducts } from "@/hook/useProducts";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { SparklesText } from "@/components/ui/sparkles-text";
import ProductSkleton from "@/components/ProductSkleton";
import { Product } from "@/@type/product";
import ProductCard from "@/components/ProductCard";

const Products = () => {
  const { t } = useTranslation();
  const { data, isLoading } = useProducts();

  return (
    <section
      id="products"
      className="relative overflow-hidden bg-background py-24"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.15),transparent_25%),radial-gradient(circle_at_bottom_left,rgba(16,185,129,0.15),transparent_25%)]" />

      <div className="mx-auto max-w-8xl px-4 md:px-8">
        <div className="mb-14 text-center">
          <SparklesText className="text-3xl font-bold tracking-tight md:text-5xl">
            {t("Featured Products")}
          </SparklesText>

          <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground md:text-base">
            {t(
              "Explore trending products with premium quality, modern style, and unbeatable prices.",
            )}
          </p>
        </div>
        {isLoading ? (
          <ProductSkleton />
        ) : (
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            navigation
            breakpoints={{
              480: {
                slidesPerView: 1,
              },
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              },
            }}
            className="pb-14"
          >
            {data?.map((product: Product) => (
              <SwiperSlide key={product.id}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default Products;
