"use client";

import React from "react";
import Image from "next/image";
import { Star, ShoppingCart } from "lucide-react";
import { useTranslation } from "react-i18next";

import { Card, CardContent } from "@/components/ui/card";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { BorderBeam } from "@/components/ui/border-beam";

import { ProductCardProps } from "@/@type/product";
import {
  useTranslateCategory,
  useTranslateDescription,
  useTranslateTitle,
} from "@/hook/useTranslate";

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { t } = useTranslation();
  const { data: translatedTitle } = useTranslateTitle(product);
  const { data: translatedDescription } = useTranslateDescription(product);
  const { data: translatedCategory } = useTranslateCategory(product);

  return (
    <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/80 shadow-lg backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900/70">
      <BorderBeam size={250} duration={8} delay={2} />
      <CardContent className="p-4">
        <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-muted/30 p-6">
          <Image
            src={product.image}
            alt={translatedTitle || product.title}
            width={220}
            height={220}
            className="h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Product Content */}
        <div className="mt-5 space-y-3">
          {/* Category */}
          <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize text-muted-foreground">
            {translatedCategory || "..."}
          </span>

          {/* Title */}
          <h3 className="line-clamp-2 min-h-[56px] text-base font-semibold leading-7 text-foreground">
            {translatedTitle || "..."}
          </h3>

          {/* Description */}
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {translatedDescription || "..."}
          </p>

          {/* Rating + Price */}
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




// "use client";

// import React from "react";
// import Image from "next/image";
// import { useQuery } from "@tanstack/react-query";
// import { Star, ShoppingCart } from "lucide-react";
// import { useTranslation } from "react-i18next";

// import { Card, CardContent } from "@/components/ui/card";
// import { ShimmerButton } from "@/components/ui/shimmer-button";
// import { BorderBeam } from "@/components/ui/border-beam";

// import { ProductCardProps } from "@/@type/product";

// const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
//   const { t, i18n } = useTranslation();

//   // translate function
//   const translateText = async (
//     text: string,
//     target: string,
//   ) => {
//     const response = await fetch("/api/translate", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         text,
//         target,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Translation failed");
//     }

//     const data = await response.json();

//     return data.translatedText;
//   };

//   // title translation
//   const { data: translatedTitle } = useQuery({
//     queryKey: [
//       "translate-title",
//       product.id,
//       i18n.language,
//     ],

//     queryFn: async () => {
//       if (i18n.language === "en") {
//         return product.title;
//       }

//       return await translateText(
//         product.title,
//         i18n.language,
//       );
//     },

//     staleTime: Infinity,
//   });

//   // description translation
//   const { data: translatedDescription } = useQuery({
//     queryKey: [
//       "translate-description",
//       product.id,
//       i18n.language,
//     ],

//     queryFn: async () => {
//       if (i18n.language === "en") {
//         return product.description;
//       }

//       return await translateText(
//         product.description,
//         i18n.language,
//       );
//     },

//     staleTime: Infinity,
//   });

//   // category translation
//   const { data: translatedCategory } = useQuery({
//     queryKey: [
//       "translate-category",
//       product.id,
//       i18n.language,
//     ],

//     queryFn: async () => {
//       if (i18n.language === "en") {
//         return product.category;
//       }

//       return await translateText(
//         product.category,
//         i18n.language,
//       );
//     },

//     staleTime: Infinity,
//   });

//   return (
//     <Card className="group relative overflow-hidden rounded-3xl border border-border/50 bg-background/80 shadow-lg backdrop-blur transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-zinc-900/70">
//       <BorderBeam size={250} duration={8} delay={2} />

//       <CardContent className="p-4">
//         {/* Product Image */}
//         <div className="relative flex h-[240px] items-center justify-center overflow-hidden rounded-2xl bg-muted/30 p-6">
//           <Image
//             src={product.image}
//             alt={translatedTitle || product.title}
//             width={220}
//             height={220}
//             className="h-[200px] w-auto object-contain transition-transform duration-500 group-hover:scale-110"
//           />
//         </div>

//         {/* Product Content */}
//         <div className="mt-5 space-y-3">
//           {/* Category */}
//           <span className="inline-flex rounded-full border px-3 py-1 text-xs font-medium capitalize text-muted-foreground">
//             {translatedCategory || "..."}
//           </span>

//           {/* Title */}
//           <h3 className="line-clamp-2 min-h-[56px] text-base font-semibold leading-7 text-foreground">
//             {translatedTitle || "..."}
//           </h3>

//           {/* Description */}
//           <p className="line-clamp-2 text-sm text-muted-foreground">
//             {translatedDescription || "..."}
//           </p>

//           {/* Rating + Price */}
//           <div className="flex items-center justify-between pt-2">
//             <div className="flex items-center gap-1 text-yellow-500">
//               <Star className="h-4 w-4 fill-yellow-500" />

//               <span className="text-sm font-medium">
//                 {product.rating?.rate}
//               </span>
//             </div>

//             <span className="text-lg font-bold text-primary">
//               ${product.price}
//             </span>
//           </div>

//           {/* Add To Cart */}
//           <div className="pt-4">
//             <ShimmerButton className="w-full rounded-xl px-4 py-2 text-sm font-semibold shadow-lg">
//               <div className="flex items-center justify-center gap-2 text-white">
//                 <ShoppingCart className="h-4 w-4" />

//                 {t("Add To Cart")}
//               </div>
//             </ShimmerButton>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   );
// };

// export default ProductCard;