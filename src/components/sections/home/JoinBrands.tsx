import React from "react";
import {
  bet,
  deriv,
  finix,
  leon,
  redbull,
  tonybet,
} from "../../../../public/assets/images";
import { Wrapper } from "@/layout/components";
import Image from "next/image";

const logos = [bet, tonybet, redbull, finix, leon, deriv];

const JoinBrands = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center py-14 border-b border-gray-100">
      <Wrapper className="flex flex-col gap-6">
        <h2 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Join hundreds of brands growing with Coceptual
        </h2>

        <div className="flex flex-col gap-5 items-center justify-between md:flex-wrap md:flex-row">
          {logos.map((logo, i) => (
            <Image src={logo} alt="logo image" key={i} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default JoinBrands;
