import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { media_logo } from "../../../public/assets/images";
import { internalRoutes, navRoutes } from "@/utils/appRoutes";

const DesktopNav = () => {
  const { asPath } = useRouter();
  const [navbar, setNavbar] = useState(false);
  const [isMouseOverFeatures, setIsMouseOverFeatures] = useState(false);
  const [isMouseOverIndustries, setIsMouseOverIndustries] = useState(false);
  const [isMouseOverExtras, setIsMouseOverExtras] = useState(false);

  const handleMouseOverFeatures = () => {
    setIsMouseOverFeatures(true);
  };

  const handleMouseOverIndustry = () => {
    setIsMouseOverIndustries(true);
  };

  const handleMouseOverExtras = () => {
    setIsMouseOverExtras(true);
  };

  const handleMouseLeaveFeatures = () => {
    setIsMouseOverFeatures(false);
  };

  const handleMouseLeaveIndustry = () => {
    setIsMouseOverIndustries(false);
  };

  const handleMouseLeaveExtras = () => {
    setIsMouseOverExtras(false);
  };

  const changeBackground = () => {
    if (window.scrollY >= 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const features_options = [
    { label: "Prospecting Ads", value: "" },
    { label: "Retargeting Ads", value: "" },
    { label: "Contextual Advertising", value: "" },
    { label: "Native Advertising", value: "" },
    { label: "ROAS Optimisation", value: "" },
    { label: "Global Ad Inventory", value: "" },
  ];

  const industry_options = [
    { label: "Ecommerce", value: "" },
    { label: "Agencies", value: "" },
    { label: "Trading Platform", value: "" },
    { label: "iGaming", value: "" },
  ];

  const resource_options = [
    { label: "Careers", value: "" },
    { label: "Contact", value: "" },
    { label: "Help Center", value: "" },
  ];

  console.log(resource_options);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-[999] bg-gradient-to-r from-[#FA82E0] to-[#FA82BE] hidden transition-all duration-500 ease-in-out xl:block ${
        navbar ? "shadow" : navbar
      }`}
    >
      <div className="max-w-[1400px] w-full px-4 mx-auto">
        <div className="flex items-center justify-between">
          <Link href={internalRoutes.HOME} className="mr-4">
            <Image src={media_logo} alt="media logo" width="60" height="60" />
          </Link>

          <ul className="flex justify-around gap-8 text-white">
            <button
              onMouseOver={handleMouseOverFeatures}
              onMouseLeave={handleMouseLeaveFeatures}
              className="text-white relative flex items-center gap-1 hover:border-b-2 border-white outline-none py-5"
            >
              <span>Platform Features</span>
              <span className="text-white">{/* <BiCaretDown /> */}</span>
              {isMouseOverFeatures && (
                <div className="text-white all__trans absolute top-[78px] left-0 flex w-44 flex-col bg-[#283040] py-1 text-left text-sm">
                  {features_options.map((item, index) => (
                    <Link
                      href={item?.value}
                      className="hover:bg-[#5b6170] my-1 cursor-pointer border-b-[0.5px] border-gray-400 px-3 py-2 capitalize hover:text-white"
                      key={index}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>

            <button
              onMouseOver={handleMouseOverIndustry}
              onMouseLeave={handleMouseLeaveIndustry}
              className="text-white relative flex items-center gap-1 hover:border-b-2 border-white outline-none py-5"
            >
              <span>Industries</span>

              {isMouseOverIndustries && (
                <div className="text-white all__trans absolute top-[78px] left-0 flex w-44 flex-col bg-gray-800 py-1 text-left text-sm">
                  {industry_options.map((item, index) => (
                    <Link
                      href={item?.value}
                      className="hover:bg-[#5b6170] my-1 cursor-pointer border-b-[0.5px] border-gray-400 px-3 py-2 capitalize hover:text-white"
                      key={index}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>

            {navRoutes?.map((route, index) => (
              <li
                key={index}
                className={`${
                  asPath.includes(route?.link) ? "text-white" : ""
                } py-6.5 hover:border-b-2 border-white all__trans`}
              >
                <Link href={route?.link} className="">
                  {route?.label}
                </Link>
              </li>
            ))}

            <button
              onMouseOver={handleMouseOverExtras}
              onMouseLeave={handleMouseLeaveExtras}
              className="text-white relative flex items-center gap-1 hover:border-b-2 border-white outline-none py-6.5"
            >
              <span>About Us</span>

              {isMouseOverExtras && (
                <div className="text-white all__trans absolute top-[78px] left-0 flex w-44 flex-col bg-gray-800 py-1 text-left text-sm">
                  {resource_options.map((item, index) => (
                    <Link
                      href={item?.value}
                      className="hover:bg-[#5b6170] my-1 cursor-pointer border-b-[0.5px] border-gray-400 px-3 py-2 capitalize hover:text-white"
                      key={index}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </button>
          </ul>

          <div className="flex items-center gap-8">
            <Link
              href="https://media-frontend-ashen.vercel.app/login"
              className="py-6.5 hover:border-b-2 border-white all__trans text-white"
            >
              <span>Login</span>
            </Link>

            <Link
              className="all__trans bg-[#2DD79B] hover:border-2 hover:bg-transparent border-white flex w-fit cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
              href=""
            >
              Book a Free Demo
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default DesktopNav;
