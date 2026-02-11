import { Wrapper } from "@/layout/components";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { hero_image } from "../../../../public/assets/images";
import Link from "next/link";
import { hero_check_icon } from "../../../../public/assets/icons";

const phrases = ["to Use...", "to Buy...", "to Trust..."];

const Hero = () => {
  const [index, setIndex] = useState(0); // phrase index
  const [subIndex, setSubIndex] = useState(0); // character index
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === phrases[index].length + 1 && !deleting) {
      // Pause at the end
      setTimeout(() => setDeleting(true), 1500);
      return;
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timeout = setTimeout(
      () => {
        setSubIndex((prev) => (deleting ? prev - 1 : prev + 1));
      },
      deleting ? 50 : 100,
    );

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index]);

  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearInterval(blinkInterval);
  }, []);

  const typedText = phrases[index].substring(0, subIndex);
  const showCursor = (
    <span className={`${blink ? "opacity-100" : "opacity-0"}`}>|</span>
  );

  const features: string[] = ["Media", "Consultancy", "Marketing"];

  return (
    <div className="h-screen">
      <section
        className="h-screen overflow-y-auto"
        style={{
          backgroundImage: `url('/assets/images/bg-design.svg'), linear-gradient(to right, #FA82E0, #FA82BE)`,
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundPosition: "bottom, top",
          backgroundSize: "contain, cover",
        }}
      >
        <Wrapper>
          <div className="hidden xl:flex items-center gap-10 justify-between mt-24">
            <Image src={hero_image} alt="hero-img" width={700} height={520} />

            <div className="flex flex-col gap-10">
              <h1 className="text-2xl lg:text-5xl font-bold text-white">
                {/* <span className="italic text-[#9B2B8E] uppercase text-2xl lg:text-4xl">
                  {" "}
                  Coceptual
                </span> */}
                <br />
                We&apos;re all about Sales Result{" "}
                {/* {typedText && (
                  <span className="text-white">
                    {typedText}
                    {showCursor}
                  </span>
                )} */}
              </h1>

              <Link
                className="all__trans bg-[#F4B41A] hover:border-2 hover:bg-transparent border-white flex w-64 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
                href="https://media-frontend-ashen.vercel.app/login"
                target="_blank"
              >
                Get Started
              </Link>

              <div className="flex flex-row gap-6">
                {features.map((feat, i) => (
                  <div key={i} className="flex gap-2">
                    <Image src={hero_check_icon} alt="hero icon" />
                    <span className="text-white text-sm md:text-base">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="xl:hidden flex flex-col items-center gap-3 justify-between mt-24">
            <h1 className="text-2xl lg:text-5xl font-bold text-white text-center">
              Programmatic Advertising Made Easy{" "}
              {typedText && (
                <span className="text-white">
                  {typedText}
                  {showCursor}
                </span>
              )}
            </h1>

            <Image src={hero_image} alt="hero-img" width={700} height={520} />

            <div className="flex flex-col items-center justify-center gap-10">
              <Link
                className="text-sm all__trans bg-[#F4B41A] hover:border-2 hover:bg-transparent border-white flex w-64 cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-white"
                href="https://media-frontend-ashen.vercel.app/login"
                target="_blank"
              >
                Get Started
              </Link>

              <div className="flex flex-col md:flex-row gap-6">
                {features.map((feat, i) => (
                  <div key={i} className="flex gap-2">
                    <Image src={hero_check_icon} alt="hero icon" />
                    <span className="text-white text-xs md:text-base">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
};

export default Hero;
