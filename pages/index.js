import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Link from "next/link";
import Head from "next/head";

const Homepage = () => {
  const { t } = useTranslation("common");
  const router = useRouter();
  return (
    <>
      <Head>
        <title>{t("title")}</title>
      </Head>
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-white to-yellow-200 py-2">
        <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
          <div className="mt-6 space-y-12 lg:grid lg:grid-cols-2 lg:gap-x-6 lg:space-y-0">
            <div className="h-100 relative aspect-square w-full overflow-hidden rounded-lg bg-white">
              <Link href="/faceyoga">
                <img
                  src="/logos/index_faceyoga.png"
                  alt="faceyoga"
                  className="h-full w-full object-cover object-center"
                />
              </Link>
            </div>
            <div className="h-100 relative aspect-square w-full overflow-hidden rounded-lg bg-white">
              <Link href="/therapy">
                <img
                  src="/logos/index_therapy.png"
                  alt="therapy"
                  className="h-full w-full object-cover object-center"
                />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});

export default Homepage;
