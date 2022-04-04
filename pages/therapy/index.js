import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";

import { Header } from "../../components/Header";

const Therapy = () => {
  const { t } = useTranslation("common");
  const router = useRouter();

  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-white to-yellow-200 py-2">
        <Header router={router} t={t} />
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center"></main>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Therapy;
