import { Wrapper } from "@/layout/components";
import Image from "next/image";
import {
  img341,
  img342,
  img345,
  img346,
  img347,
  img623,
} from "../../../../public/assets/images";

const data = [
  {
    icon: img623,
    title: "1. Event Coverage and Live Streaming",
    text: "We provide all kinds of Event production coverage with world class live streaming services. whether it's a corporate event, concert, or personal celebration. Our state-of-the-art technology and approach, guarantee your event broadcast across the globe.",
  },
  {
    icon: img342,
    title: "2. Camera and lighting",
    text: "We are well-equipped with top-quality equipment that can deliver exceptionally detailed images and video content for documentary and filmmaking, utilizing fresh material.",
  },
  {
    icon: img341,
    title: "3. Video Editing",
    text: "This is the hallmark of any content, whether it's interviews, TV events, or archival work. Our primary goal is to ensure that the final product meets your expectations, and that’s exactly what we strive to achieve",
  },
  {
    icon: img345,
    title: "4. Graphic design ",
    text: "Design serves as a powerful medium for conveying our message effectively. We achieve this through compelling creative graphic design that simplifies and clarifies our illustrations.",
  },
  {
    icon: img346,
    title: "5. Marketing",
    text: "Media and marketing are closely intertwined. The ability to offer expertise in content marketing, sponsorship, and partnership is a distinctive quality that only the most well trained professionals can deliver",
  },
  {
    icon: img347,
    title: "6. Photography",
    text: "Photography is crucial in bringing your creative vision to life. It is a stunning art form that enables enthusiastic learners to harness light in the most imaginative ways",
  },
];

const HowAdWorks = () => {
  return (
    <div className="py-20 border-t border-b border-gray-100">
      <Wrapper className="flex flex-col gap-14">
        <h3 className="text-[#28273A] text-xl md:text-2xl lg:text-4xl font-bold text-center">
          Our Production Competence
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((dat, i) => (
            <div key={i} className="flex flex-col p-4">
              <div className="flex flex-col gap-4">
                <div className="h-20 w-20 rounded-full shadow flex justify-center items-center">
                  <Image
                    src={dat?.icon}
                    alt="card image"
                    height={100}
                    width={100}
                    className="object-cover rounded-full h-20 w-20"
                  />
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
