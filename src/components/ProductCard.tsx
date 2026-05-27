"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart, Star } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import { BorderBeam } from "@/components/ui/border-beam";
import { ShimmerButton } from "@/components/ui/shimmer-button";

import { ProductCardProps } from "@/@type/product";

import {
  useTranslateCategory,
  useTranslateDescription,
  useTranslateTitle,
} from "@/hook/useTranslate";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();

  const { data: translatedTitle, isLoading: titleLoading } =
    useTranslateTitle(product);

  const { data: translatedDescription, isLoading: descriptionLoading } =
    useTranslateDescription(product);

  const { data: translatedCategory, isLoading: categoryLoading } =
    useTranslateCategory(product);

  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/80 shadow-lg backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900/70">
      <BorderBeam size={250} duration={8} delay={2} />

      <CardContent className="p-4">
        {/* Product Image */}
        <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-muted/30 p-6">
          <Image
            src={product.image}
            alt={translatedTitle || product.title}
            width={220}
            height={220}
            className="h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Product Details */}
        <div className="mt-5 space-y-3">
          {/* Category */}
          <div>
            {categoryLoading ? (
              <div className="h-6 w-24 animate-pulse rounded-full bg-linear-to-r from-muted via-muted/50 to-muted" />
            ) : (
              <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize text-muted-foreground">
                {translatedCategory}
              </span>
            )}
          </div>

          {/* Title */}
          <div className="min-h-[56px]">
            {titleLoading ? (
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded-md bg-linear-to-r from-muted via-muted/50 to-muted" />
                <div className="h-4 w-3/4 animate-pulse rounded-md bg-linear-to-r from-muted via-muted/50 to-muted" />
              </div>
            ) : (
              <h3 className="line-clamp-2 text-base font-semibold leading-7 text-foreground">
                {translatedTitle}
              </h3>
            )}
          </div>

          {/* Description */}
          <div className="min-h-[40px]">
            {descriptionLoading ? (
              <div className="space-y-2">
                <div className="h-3 w-full animate-pulse rounded-md bg-linear-to-r from-muted via-muted/50 to-muted" />
                <div className="h-3 w-5/6 animate-pulse rounded-md bg-linear-to-r from-muted via-muted/50 to-muted" />
              </div>
            ) : (
              <p className="line-clamp-2 text-sm text-muted-foreground">
                {translatedDescription}
              </p>
            )}
          </div>

          {/* Rating & Price */}
          <div className="flex items-center justify-between pt-2">
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="h-4 w-4 fill-yellow-500" />

              <span className="text-sm font-medium">
                {product.rating?.rate}
              </span>
            </div>

            <span className="text-lg font-bold text-primary">
              ${product.price}
            </span>
          </div>

          {/* Add To Cart */}
          <div className="pt-4">
            <ShimmerButton className="w-full rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
              <div className="flex items-center justify-center gap-2 text-white">
                <ShoppingCart className="h-4 w-4" />

                {t("Add To Cart")}
              </div>
            </ShimmerButton>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;