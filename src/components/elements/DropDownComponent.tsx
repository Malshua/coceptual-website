/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from "next/link";
import React, { useState } from "react";
import { PiCaretDown } from "react-icons/pi";

interface DropDownComponentTypes {
  title?: string;
  items?: any;
  handleMenu?: any;
}

const DropDownComponent = ({
  title,
  items,
  handleMenu,
}: DropDownComponentTypes) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const handleOpenDropdown = () => {
    setOpenDropdown(!openDropdown);
  };

  return (
    <div>
      <div
        className="all__trans relative text-lg flex items-center gap-2 border-b-2 border-[#D9DBE1] pb-2 text-white outline-none"
        onClick={() => handleOpenDropdown()}
      >
        <span className="text-[#5C667B]">{title}</span>
        <span className="text-[#5C667B]">
          <PiCaretDown />
        </span>
      </div>

      {/* {openDropdown && ( */}
      <div
        className={`text-[#5C667B] all__trans flex w-48 flex-col overflow-hidden text-left text-sm ${
          openDropdown ? "h-full py-1" : "h-0"
        }`}
      >
        {items?.map((item: any, index: any) => (
          <Link
            href={item?.link}
            className="my-1 border-b-[0.5px] border-[#D9DBE1] px-3 py-2 capitalize"
            key={index}
            onClick={handleMenu}
          >
            {item?.label}
          </Link>
        ))}
      </div>
      {/* )} */}
    </div>
  );
};
export default DropDownComponent;
