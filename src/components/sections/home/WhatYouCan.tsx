import { Wrapper } from "@/layout/components";
import React from "react";
import {
  bring_right,
  curious_customer,
  large_context,
} from "../../../../public/assets/images";
import Image from "next/image";
import Link from "next/link";

const data = [
  {
    image: bring_right,
    title: "Bring the right people to your website",
    text: "Get your message across. Automatically find new customers online and draw in the people who are looking for what you're offering.",
    bttnColor: "#18D2D9",
    bttnText: "Prospecting Ads",
    item: true,
  },
  {
    image: curious_customer,
    title: "Turn curious visitors into paying customers",
    text: "Stay on top of your future customers’ minds. Display retargeting ads to visitors who showed intent but haven't made the decision yet.",
    bttnColor: "#E333B9",
    bttnText: "Retargeting Ads",
  },
  {
    image: large_context,
    title: "Show your ads in the perfect context",
    text: "Powered by Moments AI's cutting-edge contextual targeting, Match2One scans thousands of premium websites within 20 milliseconds, making pages in contextual segments accessible to you in real-time.",
    bttnColor: "#18D2D9",
    bttnText: "Contextual Ads",
  },
];

const WhatYouCan = () => {
  return (
    <div className="bg-gradient-to-r from-[#F9F9F9] to-[#FFFFFF] py-20">
      <Wrapper className="flex flex-col gap-14">
        <h3 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          What can you do with Coceptual?
        </h3>
        <div className="flex items-center justify-center flex-wrap gap-10">
          {data.map((dat, i) => (
            <div
              key={i}
              className="max-w-[330px] shadow flex flex-col items-center justify-center p-4 h-[450px]"
            >
              <div className="flex flex-col gap-4 items-center justify-center">
                <Image src={dat?.image} alt="card image" height={155} />
                <h3
                  className={`text-lg font-semibold text-center leading-5 ${
                    dat?.item ? "mt-5" : ""
                  }`}
                >
                  {dat?.title}
                </h3>
                <p className="text-sm text-center">{dat?.text}</p>
              </div>

              <Link
                className={`all__trans border-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-1 font-medium mt-auto`}
                href=""
                style={{
                  borderColor: dat?.bttnColor,
                  color: dat?.bttnColor,
                }}
              >
                {dat?.bttnText}
              </Link>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhatYouCan;
