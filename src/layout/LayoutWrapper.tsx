/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from "react";
import { DefaultLayout, StrippedLayout } from "./layouts";

const layouts: any = {
  default: DefaultLayout,
  stripped: StrippedLayout,
};

const LayoutWrapper = ({ children, ...other }: any) => {
  // Memoize the layout selection
  const Layout = useMemo(() => {
    return layouts[children.type.layout] || DefaultLayout;
  }, [children.type.layout]);

  return <Layout {...other}>{children}</Layout>;
};

export default LayoutWrapper;
