import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Example1 from "../assets/Example1.webp";
import Example2 from "../assets/Example2.webp";
import Example4 from "../assets/Example4.webp";
import Example5 from "../assets/Example5.webp";
// import Example6 from "../assets/Example6.webp";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
import { Box } from "@mui/material";
import { CarouselContainer, DotsContainer, CustomDot, ArrowPrev, ArrowNext, Image } from "./CarouselStyles";

const Carousel: React.FC = () => {
  const items = [
    { id: 1, icon: Example1 },
    { id: 2, icon: Example2 },
    { id: 4, icon: Example4 },
    { id: 5, icon: Example5 },
    // { id: 6, icon: Example6 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = React.useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    responsive: [
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
      { breakpoint: 1024, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
    appendDots: (dots: React.ReactNode) => <DotsContainer>{dots}</DotsContainer>,
    dotsClass: "slick-dots custom-dots",
    customPaging: (i: number) => (
      <CustomDot
        key={i}
        className={`custom-dot ${i === currentSlide ? 'active' : ''}`}
        onClick={() => sliderRef.current?.slickGoTo(i)}
      />
    ),
    afterChange: (index: number) => setCurrentSlide(index),
  };

  const handlePrev = () => {
    if (sliderRef.current) {
      const newSlideIndex = (currentSlide - 1 + items.length) % items.length;
      setCurrentSlide(newSlideIndex);
      sliderRef.current.slickGoTo(newSlideIndex);
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      const newSlideIndex = (currentSlide + 1) % items.length;
      setCurrentSlide(newSlideIndex);
      sliderRef.current.slickGoTo(newSlideIndex);
    }
  };

  return (
    <CarouselContainer>
      <Box sx={{ margin: "10px", width: "90" }}>
        <Slider ref={sliderRef} {...settings}>
          {items.map((item, index) => (
            <Image key={item.id} className="img">
              <img src={item.icon} alt={`slide ${index + 1}`} style={{ width: "100%", height: "250px" }} />
            </Image>
          ))}
        </Slider>
        <ArrowPrev className="arrow prev" onClick={handlePrev}>
          <ArrowBackIosRoundedIcon />
        </ArrowPrev>
        <ArrowNext className="arrow next" onClick={handleNext}>
          <ArrowForwardIosRoundedIcon />
        </ArrowNext>
      </Box>
    </CarouselContainer>
  );
};

export default Carousel;
