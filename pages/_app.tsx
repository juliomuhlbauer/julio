import { Layout } from "@/layout";
import { theme } from "@/theme";
import { playPing } from "@/utils/sound";
import { ChakraProvider } from "@chakra-ui/react";

import { config } from "config";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router, useRouter } from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => {
  NProgress.start();
  playPing();
});
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const Analytics = () => {
  const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID;

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />

      <Script id="google-analytics" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${GA_TRACKING_ID}', {
          page_path: window.location.pathname,
        });
      `}
      </Script>

      <Script src="https://cdn.splitbee.io/sb.js" />
    </>
  );
};

const SEO = () => {
  const router = useRouter();
  return (
    <DefaultSeo
      defaultTitle={config.name}
      titleTemplate={`%s | ${config.name}`}
      description={config.description}
      openGraph={{
        site_name: config.name,
        title: config.name,
        description: config.description,
        url: config.url + router.asPath,
        locale: "en_US",
        type: "website",
        images: [
          {
            url: config.banner,
            width: 1200,
            height: 630,
            alt: config.description,
          },
        ],
      }}
      twitter={{
        cardType: "summary_large_image",
        handle: config.handle,
      }}
    />
  );
};

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={config.icons.web} />
      </Head>
      <SEO />
      {process.env.NODE_ENV !== "development" && <Analytics />}
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
};
export default App;
