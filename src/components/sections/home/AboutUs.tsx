import Image from "next/image";
import { img308 } from "../../../../public/assets/images";

function AboutUs() {
  return (
    <section className="relative bg-white py-20 px-6 md:px-12 lg:px-20">
      {/* About Us */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
        {/* Text */}
        <div>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-gray-900">
            About <span className="text-[#9B2B8E]">Us</span>
          </h2>

          <div className="mt-6 space-y-5 text-gray-600 leading-relaxed">
            <p>
              Conceptual Media Limited is a registered media consultancy firm
              based in Abuja, providing creative solutions powered by strategy,
              research, and innovation.
            </p>

            <p>
              We offer a full spectrum of services including media production,
              marketing communications, content development, event planning,
              public relations, advertising, and consultancy services tailored
              to help organizations achieve measurable impact.
            </p>

            <p>
              Our work spans research-driven strategy, audience engagement,
              creative design, and execution across TV, radio, digital, and
              experiential platforms — delivering excellence with integrity.
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="relative h-[380px] w-full rounded-3xl overflow-hidden shadow-xl">
          <Image
            src={img308}
            alt="Conceptual Media Team"
            fill
            className="object-fit"
            priority
          />
        </div>
      </div>

      {/* Vision & Mission */}
      <div className="max-w-7xl mx-auto mt-24">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Vision */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#9B2B8E] to-[#FA82BE] p-10 text-white shadow-lg">
            <h3 className="text-2xl font-semibold">Our Vision</h3>
            <p className="mt-4 leading-relaxed text-purple-100">
              To achieve global recognition in our field by delivering
              exceptional media production and consulting services that exceed
              expectations, inspire trust, and drive meaningful impact.
            </p>
          </div>

          {/* Mission */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#F4B41A] to-amber-500 p-10 text-gray-900 shadow-lg">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="mt-4 leading-relaxed text-gray-800">
              To surpass client expectations through world-class service,
              data-driven marketing, and creative storytelling — while
              maintaining integrity, operational excellence, and continuous
              innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
