import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface IProps {
  allRoadmap?: any;
};

export default class RoadmapCarousel extends React.Component<IProps> {
  slider: any;
  
  constructor(props: IProps) {
    super(props);
    this.goNext = this.goNext.bind(this);
    this.goPrevious = this.goPrevious.bind(this);
  }

  goNext() {
    this.slider.slickNext();
  };

  goPrevious() {
    this.slider.slickPrev();
  };

  render() {
    const settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToScroll: 1,
      arrows: false,
      draggable: false,
      accessibility: false,
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };

    return (
      <>
        <div className="flex justify-between">
          <h2 className="serial_heading mb-10 text-center sm:text-left">
            Roadmaps
          </h2>
          <div className="flex justify-center space-x-2 sm:space-x-5 sm:mt-2">
            <div className="prevButton" onClick={this.goPrevious}>
              <img
                src="/images/arrow-right2.svg"
                alt="previous"
                className="w-3 transform rotate-180"
              />
            </div>
            <div className="nextButton" onClick={this.goNext}>
              <img className="w-3" src="/images/arrow-right2.svg" alt="next" />
            </div>
          </div>
        </div>
        <div className="roadmap_container">
          <Slider ref={c => (this.slider = c)} {...settings}>
            {this.props.allRoadmap.map((item) => {
              return (
                <div className="roadmap_card" key={item._id}>
                  <h3 className="title pr-4">{item.roadmap_title}</h3>
                  <ul>
                    {item.roadmap_content.map(item => {
                      return (
                        <li key={item} className="text pr-4 mb-6">
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              );
            })}
          </Slider>
        </div>
      </>
    );
  }
}
