import React from "react";

import SiteFooter from "@components/global/Footer";
import SiteHeader from "@components/global/Header";

const DefaultLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <>
      <SiteHeader />
      <main className="defaultLayoutContent">{children}</main>
      <SiteFooter />
    </>
  );
};

export default DefaultLayout;
