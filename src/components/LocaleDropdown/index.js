import React from "react";
import clsx from "clsx";
import NavbarItem from "@theme/NavbarItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";
import "./localedropdown.css"

export default function LocaleDropDown() {
  const {
    i18n: { currentLocale, locales, localeConfigs },
  } = useDocusaurusContext();

  const alternatePageUtils = useAlternatePageUtils();

  const { search, hash } = useLocation();

  const getFlagEmoji = (countryCode) =>
    String.fromCodePoint(
      ...[...countryCode.toUpperCase()].map((x) => 0x1f1a5 + x.charCodeAt())
    );

  const getFlagEmojiForCountry = (locale) =>
    localeConfigs[locale].htmlLang === "en-GB"
      ? getFlagEmoji("GB")
      : getFlagEmoji("SE");

  const localeItems = locales.map((locale) => {
    const baseTo = `pathname://${alternatePageUtils.createUrl({
      locale,
      fullyQualified: false,
    })}`;
    // preserve ?search#hash suffix on locale switches
    const to = `${baseTo}${search}${hash}`;
    return {
      label: (
        <a className="rounded-t py-2 px-4 block whitespace-no-wrap">
          {getFlagEmojiForCountry(locale)} {localeConfigs[locale].label}
        </a>
      ),
      lang: localeConfigs[locale].htmlLang,
      to,
      target: "_self",
      autoAddBaseUrl: false,
      className:
        // eslint-disable-next-line no-nested-ternary
        locale === currentLocale ? "dropdown__link--active" : "",
    };
  });

  const items = [...localeItems];

  const dropDownLabel = (
    <p className="text-[22px]">{getFlagEmojiForCountry(currentLocale)}</p>
  );

  return (
    <div className="p-0">
      <div className="dropdown inline-block relative">
        <button className=" text-gray-700 font-semibold py-2 px-4 inline-flex items-center">
          <span className="mr-1">{dropDownLabel}</span>
        </button>
        <ul className="dropdown-menu absolute rounded hidden text-gray-700 pt-1 bg-[#edf2f7]">
          {items.map((childItemProps, i) => (
            <NavbarItem
              isDropdownItem
              activeClassName="dropdown__link--active"
              {...childItemProps}
              key={i}
            />
          ))}
        </ul>
      </div>
    </div>


  );
}
