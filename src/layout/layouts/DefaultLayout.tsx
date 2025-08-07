import React, { ReactNode } from "react";
import { DesktopNav, Footer, MobileNav } from "../components";

type DefaultLayoutProps = {
  children: ReactNode;
};

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <DesktopNav />
      <MobileNav />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default DefaultLayout;
