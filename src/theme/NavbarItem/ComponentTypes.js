import React from "react";
import ComponentTypes from "@theme-original/NavbarItem/ComponentTypes";
import { useLocation } from "@docusaurus/router";
import useBaseUrl from "@docusaurus/useBaseUrl";

function NordXDataspaceLogoAndTitle(props) {
  const { pathname } = useLocation();
  return (
    <div className="flex items-center">
      <img src={useBaseUrl("/img/nxd.jpg")} className={"w-[40px] h-[40px]"}/>
      <p className="text-[20px] md:text-[28px] text-white ml-2 font-semibold">NordXDataspace</p>
    </div>
  );
}

function IndyNavigationBtn(props) {
  const { pathname } = useLocation();
  return (
    <a
      className="inline-block rounded-full border border-white bg-white text-[12px] px-3 py-2 md:px-3 md:py-2 md:text-[12px] font-medium text-black hover:bg-transparent hover:no-underline hover:text-white focus:outline-none focus:ring active:text-black"
      href="https://indy.nxd.foundation/"
    >
      Indy testnet
    </a>
  );
}

export default {
  ...ComponentTypes,
  "custom-indy-nav-btn": IndyNavigationBtn,
  "custom-nordxdataspace-logo": NordXDataspaceLogoAndTitle,
};
