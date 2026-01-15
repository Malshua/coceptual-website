import { Geist, Geist_Mono } from "next/font/google";
import { PageSEO } from "@/layout/components";
import {
  AboutUs,
  Hero,
  HighLights,
  HowAdWorks,
  JoinBrands,
  WhatYouCan,
} from "@/components/sections/home";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  const title = "Coceptual | Simplifying Media Campaigns";

  const meta_description =
    "Coceptual efficiently streamlines operations, managing campaigns and adverts.";

  const meta_keywords = "campaigns, media, adverts, ads";

  return (
    <div className={`${geistSans.className} ${geistMono.className}`}>
      <PageSEO
        title={title}
        description={meta_description}
        keywords={meta_keywords}
      >
        <meta
          name="google-site-verification"
          content="ZAmD5dHdnjeFkT2FMyvUCx6x5kncrBMFknpTIM3Nt04"
        />
      </PageSEO>

      <div className={`scroll-smooth leading-8`}>
        <Hero />
        <JoinBrands />
        <HighLights />
        <WhatYouCan />
        <HowAdWorks />
        <AboutUs />
      </div>
    </div>
  );
}
