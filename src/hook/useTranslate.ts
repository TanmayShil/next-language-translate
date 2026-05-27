import { Product } from "@/@type/product";
import { translateTextFns } from "@/api/api.function";
import { useQuery } from "@tanstack/react-query";
import { useTranslation } from "react-i18next";

export const useTranslateTitle = (product: Product) => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: [
      "translate-title",
      product.id,
      i18n.language,
    ],
    queryFn: async () => {
      if (i18n.language === "en") {
        return product.title;
      }

      return await translateTextFns(
        product.title,
        i18n.language,
      );
    },
    staleTime: Infinity,
  })
}

export const useTranslateDescription = (product: Product) => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: [
      "translate-description",
      product.id,
      i18n.language,
    ],
    queryFn: async () => {
      if (i18n.language === "en") {
        return product.description;
      }

      return await translateTextFns(
        product.description,
        i18n.language,
      );
    },
    staleTime: Infinity,
  })
}

export const useTranslateCategory = (product: Product) => {
  const { i18n } = useTranslation();
  return useQuery({
    queryKey: [
      "translate-category",
      product.id,
      i18n.language,
    ],
    queryFn: async () => {
      if (i18n.language === "en") {
        return product.category;
      }

      return await translateTextFns(
        product.category,
        i18n.language,
      );
    },
    staleTime: Infinity,
  })
}