import Link from "next/link";
import { useTranslation } from "next-i18next";
import Head from "next/head";

export function Header({ router }) {
  const { t } = useTranslation("common");

  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <header className={`w-full bg-white/50 backdrop-blur-lg`}>
        <div className="mx-auto max-w-7xl ">
          <div
            className={`mx-auto flex max-w-screen-xl items-center justify-between py-10 px-8`}
          >
            <a href="/">
              <img
                src={
                  router.pathname === "/therapy"
                    ? "/logos/index_therapy.png"
                    : "/logos/index_faceyoga.png"
                }
                alt={router.pathname}
                className="w-110 h-60 object-scale-down"
              />
            </a>
            <nav>
              <ul className="flex items-center justify-start">
                <li>
                  <Link href="#">
                    <a className="text-md border-b-2 border-transparent px-2 py-6 font-bold leading-[22px] text-black hover:border-indigo-400 hover:text-indigo-500 md:px-3 lg:px-6">
                      {t("home")}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-md border-b-2 border-transparent px-2 py-6 font-bold leading-[22px] hover:border-indigo-400 hover:text-indigo-500 md:px-3 lg:px-6">
                      {t("training")}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-md border-b-2 border-transparent px-2 py-6 font-bold leading-[22px] hover:border-indigo-400 hover:text-indigo-500 md:px-3 lg:px-6">
                      {t("session")}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-md border-b-2 border-transparent px-2 py-6 font-bold leading-[22px] hover:border-indigo-400 hover:text-indigo-500 md:px-3 lg:px-6">
                      {t("shop")}
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="#">
                    <a className="text-md border-b-2 border-transparent px-2 py-6 font-bold leading-[22px] hover:border-indigo-400 hover:text-indigo-500 md:px-3 lg:px-6">
                      {t("connect")}
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex">
              {/* Logo */}
              <div></div>
              {/* Sections */}
              <div></div>
              <Link
                href={router.pathname}
                locale={router.locale === "en" ? "cz" : "en"}
              >
                <img
                  src={
                    router.locale === "en"
                      ? "/logos/cz_flag.png"
                      : "/logos/uk_flag.png"
                  }
                  className="inline-block h-12 w-12 items-end rounded-full ring-2 ring-white"
                />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export const getStaticProps = async ({ locale }) => {
  return {
    props: await serverSideTranslations(locale, ["common"]),
  };
};
