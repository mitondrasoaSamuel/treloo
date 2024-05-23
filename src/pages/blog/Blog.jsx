import React, { useRef } from "react";
import CardCaroussel from "../../composant/cardCaroussel/CardCaroussel";
import Slider from "react-slick";
import { IoChevronBackOutline } from "react-icons/io5";

function Blog() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // les écrans jusqu'à 1024px de large
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1025, // les écrans à partir de 1025px de large
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="  pt-20" id="blog">
      <div className=" container space-y-20 bg-green-500/  ">
        <div className="bg-red-300/ 2xl:ml-16">
          <Slider
            ref={(slider) => {
              sliderRef = slider;
            }}
            {...settings}
            className="bg-red-500/ p-2"
          >
            <div className="bg-red-300/ max-w-[580px] lg:mr-2 ">
              <CardCaroussel nom="-Vand D" />
            </div>
            <div className="max-w-[580px] bg-red-300/ lg:ml-5">
              <CardCaroussel nom="-Tru Vio" />
            </div>
          </Slider>
        </div>

        <div
          style={{ textAlign: "center" }}
          className="flex justify-center gap-x-8 bg-red-400/"
        >
          <button
            className="button border-solid border-2 border-[#3E86F5] text-[#3E86F5]  rounded-2xl"
            onClick={previous}
          >
            <IoChevronBackOutline className=" text-5xl " />
          </button>
          <button
            className="button border-solid border-2 border-[#3E86F5] text-[#3E86F5] rounded-2xl "
            onClick={next}
          >
            <IoChevronBackOutline className="rotate-180 text-5xl" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
