import React from "react";
import {
  ait,
  amga,
  info,
  ncs,
  noa,
  pmb,
  tcn,
} from "../../../../public/assets/images";
import { Wrapper } from "@/layout/components";
import Image, { StaticImageData } from "next/image";

// const logos = [bet, tonybet, redbull, finix, leon, deriv];

const projects = [
  {
    title: "National Orientation Agency: NOA",
    subtitle: "Production and management",
    side: "left",
    image: noa,
  },
  {
    title: "Africa Military Games November 2024",
    subtitle: "Marketing, Sponsorship and Production",
    side: "right",
    image: amga,
  },
  {
    title: "Nigeria Customs Service 2024",
    subtitle: "Advert and PR Production",
    side: "left",
    image: ncs,
  },
  {
    title: "Federal Ministry of Information and Culture 2020–2024",
    subtitle: "Advert & Content placement and development",
    side: "right",
    image: info,
  },
  {
    title: "PMB Presidential Documentary 2022–2023",
    subtitle: "Project Event management & Production, Documentary series",
    side: "left",
    image: pmb,
  },
  {
    title: "Nigeria Football Federation: NFF",
    subtitle:
      "Nig vs Ghana Match Day Event management, Sponsorship and Ticketing",
    side: "right",
    image: ait,
  },
  {
    title: "Transmission Company of Nigeria: TCN 2020–2023",
    subtitle: "Weekly TV program: The Bridge 360 show",
    side: "left",
    image: tcn,
  },
];

const JoinBrands = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-14 border-b border-gray-100">
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Projects & Engagements
        </h2>

        {/* <div className="flex flex-col gap-5 items-center justify-between md:flex-wrap md:flex-row">
          {logos.map((logo, i) => (
            <Image src={logo} alt="logo image" key={i} />
          ))}
        </div> */}
        <section className="relative bg-white py-8 px-4">
          <div className="max-w-6xl mx-auto space-y-14">
            {projects.map((item, index) => (
              <ProjectItem key={index} {...item} />
            ))}
          </div>
        </section>
      </Wrapper>
    </div>
  );
};

function ProjectItem({
  title,
  subtitle,
  side,
  image,
}: {
  title: string;
  subtitle: string;
  side: string;
  image: StaticImageData;
}) {
  const isRight = side === "right";

  return (
    <div
      className={`flex flex-col md:flex-row ${
        isRight ? "md:flex-row-reverse" : ""
      } items-center gap-5`}
    >
      {/* Image */}
      <div className="w-full md:w-1/3 flex justify-center">
        <div className="relative h-28 w-full rounded-xl border border-purple-500 bg-gray-200">
          <Image
            src={image}
            alt="display image"
            fill
            className="object-contain p-3"
          />
        </div>
      </div>

      {/* Text */}
      <div
        className={`w-full md:w-2/3 ${
          isRight ? "md:text-right" : "md:text-left"
        } text-center`}
      >
        <h3 className="font-semibold text-lg text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{subtitle}</p>
      </div>
    </div>
  );
}

export default JoinBrands;
