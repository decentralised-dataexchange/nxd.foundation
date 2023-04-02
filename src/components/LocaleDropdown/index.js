import React from "react";
import clsx from "clsx";
import NavbarItem from "@theme/NavbarItem";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useAlternatePageUtils } from "@docusaurus/theme-common/internal";
import { useLocation } from "@docusaurus/router";

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
        <>
          {getFlagEmojiForCountry(locale)} {localeConfigs[locale].label}
        </>
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
    <div
      className={clsx(
        "dropdown",
        "dropdown-bottom",
        "dropdown-end",
        "dropdown-hover",
        "mr-2",
        "sm:mr-2"
      )}
    >
      <label tabIndex="0" className="m-1 flex items-center cursor-pointer">
        {dropDownLabel}
      </label>

      <ul
        tabIndex="0"
        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
      >
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
  );
}
