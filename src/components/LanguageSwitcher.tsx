"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value);
    localStorage.setItem("language", e.target.value);
  };

  return (
    <select
      onChange={handleChange}
      value={i18n.language}
      className="border p-2 rounded-md dark:bg-white bg-blue-500 cursor-pointer text-white dark:text-black outline-none"
    >
      <option value="en">{t("english")}</option>
      <option value="hi">{t("Hindi")}</option>
      <option value="bn">{t("Bengali")}</option>
    </select>
  );
}
