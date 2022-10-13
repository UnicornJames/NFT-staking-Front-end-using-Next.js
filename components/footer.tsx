import React from "react";

export default function Footer() {
  return (
    <>
      <div className="footer1_container">
        <footer className="mx-auto px-4 sm:px-6 lg:px-8 flex lg:flex-row items-center py-10 lg:py-0 place-content-between">
          <div className="lg:w-1/3 logo-wrapper">
            <a href="http://hedgeplus.io/">
              <img
                className="logo"
                src="/images/logo.png"
                alt="hedgeplus logo"
                width={260}
                height={52}
              />
            </a>
          </div>
          
          <div className="social_box flex justify-center lg:ml-4">
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-twitter" href="https://twitter.com/hedgeplus_io">
                <img className="" src="/images/twitter.svg" alt="twitter logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-youtube" href="https://youtube.com">
                <img src="/images/youtube.svg" alt="youtube logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-telegram" href="https://t.me/hedgeplus_io">
                <img src="/images/telegram.svg" alt="telegram logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-discord" href="https://discord.gg/hkqAHKUVGK">
                <img src="/images/discord.svg" alt="discord logo" />
              </a>
            </div>
            <div className="wrapper_circle transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-reddit" href="https://www.reddit.com/r/hedgeplus/">
                <img src="/images/reddit.svg" alt="reddit logo" />
              </a>
            </div>
          </div>
        </footer>
      </div>
      <div className="footer2_container">
        <footer className="mx-auto px-4 sm:px-6 lg:px-8 lg:flex items-center py-16 lg:py-0 justify-center">
          <div className="lg:w-1/3 logo-wrapper mx-auto mb-10">
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
          <div className="social_box flex justify-center lg:ml-4 mb-10">
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-twitter" href="https://twitter.com/hedgeplus_io">
                <img className="footer-item" src="/images/twitter.svg" alt="twitter logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-youtube" href="https://youtube.com">
                <img className="footer-item" src="/images/youtube.svg" alt="youtube logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-telegram" href="https://t.me/hedgeplus_io">
                <img className="footer-item" src="/images/telegram.svg" alt="telegram logo" />
              </a>
            </div>
            <div className="wrapper_circle mr-2 transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-discord" href="https://discord.gg/hkqAHKUVGK">
                <img className="footer-item" src="/images/discord.svg" alt="discord logo" />
              </a>
            </div>
            <div className="wrapper_circle transition delay-150 duration-300 ease-in-out transform hover:scale-110">
              <a className="footer-reddit" href="https://www.reddit.com/r/hedgeplus/">
                <img className="footer-item" src="/images/reddit.svg" alt="reddit logo" />
              </a>
            </div>
          </div>
          <p
            style={{ color: "#b5d3ff" }}
            className="lg:w-1/3 text-center lg:text-left"
          >
            Copyright © 2021{" "}
            <strong style={{ color: "#ffffff" }}>HedgePlus</strong>
          </p>
          <p
            style={{ color: "#b5d3ff" }}
            className="mt-0 ml-auto text-center lg:text-left"
          >
            Built with love for the crypto community.
          </p>

        </footer>
      </div>
    </>
  );
}