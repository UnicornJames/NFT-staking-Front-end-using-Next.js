/* eslint-disable @next/next/no-img-element */
import React, { useState } from "react";
import MenuPanel from "./menu-panel";
import MenuButton from "./menu-button";
import LanguageSelector from "./languageSelector";
import { useTranslation } from 'next-i18next';
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => setIsOpen(!isOpen);
  const { t } = useTranslation('common');

  return (
    <>
      <header className="header w-full relative z-10" style={{ position: 'sticky', top: '0' }}>
        <nav className="flex mx-auto py-6 px-4 sm:px-6 lg:px-8 lg:flex justify-between items-center">
          <div className="logo-wrapper sm:mx-0">
            <a href="http://hedgeplus.io/">
              <img
                className="logo"
                src="/images/logo.png"
                alt="hedgeplus logo"
                width={200}
                height={40}
              />
            </a>
          </div>

          <div className="nav_menu px-2 z-50 ml-auto">
            <div className="hidden md:flex items-center">
              {/* <LanguageSelector></LanguageSelector> */}
            </div>
            <div className="hidden md:flex items-center">
              <div className="nav_item mx-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                <p><Link href="">{t('header.whitepaper')}</Link></p>
              </div>
              <div className="nav_item mx-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                <p><Link href="https://github.com/HedgePlus">{t('GitHub')}</Link></p>
              </div>
            </div>
            <div className="hidden lg:flex items-center mx-2">
              {/* <div className="relative presale_wrapper cursor-pointer hidden xl:flex mt-8 lg:mt-0 xl:ml-4 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                <div className="first_div">
                  <p className="join_text">{t('header.join_public_sale')}</p>
                </div>
                <div className="second_div">
                  <picture>
                    <source type="image/avif" srcSet="/images/arrow-white.avif"></source>
                    <source type="image/webp" srcSet="/images/arrow-white.webp"></source>
                    <img src="/images/arrow-white.png" alt="right arrow" />
                  </picture>
                </div>
                <div className="absolute rounded-xl p-4">
                  Comming Soon
                </div>
              </div> */}

              <div className="hidden right_social_container lg:ml-0">
                <div className="right_social">
                  <div className="social_box">
                    <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                      <a className="nav_item" href="https://t.me/hedgeplus_io"><img src="/images/telegram.svg" alt="telegram logo" /></a>
                    </div>
                    <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
                      <a className="nav_item" href="https://discord.gg/hkqAHKUVGK">
                        <img src="/images/discord.svg" alt="discord logo" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile menu */}
          <div className="flex md:hidden flex-row items-center">
            <MenuButton handleMenu={handleMenu} isOpen={isOpen} />
          </div>
        </nav>
      </header>

      {/* ============== */}

      {isOpen && <MenuPanel />}
    </>
  );
}
