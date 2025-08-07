import Head from "next/head";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

interface PageSEOProps {
  title: string;
  description: string;
  keywords?: string;
  children?: ReactNode;
}

const PageSEO = ({ title, description, keywords, children }: PageSEOProps) => {
  const siteUrl = "https://coceptual.com/";
  const { asPath } = useRouter();
  const cleanPath = asPath.split("#")[0].split("?")[0];
  const seoUrl = `${siteUrl}${cleanPath.replace(/\/$/, "")}`;

  return (
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <link rel="canonical" href={seoUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`${siteUrl}assets/images/media_logo.svg`}
      />
      <meta property="og:url" content={seoUrl} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`${siteUrl}assets/images/media_logo.svg`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            url: seoUrl,
            name: title,
            description,
          }),
        }}
      />

      {children}
    </Head>
  );
};

export default PageSEO;
