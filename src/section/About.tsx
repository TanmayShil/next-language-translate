"use client";

import Lottie from "lottie-react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import shoppingAnimation from "@/assets/json/about.json";
import { aboutdata, features } from "@/JSON/data/about";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-white py-24 text-black transition-colors duration-300 dark:bg-black dark:text-white"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 inline-flex items-center rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
              <Sparkles className="mr-2 h-4 w-4 text-cyan-500 dark:text-cyan-400" />
              {t("about_our_ecommerce_store")}
            </div>
            <h2 className="max-w-xl text-4xl font-bold leading-tight md:text-6xl">
              {t("elevating_your")}
              <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
               {" "} {t("shopping_experience")}
              </span>
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-700 dark:text-gray-300">
              {t(
                "We provide stylish, premium-quality ecommerce products with fast delivery, secure payment systems, and customer-first support. Our mission is to make online shopping simple, modern, and affordable for everyone.",
              )}
            </p>
            <div className="mt-10 grid grid-cols-2 gap-5 md:grid-cols-4">
              {aboutdata.map((item, index) => (
                <Card
                  key={index}
                  className="border border-black/10 bg-white/60 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-white/5"
                >
                  <CardContent className="p-5 text-center">
                    <h3 className="text-2xl font-bold text-black dark:text-white">
                      {t(item.value)}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                      {t(item.label)}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="mx-auto max-w-lg">
              <Lottie animationData={shoppingAnimation} loop />
            </div>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ y: -6 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Card className="h-full border border-black/10 bg-white/60 shadow-lg backdrop-blur-xl transition-all duration-300 dark:border-white/10 dark:bg-white/5">
                      <CardContent className="p-6">
                        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-r from-cyan-500/20 to-purple-500/20">
                          <Icon className="h-6 w-6 text-cyan-500 dark:text-cyan-400" />
                        </div>
                        <h3 className="text-lg font-semibold text-black dark:text-white">
                          {t(feature.title)}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {t(feature.description)}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
