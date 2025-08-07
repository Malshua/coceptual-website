import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  width?: string;
  className?: string;
  paddingY?: string;
  paddingX?: string;
}

const Wrapper = ({
  children,
  width,
  className = "",
  paddingY,
  paddingX,
}: WrapperProps) => {
  const defaultWidth = "max-w-[1400px] w-full md:w-[90%] lg:w-[95%]";
  const defaultPaddingY = "py-4";
  const defaultPaddingX = "px-4 md:px-4";

  return (
    <div
      className={`mx-auto ${
        width ? `${width} ${defaultWidth}` : defaultWidth
      } ${paddingY ?? defaultPaddingY} ${
        paddingX ?? defaultPaddingX
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
