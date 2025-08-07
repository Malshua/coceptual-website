import React from "react";
import {
  getthemost,
  lastingimpact,
  leavethel,
  programad,
  sign_up,
} from "../../../../public/assets/images";
import Image from "next/image";
import { Wrapper } from "@/layout/components";

const data = [
  {
    title: "Sign up now. Thank us later.",
    text: "Sign up for a full platform demo. Whether you're looking for contextual campaigns or retargeting, you'll be amazed at how easy it is to start high-performing campaigns.",
    image: sign_up,
  },
  {
    title: "Programmatic Advertising for Performance",
    text: "Create programmatic campaigns that actually delivers conversions and ROAS. Built for marketers looking to get a return on native and display ads.",
    image: programad,
  },
  {
    title: "Leave the heavy-lifting to us",
    text: "Our experienced team turns campaigns into success stories. Relax—we've got this.",
    image: leavethel,
  },
  {
    title: "Get your message out there—efficiently.",
    text: "Your programmatic display and native campaigns will get your brand in front of the right audience on the best websites. Automatically targeting your future customers.",
    image: getthemost,
  },
  {
    title: "Reports for lasting impact.",
    text: "Transparency like never before! Our platform shows you exactly where your ads are shown and what you're getting for your money.",
    image: lastingimpact,
  },
];

const HighLights = () => {
  return (
    <div>
      <Wrapper className="flex gap-16 flex-wrap items-center justify-center py-20">
        {data.map((dat, i) => (
          <div
            key={i}
            className="flex flex-col justify-center items-center max-w-[350] gap-4"
          >
            <Image src={dat.image} alt="card image" />
            <h3 className="text-lg font-semibold text-center">{dat?.title}</h3>
            <p className="text-sm text-center">{dat?.text}</p>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

export default HighLights;
