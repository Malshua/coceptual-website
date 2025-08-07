import LayoutWrapper from "@/layout/LayoutWrapper";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function App({ Component, pageProps }: AppProps) {
  return (
    <div className={` scroll-smooth`}>
      <Script id="gtm-script" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NJMRMS7Q');
        `}
      </Script>
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </div>
  );
}

export default App;
