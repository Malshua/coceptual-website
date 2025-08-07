import React from "react";
import {
  create_icon,
  discover_icon,
  prepare_icon,
  reach_icon,
  setup_icon,
  watch_icon,
} from "../../../../public/assets/icons";
import { Wrapper } from "@/layout/components";
import Image from "next/image";

const data = [
  {
    icon: create_icon,
    title: "1. Create a Coceptual account",
    text: "Sign up for a free demo of the platform. You'll be amazed at how easy it is to start high-performing programmatic campaigns.",
  },
  {
    icon: prepare_icon,
    title: "2. Prepare your ads",
    text: "Upload your banners to the platform or build eye-catching creatives yourself in our own Creative Studio.",
  },
  {
    icon: setup_icon,
    title: "3. Set up a programmatic campaign",
    text: "Get your campaign up and running in no time. All you have to do is set your goals – the rest will be taken care of.",
  },
  {
    icon: watch_icon,
    title: "4. Watch an AI optimise for you",
    text: "We're proud of the results our AI is delivering with smart ad placements. Once you see how much time it will save you, we're sure you'll see why.",
  },
  {
    icon: discover_icon,
    title: "5. Discover useful insights",
    text: "See transparent reports of how your ads are performing on which websites, and track what you're getting for your money.",
  },
  {
    icon: reach_icon,
    title: "6. Reach customers that are slipping away",
    text: "Stay top of mind with the people who visited your site and left without buying anything, with retargeting ads.",
  },
];

const HowAdWorks = () => {
  return (
    <div className="py-20 border-t border-b border-gray-100">
      <Wrapper className="flex flex-col gap-14">
        <h3 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          How Programmatic Advertising Works
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((dat, i) => (
            <div key={i} className="flex flex-col p-4">
              <div className="flex flex-col gap-4">
                <div className="p-5 h-20 w-20 rounded-full shadow flex justify-center items-center">
                  <Image src={dat?.icon} alt="card image" />
                </div>
                <h3 className={`text-lg font-semibold text-left leading-5`}>
                  {dat?.title}
                </h3>
                <p className="text-sm text-left">{dat?.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default HowAdWorks;
