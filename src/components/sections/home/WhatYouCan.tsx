import { Wrapper } from "@/layout/components";
import React from "react";
import { img380, img398, img407 } from "../../../../public/assets/images";
import Image from "next/image";

const data = [
  {
    image: img407,
    title: "Media Buy",
    text: "At Coceptual Ltd, we specialize in creating tailored media buy plans that maximize exposure while staying within budget. Our expertise in negotiating with networks and stations ensures that our clients receive prime slots and the best possible rates. ",
    bttnColor: "#18D2D9",
    bttnText: "Prospecting Ads",
    item: true,
  },
  {
    image: img380,
    title: "Podcasting",
    text: "Our podcast space provides a platform for creatives to produce high-quality content throughout the day. We uphold the highest standards in video and content development, utilizing top-notch production equipment and skilled teams to support your content creation needs.",
    bttnColor: "#E333B9",
    bttnText: "Retargeting Ads",
  },
  {
    image: img398,
    title: "Broadcast Coverage",
    text: "Our event coverage capacity is ever improving, using minimal technology to achieve bigger event coverage. We have adequate equipment to meet  your coverage needs, no matter the capacity of such event. Church programs, Weddings, Seminars, Live Concerts, Ceremonies, Symposium and much more.",
    bttnColor: "#18D2D9",
    bttnText: "Contextual Ads",
  },
];

const WhatYouCan = () => {
  return (
    <div
      className="bg-gradient-to-r from-[#F9F9F9] to-[#FFFFFF] py-20"
      id="features"
    >
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

              {/* <Link
                className={`all__trans border-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-1 font-medium mt-auto`}
                href=""
                style={{
                  borderColor: dat?.bttnColor,
                  color: dat?.bttnColor,
                }}
              >
                {dat?.bttnText}
              </Link> */}
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhatYouCan;
