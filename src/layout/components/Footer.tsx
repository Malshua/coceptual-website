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
  // { label: "EU Applicant Privacy Policy", value: "" },
  // { label: "California Applicant Privacy Notice", value: "" },
  { label: "Contact", value: "" },
  { label: "Help Center", value: "" },
];

const Footer = () => {
  return (
    <div className="bg-[#333B49] flex flex-col-reverse lg:flex-row gap-10 md:items-start justify-between lg:px-20 lg:pt-10 lag:pb-5 p-10">
      <div className="lg:w-[40%] flex flex-col gap-6">
        <div className="flex items-center gap-1">
          {" "}
          <Image
            src={media_logo}
            alt="media logo"
            width={50}
            height={50}
          />{" "}
          <p className="text-2xl font-semibold bg-gradient-to-r  from-[#9B2B8E] via-[#F4B41A] to-[#8A8A8A] bg-clip-text text-transparent">
            Coceptual Ltd
          </p>
        </div>

        <p className="text-sm text-[#A3ABB8] leading-6">
          A programmatic platform that has high performance and is easy to use.
          Create AI-driven programmatic campaigns and start generating more
          conversions.
        </p>

        <div className="flex items-center gap-4">
          {icons.map((icon, i) => (
            <Image src={icon} alt="social media icon" key={i} />
          ))}
        </div>

        <p className="text-sm text-[#A3ABB8]">
          © 2015 - {new Date().getFullYear()} | FCT, Abuja
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
