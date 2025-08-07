import Image from "next/image";
import React from "react";
import { media_logo } from "../../../public/assets/images";
import {
  facebook,
  instagram,
  linkedin,
  twitter,
} from "../../../public/assets/icons";

const icons = [facebook, twitter, instagram, linkedin];

const features_options = [
  { label: "Platform features", value: "" },
  { label: "For agencies", value: "" },
  { label: "Customer stories", value: "" },
  { label: "Pricing", value: "" },
  { label: "Blog", value: "" },
  { label: "About us", value: "" },
];

const industry_options = [
  { label: "Terms and Conditions", value: "" },
  { label: "Privacy Policy", value: "" },
  { label: "Cookie Policy", value: "" },
  { label: "EU Applicant Privacy Policy", value: "" },
  { label: "California Applicant Privacy Notice", value: "" },
  { label: "Contact", value: "" },
  { label: "Help Center", value: "" },
];

const Footer = () => {
  return (
    <div className="bg-[#333B49] flex flex-col-reverse lg:flex-row gap-10 md:items-start justify-between lg:px-20 lg:pt-10 lag:pb-5 p-10">
      <div className="lg:w-[40%] flex flex-col gap-6">
        <Image src={media_logo} alt="media logo" width={50} height={50} />

        <p className="text-sm text-[#A3ABB8] leading-6">
          A programmatic advertising platform that has high performance and is
          easy to use. Create AI-driven programmatic campaigns and start
          generating more conversions.
        </p>

        <div className="flex items-center gap-4">
          {icons.map((icon, i) => (
            <Image src={icon} alt="social media icon" key={i} />
          ))}
        </div>

        <p className="text-sm text-[#A3ABB8]">
          © 2015 - 2025 | Humlegårdsgatan 19A, 114 46 Stockholm, Sweden
        </p>
      </div>
      <div className="text-sm text-[#A3ABB8] flex flex-col md:flex-row gap-10 md:gap-20">
        <ul className="flex flex-col gap-6 text-center md:text-left">
          {features_options.map((feat, i) => (
            <li key={i}>{feat.label}</li>
          ))}
        </ul>
        <ul className="flex flex-col gap-6 text-center md:text-left">
          {industry_options.map((feat, i) => (
            <li key={i}>{feat.label}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Footer;
