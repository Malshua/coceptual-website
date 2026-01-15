import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { media_logo } from "../../../public/assets/images";
import { DropDownComponent } from "@/components/elements";
import { internalRoutes, navRoutes } from "@/utils/appRoutes";

const MobileNav = () => {
  const [open, setOpen] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleMenu = () => {
    setOpen((prev) => !prev);
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
    { label: "Prospecting Ads", link: "" },
    { label: "Retargeting Ads", link: "" },
    { label: "Contextual Advertising", link: "" },
    { label: "Native Advertising", link: "" },
    { label: "ROAS Optimisation", link: "" },
    { label: "Global Ad Inventory", link: "" },
  ];

  const industry_options = [
    { label: "Ecommerce", link: "" },
    { label: "Agencies", link: "" },
    // { label: "Trading Platform", link: "" },
    // { label: "iGaming", link: "" },
  ];

  const resource_options = [
    { label: "Careers", link: "" },
    { label: "Contact", link: "" },
    { label: "Help Center", link: "" },
  ];

  return (
    <nav className="block xl:hidden">
      <div
        className={`all__trans fixed top-0 right-0 left-0 z-[500] flex w-full items-center justify-between border-b border-white px-4 py-1 bg-gradient-to-r from-[#FA82E0] to-[#FA82BE] ${
          navbar ? "shadow-lg" : ""
        }`}
      >
        <div className="flex-1">
          <div className="flex items-center">
            <Link href={internalRoutes.HOME} className="mr-2">
              <Image src={media_logo} alt="media logo" width="60" height="60" />
            </Link>
            <p className="text-2xl font-semibold bg-gradient-to-r  from-[#9B2B8E] via-[#F4B41A] to-[#8A8A8A] bg-clip-text text-transparent">
              Coceptual Ltd
            </p>
          </div>
        </div>

        <div className="mr-2 flex items-center gap-5 xl:hidden">
          <button
            onClick={handleMenu}
            className={`text-white } inline-flex items-center justify-center rounded-md text-2xl`}
          >
            {open === true ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <div
        className={`fixed top-15.5 bottom-0 z-[9999] flex w-[250px] flex-col gap-y-4 overflow-y-auto bg-white p-5 transition-all duration-300 ease-in-out ${
          open ? "right-0" : "-right-96"
        }`}
      >
        <ul className="text-primary-default flex flex-col gap-6">
          <DropDownComponent
            title="Platform Features"
            items={features_options}
            handleMenu={handleMenu}
          />

          <DropDownComponent
            title="Industries"
            items={industry_options}
            handleMenu={handleMenu}
          />

          {navRoutes?.map((route, index) => (
            <li
              key={index}
              onClick={handleMenu}
              className="text-lg text-[#5C667B] border-b-2 border-[#D9DBE1] pb-2"
            >
              <Link href={route?.link}>{route?.label}</Link>
            </li>
          ))}

          <DropDownComponent
            title="Resources"
            items={resource_options}
            handleMenu={handleMenu}
          />
        </ul>
        <div className="flex flex-col items-center gap-8">
          <button className="py-6.5 hover:border-b-2 border-white all__trans text-white">
            <span>Login</span>
          </button>

          <Link
            className="all__trans bg-[#F4B41A] hover:border-2 hover:bg-transparent border-white flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-medium text-white"
            href=""
          >
            Book a Free Demo
          </Link>
        </div>
      </div>

      {open && (
        <div
          onClick={handleMenu}
          className="fixed top-0 right-0 bottom-0 left-0 z-20 bg-black/40"
        />
      )}
    </nav>
  );
};

export default MobileNav;
