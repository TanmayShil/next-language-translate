"use client";

import React from "react";
import { motion } from "framer-motion";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {

  Send,

  Headphones,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { contactInfo } from "@/JSON/data/contact";



const Contact = () => {
    const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 text-black transition-colors duration-300 dark:bg-black dark:text-white"
    >
      <div className="absolute left-0 top-0 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center rounded-full border border-black/10 bg-black/5 px-4 py-2 text-sm backdrop-blur-md dark:border-white/10 dark:bg-white/5">
            <Headphones className="mr-2 h-4 w-4 text-cyan-500 dark:text-cyan-400" />
            {t("contact_our_team")}
          </div>

          <h2 className="text-4xl font-bold leading-tight md:text-6xl">
            {t("lets_start_a")}
            <span className="bg-linear-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
              {t("conversation")}
            </span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
            {t("have_questions_about_our_products_orders_or_services?_Our_support_team_is_always_ready_to_help_you_with_quick_and_reliable_assistance.")}
          </p>
        </motion.div>
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid gap-5 sm:grid-cols-2"
          >
            {contactInfo.map((item, index) => {
              const Icon = item.icon;

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
                        {t(item.title)}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                        {t(item.value)}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Card className="border border-black/10 bg-white/60 shadow-2xl backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
              <CardContent className="p-8">
                <h3 className="mb-6 text-2xl font-bold text-black dark:text-white">
                  {t("send_us_a_message")}
                </h3>

                <form className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <Input
                      placeholder={t("your_name")}
                      className="h-12 border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
                    />

                    <Input
                      type="email"
                      placeholder={t("your_email")}
                      className="h-12 border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
                    />
                  </div>

                  <Input
                    placeholder={t("subject")}
                    className="h-12 border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
                  />

                  <Textarea
                    placeholder={t("write_your_message")}
                    rows={6}
                    className="border-black/10 bg-white/80 dark:border-white/10 dark:bg-white/5"
                  />

                  <Button className="group h-12 w-full bg-linear-to-r from-cyan-500 to-purple-500 text-white hover:opacity-90">
                    {t("send_message")}
                    <Send className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;