import Layout from "@/components/Layout";
import theme from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Router } from "next/router";
import Script from "next/script";
import NProgress from "nprogress";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const title = "Júlio Werner";
const url = "https://juliowerner.com";
const description = "Júlio Werner is an indie product maker";

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
  return (
    <DefaultSeo
      title={title}
      description={description}
      openGraph={{
        title,
        description,
        url,
        type: "website",
        images: [
          {
            url: "https://juliowerner.com/banner.png",
            width: 1200,
            height: 630,
            alt: description,
          },
        ],
      }}
      twitter={{
        cardType: "summary_large_image",
      }}
    />
  );
};

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Júlio Werner</title>
        <link rel="icon" href="/Logo.svg" />
      </Head>
      <SEO />
      <Analytics />
      <ChakraProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
    </>
  );
}
export default App;
