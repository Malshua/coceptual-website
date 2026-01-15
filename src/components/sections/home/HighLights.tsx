import React from "react";
import {
  analytics,
  business,
  content,
  handshake,
  marketing,
  social,
} from "../../../../public/assets/images";
import Image from "next/image";
import { Wrapper } from "@/layout/components";

const data = [
  {
    title: "Media buying",
    text: "We improve our Media Negotiation, Buying, and Bid Management by harnessing our extensive network within the media industry.",
    image: social,
  },
  {
    title: "Content Development and Production",
    text: "We regularly create a variety of branded video content, ranging from multi-episode series to montages, promotional advertisements and interviews. ",
    image: content,
  },
  {
    title: "Sponsorship and Partnership",
    text: "We foster valuable collaborations and partnerships that elevate the position and address the needs of each partner. ",
    image: handshake,
  },
  {
    title: "Consultancy Service",
    text: "We specialize in helping businesses structure their events in a way that transforms them into more than just projects;",
    image: business,
  },
  {
    title: "Marketing",
    text: "Every business heavily relies on its ability to sell and persuade third parties to embrace the products or services it offers to its clients. This is where we step in; we enhance your service to make it more appealing",
    image: marketing,
  },
  {
    title: "Monitoring, Analytics, compliance",
    text: "In whatever we do, result is the focus, from monitoring your campaign across all platforms, to providing detailed analytics of campaign performance to help with decision making and next step",
    image: analytics,
  },
];

const HighLights = () => {
  return (
    <div>
      <Wrapper className="flex flex-col gap-14">
        <h3 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          What We Do?
        </h3>
        <div className="flex gap-16 flex-wrap items-center justify-center">
          {data.map((dat, i) => (
            <div
              key={i}
              className="flex flex-col justify-center items-center max-w-[350] gap-4"
            >
              <Image
                src={dat.image}
                alt="card image"
                height={120}
                width={120}
              />
              <h3 className="text-lg font-semibold text-center">
                {dat?.title}
              </h3>
              <p className="text-sm text-center">{dat?.text}</p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default HighLights;
