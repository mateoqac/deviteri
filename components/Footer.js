import { version } from "next-i18next/package.json";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { t } = useTranslation("footer");

  return (
    <footer>
      <p>{t("description")}</p>
      <p>{version}</p>
    </footer>
  );
};
