/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";
import React from "react";
import { useEffect, useState, useLayoutEffect, useRef } from "react";
import useWindowSize from "../hooks/useWindowSize";
import transContent from "../trans/TransContent";
import styled from "styled-components";
import VestingCarousel from "../components/vestingCarousel";

React.useLayoutEffect = React.useEffect;

const FlipCard = dynamic(import("../components/flipCard"));
const PieChart = dynamic(import("../components/pieChart"));
const RoadmapCard = dynamic(import("../components/roadmapCard"));
const RoadmapCarousel = dynamic(import("../components/roadmapCarousel"));
const FaqCard = dynamic(import("../components/faqCard"));

const AnimRightDiv = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "-100vw")});
  transition: transform 2s;
`

const AnimLeftDiv = styled.div`
  transform: translateX(${({ animate }) => (animate ? "0" : "100vw")});
  transition: transform 2s;
`

const AnimBottomDiv = styled.div`
  transform: translateY(${({ animate }) => (animate ? "0" : "100vh")});
  transition: transform 1s;
`

import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import Header from "../components/header"
import Footer from "../components/footer"
import { FaArrowRight } from "react-icons/fa"

const partners = [
  {
    image: "images/partners/partner1.avif",
    imageOther: "images/partners/partner1.png",
    imageWebp: "images/partners/partner1.webp",
    alt: "partner1"
  },
  {
    image: "images/partners/partner3.avif",
    imageOther: "images/partners/partner3.png",
    imageWebp: "images/partners/partner3.webp",
    alt: "partner3"
  },
  {
    image: "images/partners/partner4.avif",
    imageOther: "images/partners/partner4.png",
    imageWebp: "images/partners/partner4.webp",
    alt: "partner4"
  },
  {
    image: "images/partners/partner5.avif",
    imageOther: "images/partners/partner5.png",
    imageWebp: "images/partners/partner5.webp",
    alt: "partner5"
  },
  {
    image: "images/partners/partner6.avif",
    imageOther: "images/partners/partner6.png",
    imageWebp: "images/partners/partner6.webp",
    alt: "partner6"
  },
  {
    image: "images/partners/partner7.avif",
    imageOther: "images/partners/partner7.png",
    imagewebp: "images/partners/partner7.webp",
    alt: "partner7"
  },
  {
    image: "images/partners/partner8.avif",
    imageOther: "images/partners/partner8.png",
    imageWebp: "images/partners/partner8.webp",
    alt: "partner8"
  },
];

const scrollTop = () => {
  document.documentElement.scrollTo({
    // @ts-ignore
    top: 0,
    behavior: "smooth",
  })
};

const Home = () => {
  const { t } = useTranslation('common')
  const [flipCardIndex, setFlipCardIndex] = useState(null);
  const [cardIndexGroup, setCardIndexGroup] = useState([]);
  const { width } = useWindowSize();
  const [content, setContent] = useState(transContent);
  const [chartData, setChartData] = useState(null);
  const [chartColors, setChartColors] = useState(null);
  const windowRef = useRef<HTMLDivElement>(null);

  const [show, doShow] = useState({
    itemFeatures: false,
    itemChartDetail: false,
    itemAbout: false,
    itemAboutImage: false,
    itemAboutSub: false,
    itemRoadmap: false,
    itemPartners: false,
    itemFaq0: false,
    itemFaq1: false,
    itemFaq2: false,
    itemFaq3: false,
  });

  const refFeatures = useRef(null);
  const refChartDetail = useRef(null);
  const refAbout = useRef(null);
  const refAboutImage = useRef(null);
  const refAboutSub = useRef(null);
  const refRoadmap = useRef(null);
  const refPartners = useRef(null);
  const refFaq0 = useRef(null);
  const refFaq1 = useRef(null);
  const refFaq2 = useRef(null);
  const refFaq3 = useRef(null);
  const videoParentRef: any = useRef();

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top;
    const divPos = topPos(refFeatures.current);
    const chartDetailPos = topPos(refChartDetail.current)
    const aboutPos = topPos(refAbout.current)
    const aboutImagePos = topPos(refAboutImage.current)
    const aboutSubPos = topPos(refAboutSub.current)
    const roadMapPos = topPos(refRoadmap.current)
    const partnersPos = topPos(refPartners.current)
    const faq0Pos = topPos(refFaq0.current)
    const faq1Pos = topPos(refFaq1.current)
    const faq2Pos = topPos(refFaq2.current)
    const faq3Pos = topPos(refFaq3.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;

      if (divPos < scrollPos) {
        // Element scrolled to
        doShow((state) => ({ ...state, itemFeatures: true }));
      } else {
        // Element scrolled away (up)
        doShow((state) => ({ ...state, itemFeatures: false }));
      }

      if (chartDetailPos < scrollPos) {
        doShow((state) => ({ ...state, itemChartDetail: true }));
      } else {
        doShow((state) => ({ ...state, itemChartDetail: false }));
      }

      if (aboutPos < scrollPos) {
        doShow((state) => ({ ...state, itemAbout: true }));
      } else {
        doShow((state) => ({ ...state, itemAbout: false }));
      }

      if (aboutImagePos < scrollPos) {
        doShow((state) => ({ ...state, itemAboutImage: true }));
      } else {
        doShow((state) => ({ ...state, itemAboutImage: false }));
      }

      if (aboutSubPos < scrollPos) {
        doShow((state) => ({ ...state, itemAboutSub: true }));
      } else {
        doShow((state) => ({ ...state, itemAboutSub: false }));
      }

      if (roadMapPos < scrollPos) {
        doShow((state) => ({ ...state, itemRoadmap: true }))
      } else {
        doShow((state) => ({ ...state, itemRoadmap: false }))
      }

      if (partnersPos < scrollPos) {
        doShow((state) => ({ ...state, itemPartners: true }))
      } else {
        doShow((state) => ({ ...state, itemPartners: false }))
      }

      if (faq0Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFaq0: true }))
      } else {
        doShow((state) => ({ ...state, itemFaq0: false }))
      }

      if (faq1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFaq1: true }))
      } else {
        doShow((state) => ({ ...state, itemFaq1: false }))
      }

      if (faq2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFaq2: true }))
      } else {
        doShow((state) => ({ ...state, itemFaq2: false }))
      }

      if (faq3Pos < scrollPos) {
        doShow((state) => ({ ...state, itemFaq3: true }))
      } else {
        doShow((state) => ({ ...state, itemFaq3: false }))
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClickFlipCard = (id: any) => {
    setFlipCardIndex(id);
    let group = [], count = 4;
    for (let i = 0; i < content.data.allFeatures.length; i++) {
      if (count === 0) break;
      if (content.data.allFeatures[i]._id !== id) {
        group.push(content.data.allFeatures[i]._id);
        count--;
      } else {
        continue;
      }
    }

    setCardIndexGroup([...group]);
  };



  const handleSetData = () => {
    const tokenomics_data = [...content.data.allTokenomics[0].tokenomics_data];
    const percentage = [];
    const labels = [];
    const chart_colors = [];
    // logic for making % always equal to 100
    let sum = 0;

    for (let i = 0; i < tokenomics_data.length; i++) {
      percentage.push(tokenomics_data[i].tokenomics_percentage);
      labels.push(t(`data.allTokenomics.0.tokenomics_data.${i}.tokenomics_title`));
      chart_colors.push(tokenomics_data[i].color.hex);
      sum += tokenomics_data[i].tokenomics_percentage;
    }
    if (sum > 100) {
      let extra = sum - 100;
      let max = Math.max(...percentage);
      let index = percentage.indexOf(max);
      percentage[index] = max - extra;
    }
    if (sum < 100) {
      let extra = 100 - sum;
      let min = Math.min(...percentage);
      let index = percentage.indexOf(min);
      percentage[index] = min + extra;
    }

    // formatting data for pie chart
    const chart_data = [];
    for (let i = 0; i < percentage.length; i++) {
      chart_data.push({
        id: labels[i],
        label: labels[i],
        value: percentage[i],
        color: chart_colors[i],
      });
    }

    setChartData(chart_data);
    setChartColors(chart_colors);
  }

  const getCarouselData = (data: any) => {
    let catchData = [];
    for (let i = 0; i < data.length; i++) {
      const roadmap_title = t(`data.allRoadmap.${i}.roadmap_title`);
      let roadmap_content = [];
      for (let j = 0; j < data[i].roadmap_content.length; j++) {
        roadmap_content.push(t(`data.allRoadmap.${i}.roadmap_content.${j}`));
      }
      catchData.push({ roadmap_title, roadmap_content });
    }

    return catchData;
  };

  const getText = (text: any) => {
    if (text.length > 18) {
      let str = '';
      for (let i = 0; i < text.length; i++) {
        if (text[i] === ' ') {
          str += '...';
          break;
        }
        str += text[i];
      }
      return str;
    } else {
      return text
    }
  }

  useEffect(() => {
    handleSetData();
  }, [content])

  useEffect(() => {
    if (videoParentRef.current) {
      const player = videoParentRef.current?.children[0];
      if (player) {
        player.controls = false;
        player.playsinline = true;
        player.muted = true;
        player.setAttribute('muted', "");
        player.autoplay = true;
      }
    }
  }, [])

  return (
    <div className="text-white" ref={windowRef}>
      <Header />
      <div style={{ overflow: 'hidden' }}>
        {/* hero section */}
        <section className="hero_section">
          <div className="hero_content ">
            <div className="main_container mx-auto px-4 py-0 sm:py-10 md:py-16 lg:py-20 xl:py-28">
              <div className="content_wrapper">
                <div className="flex flex-col sm:flex-row sm:mt-5">
                  <p className="worlds_first mt-3 sm:mt-0">
                    {t('main.world')}
                  </p>
                </div>
                <h1 className="heading1">{t('data.allTitle.0.heading_title')}</h1>
                <h1 className="heading2">{t('data.allTitle.0.heading_title_2')}</h1>
              </div>
            </div>
          </div>
          <div className="desk-video -mt-0 sm:-mt-10 md:-mt-16 lg:-mt-20 xl:-mt-28 -z-0" dangerouslySetInnerHTML={{
            __html: `
            <video playsInline autoPlay loop muted>
              <source src="/video/hero.avif" type="video/avif" />
              <source src="/video/hero.webm" type="video/webm" />
              <source src="/video/hero.mp4" type="video/mp4" />
            </video>
            `
          }}>
          </div>

          <div className="mobile-video -mt-0" ref={videoParentRef} dangerouslySetInnerHTML={{
            __html: `
            <video playsInline autoPlay loop muted>
              <source src="/video/hero-mobile.avif" type="video/avif" />
              <source src="/video/hero-mobile.webm" type="video/webm" />
              <source src="/video/hero-mobile.mp4" type="video/mp4" />
            </video>
            `
          }}>
          </div>

          {/* mobile end */}
        </section>
        <section className="section-hero-after">
          <div className="main_container mx-auto px-4 -mt-40 xl:-mt-60 flex flex-col-reverse sm:flex-row justify-between">
            <div className="flex flex-col items-center sm:items-start pt-4">
              <h2 className="sub_heading">
                <span>{t('data.allTitle.0.heading_sub_title')}</span>
                <span className="coming-soon">
                  <picture>
                    <source type="image/avif" srcSet="images/apple-google.avif" />
                    <source type="image/webp" srcSet="images/apple-google.webp" />
                    <img src="images/apple-google.png" alt="apple-google" />
                  </picture>
                  {t('main.coming')}
                </span>
              </h2>
              <div className="hidden sm:block">
                <div className="pt-16">
                  <picture>
                    <source type="image/avif" srcSet="images/dot-group.avif" />
                    <source type="image/webp" srcSet="images/dot-group.webp" />
                    <img src="images/dot-group.png" alt="dot-group" />
                  </picture>
                </div>
                <div className="pt-16">
                  <picture>
                    <source type="image/avif" srcSet="/images/circle-none.avif" />
                    <source type="image/webp" srcSet="/images/circle-none.webp" />
                    <img src="/images/circle-none.png" alt="circle-none" />
                  </picture>
                </div>
                <div className="pt-8">
                  <picture>
                    <source type="image/avif" srcSet="/images/circle-fill.avif" />
                    <source type="image/webp" srcSet="/images/circle-fill.webp" />
                    <img src="/images/circle-fill.png" alt="circle-fill" />
                  </picture>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <picture className="mr-0 xl:-mr-8 w-2/3 xl:w-full">
                <source type="image/avif" srcSet="/images/meta-verse.avif" />
                <source type="image/webp" srcSet="/images/meta-verse.webp" />
                <img src="/images/meta-verse.png" alt="meta-verse" />
              </picture>
            </div>
          </div>
          <div className="flex justify-center pt-8">
            <div className="presale_wrapper sm:hidden flex justify-center text-center cursor-pointer">
              <div className="first_div">
                <p className="join_text">{getText(t('header.join_public_sale'))}</p>
              </div>
              <div className="second_div">
                <picture>
                  <source type="image/avif" srcSet="/images/arrow-white.avif"></source>
                  <source type="image/webp" srcSet="/images/arrow-white.webp"></source>
                  <img src="/images/arrow-white.png" alt="right arrow" />
                </picture>
              </div>
            </div>
          </div>
        </section>
        {/* section-2 */}
        <section className="section-2">
          <div className="main_container mx-auto px-4 pb-32">
            <div className="our_features_container">
              <div className="mb-20 lg:mb-40">
                <p className="serial_sub_heading text-center sm:text-left">
                  {t('main.features')}
                </p>
                <h2 className="serial_heading text-center sm:text-left">
                  {t('main.what_makes')}<b>HedgePlus </b>{t('main.special')}?
                </h2>
              </div>
              <AnimRightDiv animate={show.itemFeatures} ref={refFeatures}>
                {
                  (flipCardIndex === null || width < 992) && (
                    <div className="card_container w-full grid grid-cols-1 auto-rows-max md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
                      {
                        content.data.allFeatures.map((item, index) => {
                          return <FlipCard item={item} id={index} key={item._id} index={item._id} handleClickFlipCard={handleClickFlipCard} clickState={false} />
                        })
                      }
                    </div>
                  )
                }
                {
                  flipCardIndex !== null && width > 992 && (
                    <div className="card_container w-full grid grid-cols-1 md:grid-cols-1 lg:grid-cols-10 xl:grid-cols-10 gap-6 lg:gap-7 xl:gap-8">
                      <div className="col-span-3">
                        {
                          content.data.allFeatures.map((item, index) => {
                            return (
                              cardIndexGroup.includes(item._id) && (
                                <FlipCard item={item} id={index} key={item._id} index={item._id} handleClickFlipCard={handleClickFlipCard} clickState={false} />
                              )
                            )
                          })}
                      </div>
                      <div className="col-span-4">
                        {
                          content.data.allFeatures.map((item, index) => {
                            return (
                              item._id === flipCardIndex && (
                                <FlipCard item={item} id={index} key={item._id} index={item._id} handleClickFlipCard={handleClickFlipCard} clickState={true} />
                              )
                            );
                          })}
                      </div>
                      <div className="col-span-3">
                        {
                          content.data.allFeatures.map((item, index) => {
                            return (
                              !cardIndexGroup.includes(item._id) && item._id !== flipCardIndex && (
                                <FlipCard item={item} id={index} key={item._id} index={item._id} handleClickFlipCard={handleClickFlipCard} clickState={false} />
                              )
                            );
                          })}
                      </div>
                    </div>
                  )
                }
              </AnimRightDiv>
            </div>
          </div>
        </section>
        <section className="section-2 section-tokenomics">
          <AnimLeftDiv animate={show.itemChartDetail} ref={refChartDetail}>
            <div className="main_container mx-auto px-4 pb-32">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
                <div className="col-span-1 tokenomics_container">
                  <h2 className="serial_heading mb-5 text-center sm:text-left">
                    {t('main.tokenomics')}
                  </h2>
                  <p className="text-center sm:text-left">{t('main.tokenomics_content')}</p>
                  <div className="font-small pie_chart_wrapper flex justify-center md:hidden mt-10 mx-auto">
                    <PieChart chart_data={chartData} chart_colors={chartColors} />
                  </div>
                  <div className="pt-5 my-0 sm:my-20">
                    <div className="horizontal_container px-3 md:px-6 xl:px-8 py-2">
                      <div className="horizontal_container_wrapper py-5">
                        {chartData?.map(item => {
                          return (
                            <div
                              className="chart_wrapper"
                              key={item.id}
                            >
                              <div
                                className="border-div mb-5"
                                style={{ backgroundColor: item.color }}
                              ></div>
                              <p className="percentage_text mr-3" style={{ color: item.color, borderColor: item.color }}>{item.value}%</p>
                              <p className="label_text">{item.label}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 pie_chart_wrapper hidden md:flex justify-center">
                  <PieChart chart_data={chartData} chart_colors={chartColors} />
                </div>
              </div>
              <div className="absolute -mr-5 md:mr-0 right-1/2 md:right-4 bottom-8 w-8 sm:w-14 h-8 sm:h-14 bg-indigo rounded-full flex justify-center items-center cursor-pointer hover:animate-bounce" onClick={() => scrollTop()}>
                <picture className="arrow-scroll w-4 sm:w-6">
                  <source type="image/avif" srcSet="/images/arrow-top.avif"></source>
                  <source type="image/webp" srcSet="/images/arrow-top.webp"></source>
                  <img src="/images/arrow-top.png" alt="top arrow" />
                </picture>
              </div>
            </div>
          </AnimLeftDiv>
        </section>
        {/* <section style={{ backgroundColor: '#051439' }}>
          <div className="main_container mx-auto px-4 py-16 md:py-32">
            <div className="flex flex-col">
              <h2 className="serial_heading mb-8 text-center sm:text-left">Vesting</h2>
              <div className="hidden xl:block">
                <div className="rounded-xl p-4" style={{ border: '1px solid', borderColor: '#00A1ED' }}>
                  <div className="w-full flex flex-row items-center text-white space-x-2">
                    <div className="py-2 bg-vestingHeader text-xl text-white text-center" style={{ width: '15%' }} >Percentage</div>
                    <div className="py-2 bg-vestingHeader text-xl text-white text-center" style={{ width: '15%' }} >Tokens</div>
                    <div className="py-2 bg-vestingHeader text-xl text-white text-center" style={{ width: '25%' }} >Category</div>
                    <div className="py-2 bg-vestingHeader text-xl text-white text-center" style={{ width: '45%' }} >Vesting</div>
                  </div>
                </div>
                <div className="w-full p-4 flex flex-row items-center font-bold">
                  <div className="flex flex-col text-center space-y-2 text-lg mx-2 pr-2 border-r border-white text-black" style={{ width: '15%' }}>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>1%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>2%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>12%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>10%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>20%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>20%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>10%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>5%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>5%</div>
                    <div className="pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>15%</div>
                  </div>
                  <div className="flex flex-col space-y-2 text-lg mr-2 pr-2 border-r border-white" style={{ width: '15%' }}>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>20,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>40,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>240,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>200,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>400,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>400,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>200,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>100,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>100,000,000</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>300,000,000</div>
                  </div>
                  <div className="flex flex-col space-y-2 text-lg mr-2 pr-2 border-r border-white text-black" style={{ width: '25%' }}>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Seed Round</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Private Round</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Public Round</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Team</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Platform Development</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Operations</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Marketing & Partnerships</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Bounties & Promotions</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Legal & Advisors</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#696FB2' }}>Strategic Partners/exchanges</div>
                  </div>
                  <div className="flex flex-col space-y-2 text-lg" style={{ width: '45%' }}>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>2 month cliff, 20% unlocked per month thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>1 month cliff, 12.5% unlocked per month thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>40% unlocked at TGE, 15% unlocked per month thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>6 month cliff, 5% unlocked per month thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>5% unlocked per month</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>3 month cliff, 100% unlocked thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>6 month cliff, 12.5% per month thereafter.</div>
                    <div className="text-left pl-2 py-1" style={{ backgroundColor: '#EE346E' }}>3 month cliff, 12.5% per month thereafter.</div>
                  </div>
                </div>
              </div>
              <div className="xl:hidden">
                <VestingCarousel />
              </div>
            </div>
          </div>
        </section> */}
        <section className="section-about">
          <div className="main_container mx-auto px-4 py-16 md:py-32">
            <div className="about_us_container pt-2">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-7 xl:gap-8">
                <AnimRightDiv animate={show.itemAbout} ref={refAbout}>
                  <h2 className="serial_heading my-10 sm:my-16 text-center sm:text-left">
                    {t('main.about_us')}
                  </h2>
                  <div className="aboutus_text text-center sm:text-left">
                    <div dangerouslySetInnerHTML={{ __html: t('main.about_content') }} />
                  </div>
                </AnimRightDiv>
                <AnimLeftDiv animate={show.itemAboutImage} ref={refAboutImage}>
                  <div className="w-full flex justify-center">
                    <picture>
                      <source type="image/avif" srcSet="/images/about.avif" />
                      <source type="image/webp" srcSet="/images/about.webp" />
                      <img src="/images/about.png" alt="about" />
                    </picture>
                  </div>
                </AnimLeftDiv>
              </div>
            </div>
          </div>

          <div className="about-more">
            <AnimBottomDiv animate={show.itemAboutSub} ref={refAboutSub}>
              <div className="main_container mx-auto py-16 flex flex-col lg:flex-row">
                <div className="px-4">
                  <div className="flex flex-col lg:flex-row lg:flex-wrap items-center text-center text-sm sm:text-3xl">
                    <div className="font-bold">
                      For partnerships and Investments
                    </div>
                    <div className="px-2 pt-2">
                      <picture className="w-4 rotate-90 lg:rotate-0">
                        <source type="image/avif" srcSet="/icons/arrow.avif" />
                        <source type="image/webp" srcSet="/icons/arrow.webp" />
                        <img src="/icons/arrow.png" alt="about" />
                      </picture>
                      {/* <img className="w-4 rotate-90 lg:rotate-0" src="/icons/arrow.png"></img> */}
                    </div>
                    <div className="px-2 pt-2">
                      <picture className="w-7">
                        <source type="image/avif" srcSet="/images/mail.avif" />
                        <source type="image/webp" srcSet="/images/mail.webp" />
                        <img src="/images/mail.png" alt="about" />
                      </picture>
                      {/* <img className="w-7" src="/images/mail.png"></img> */}
                    </div>
                    <div className="font-bold  py-1">
                      <span className="px-2 text-black hidden xl:block">email</span>
                      <span className="text-blue xl:hidden">EMAIL</span>
                    </div>
                    <div className="rounded-full bg-white px-6 py-1">
                      <span>fundmanager@hedgeplus.io</span>
                    </div>
                  </div>

                  <div className="hr" />

                  <div className="hidden lg:block">
                    <div className="flex flex-row flex-wrap items-center">
                      <p className="font-bold pr-2">We are hiring! </p>
                      <p className="">Send us a message at </p>
                      <i className="hidden xl:block pl-2"><FaArrowRight /></i>
                      <p className=" text-blue font-bold px-3 "> fundmanager@hedgeplus.io</p>
                      <p className="px-1">including a </p>
                      <div className="flex flex-row items-center">
                        <picture className="w-6 h-6 mr-2">
                          <source type="image/avif" srcSet="/images/check.avif" />
                          <source type="image/webp" srcSet="/images/check.webp" />
                          <img src="/images/check.png" alt="about" />
                        </picture>
                        {/* <img className="w-6 h-6 mr-2" src="/images/check.png"></img> */}
                        <span> link to things you’ve built </span>
                      </div>
                      <div className="flex flex-row items-center">
                        <picture className="w-6 h-6 mr-2">
                          <source type="image/avif" srcSet="/images/check.avif" />
                          <source type="image/webp" srcSet="/images/check.webp" />
                          <img src="/images/check.png" alt="about" />
                        </picture>
                        {/* <img className="w-6 h-6 mx-2" src="/images/check.png"></img> */}
                        <span className="mr-2"> your Github and resume </span>
                      </div>

                      <div className="flex flex-row flex-wrap items-center">
                        <picture className="w-6 h-6 mr-2">
                          <source type="image/avif" srcSet="/images/check.avif" />
                          <source type="image/webp" srcSet="/images/check.webp" />
                          <img src="/images/check.png" alt="about" />
                        </picture>
                        {/* <img className="w-6 h-6 mr-2" src="/images/check.png"></img> */}
                        <span className="mr-2">and any thoughts you </span>
                      </div>
                      <p>have on what we’re builiding.
                        <span className="font-bold">Talk soon!</span>
                      </p>
                    </div>
                  </div>


                  <div className="xl:hidden lg:hidden text-xs">
                    <div className="flex flex-col lg:flex-row items-center">
                      <p className="font-bold pr-2 pb-4 text-sm">We are hiring! </p>
                      <p className="">Send us a message at </p>
                      <i className="hidden xl:block"><FaArrowRight /></i>
                      <p className=" text-blue font-bold"> fundmanager@hedgeplus.io </p>
                      <p className="pb-4">including a </p>
                    </div>

                    <div>
                      <div className="flex flex-row flex-wrap items-center ">
                        <div className="flex flex-row items-center justify-center pt-1">
                          <picture className="w-6 h-6 mx-2">
                            <source type="image/avif" srcSet="/images/check.avif" />
                            <source type="image/webp" srcSet="/images/check.webp" />
                            <img src="/images/check.png" alt="about" />
                          </picture>
                          {/* <img className="w-6 h-6 mx-2" src="/images/check.png"></img> */}
                          <span> link to things you’ve built </span>
                        </div>
                        <div className="flex flex-row items-center justify-center pt-1">
                          <picture className="w-6 h-6 mx-2">
                            <source type="image/avif" srcSet="/images/check.avif" />
                            <source type="image/webp" srcSet="/images/check.webp" />
                            <img src="/images/check.png" alt="about" />
                          </picture>
                          {/* <img className="w-6 h-6 mx-2" src="/images/check.png"></img> */}
                          <span> your Github and resume </span>
                        </div>
                        <div className="flex flex-row items-center pt-1">
                          <picture className="w-6 h-6 mx-2">
                            <source type="image/avif" srcSet="/images/check.avif" />
                            <source type="image/webp" srcSet="/images/check.webp" />
                            <img src="/images/check.png" alt="about" />
                          </picture>
                          {/* <img className="w-6 h-6 mx-2" src="/images/check.png"></img> */}
                          <span>and any thoughts you have on what we’re building.</span>
                        </div>
                      </div>
                    </div>
                    <div className="px-2 pt-2 flex justify-center">
                      <picture className="w-5 rotate-90">
                        <source type="image/avif" srcSet="/icons/arrow.avif" />
                        <source type="image/webp" srcSet="/icons/arrow.webp" />
                        <img src="/icons/arrow.png" alt="about" />
                      </picture>
                      {/* <img className="w-5 rotate-90" src="/icons/arrow.png"></img> */}
                    </div>
                    <p className="font-bold text-center pt-4">Talk soon!</p>
                  </div>
                </div>
                <div className="flex flex-col items-center pt-4 lg:pt-0 mx-8">
                  <div className="w-8 lg:w-14 h-8 lg:h-14 bg-indigo rounded-full flex justify-center items-center cursor-pointer hover:animate-bounce" onClick={() => scrollTop()}>
                    <picture className="arrow-scroll w-4 sm:w-6">
                      <source type="image/avif" srcSet="/images/arrow-top.avif"></source>
                      <source type="image/webp" srcSet="/images/arrow-top.webp"></source>
                      <img src="/images/arrow-top.png" alt="top arrow" />
                    </picture>
                    {/* <img className="arrow-scroll w-4 sm:w-6" src="images/arrow-top.png" /> */}
                  </div>
                </div>
              </div>
            </AnimBottomDiv>
          </div>
        </section>
        {/* section-3 */}
        <section className="section-3">
          <div className="main_container mx-auto px-4 py-24">
            <h2 className="serial_heading mb-10 text-center sm:text-left hidden xl:block">
              {t('main.roadmaps')}
            </h2>
            <AnimLeftDiv animate={show.itemRoadmap} ref={refRoadmap}>
              <div className="roadmap_container hidden xl:flex">
                {content.data.allRoadmap.map((item, index) => {
                  const roadmapColors = [
                    "#62e1ed",
                    "#c1fda5",
                    "#fbda40",
                    "#ffad29",
                    "#ff8742",
                  ];
                  const color = roadmapColors[index]
                    ? roadmapColors[index]
                    : "#62e1ed";
                  return <RoadmapCard key={item._id} index={index} item={item} color={color} />;
                })}
              </div>
            </AnimLeftDiv>

            <div className="roadmap_carousel_wrapper xl:hidden">
              <RoadmapCarousel allRoadmap={getCarouselData(content.data.allRoadmap)} />
            </div>
          </div>
        </section>

        {/* section-4 */}
        <section className="section-4">

          <div className="main_container mx-auto px-4 pt-24 pb-20 sm:pb-24">
            <div className="partnerships_container">
              <h2 className="serial_heading mb-16 sm:mb-28 text-center sm:text-left">
                {t('main.our_partners')}
              </h2>
              <AnimRightDiv animate={show.itemPartners} ref={refPartners}>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-10 sm:gap-20 xl:gap-14 items-center px-0 sm:px-5 xl:px-0">
                  {partners.map((item, index) => {
                    return (
                      <div
                        className="col-span-3 sm:col-span-2 xl:col-span-1 px-6 py-3 sm:p-0 flex justify-center"
                        key={index}
                      >
                        <picture>
                          <source type="image/avif" srcSet={item.image} />
                          <source type="image/webp" srcSet={item.imageWebp} />
                          <img src={item.imageOther} alt="partner" />
                        </picture>
                      </div>
                    );
                  })}
                </div>
              </AnimRightDiv>
            </div>

            <div className="faq_container mt-20">
              <h2 className="serial_heading mb-16 text-center sm:text-left">
                {t('main.faq')}
              </h2>
              <AnimLeftDiv animate={show.itemFaq0} ref={refFaq0}>
                <FaqCard key={content.data.allFaq[0]._id} index={0} />
              </AnimLeftDiv>
              <AnimLeftDiv animate={show.itemFaq1} ref={refFaq1}>
                <FaqCard key={content.data.allFaq[1]._id} index={1} />
              </AnimLeftDiv>
              <AnimLeftDiv animate={show.itemFaq2} ref={refFaq2}>
                <FaqCard key={content.data.allFaq[2]._id} index={2} />
              </AnimLeftDiv>
              <AnimLeftDiv animate={show.itemFaq3} ref={refFaq3}>
                <FaqCard key={content.data.allFaq[3]._id} index={3} />
              </AnimLeftDiv>
            </div>
          </div>
        </section>
      </div >
      <Footer />
    </div >
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common']),
  },
})

export default Home;