import Card1 from "../assets/49739179294750.webp";
import Card2 from "../assets/49739179360286.jpg";
import Card3 from "../assets/49739179425822.webp";
import Card4 from "../assets/49739179491358.webp";
import Card5 from "../assets/49739179556894.webp";
import Card6 from "../assets/49739179622430.jpg";
import Card7 from "../assets/49739179687966.webp";
import Card8 from "../assets/49739179753502.webp";
import Card9 from "../assets/49739179819038.webp";
import Card10 from "../assets/49739179884574.webp";
import Slider from 'react-slick';
import { CarouselContainer, Cart, CardsImage, NextArrow, PrevArrow } from './CardStyles'
import { Typography } from "@mui/material";
const CardsData = [
    { id: 1, image: Card1},
    { id: 2, image: Card2},
    { id: 3, image: Card3},
    { id: 4, image: Card4},
    { id: 5, image: Card5},
    { id: 6, image: Card6},
    { id: 7, image: Card7},
    { id: 8, image: Card8},
    { id: 9, image: Card9},
    { id: 10, image: Card10},
  ];
  const CardBox = () => {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            arrows: false,
          },
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            arrows: false,
          },
        },
      ],
    };
  
    return (
      <CarouselContainer>
        <Typography>Deal-icious offer</Typography>
        <Slider {...settings}>
          {CardsData.map((Card) => (
            <Cart key={Card.id}>
              <CardsImage src={Card.image} alt={"image"} />
            </Cart>
          ))}
        </Slider>
      </CarouselContainer>
    );
  };
  
  export default CardBox;
  
  
  