import Slider from 'react-slick';
import { CarouselContainer, BrandCard, BrandImage, NextArrow, PrevArrow } from './BrandStyles';
import Brand1 from "../assets/HP_CromaLogo_yxeuuz.webp";
import Brand2 from "../assets/Lenovo_dxvgyb.webp";
import Brand3 from "../assets/Lg_duygz8.webp";
import Brand4 from "../assets/amazon_ujwvcg.webp";
import Brand5 from "../assets/apple_xmf55t.webp";
import Brand6 from "../assets/dell_nagdmt.webp";
import Brand7 from "../assets/mi_dtxgef.webp";
import Brand8 from "../assets/oppo_zdscdn.webp";
import Brand9 from "../assets/panasonic_g5ubsn.webp";
import Brand10 from "../assets/philips_lv4l0t.webp";
import Brand11 from "../assets/samsung_tmmzob.webp";
import Brand12 from "../assets/realme_m8q5py.webp";
import Brand13 from "../assets/sony_fa0aon.webp";
import Brand14 from "../assets/vivo_sqsnbm.webp";
import Brand15 from "../assets/jbl_prjtcv.webp";
import { Grid, Typography } from '@mui/material';
import { useRef, useState } from 'react';

const brandsData = [
  { id: 1, image: Brand1},
  { id: 2, image: Brand2},
  { id: 3, image: Brand3},
  { id: 4, image: Brand4},
  { id: 5, image: Brand5},
  { id: 6, image: Brand6},
  { id: 7, image: Brand7},
  { id: 8, image: Brand8},
  { id: 9, image: Brand9},
  { id: 10, image: Brand10},
  { id: 11, image: Brand11},
  { id: 12, image: Brand12},
  { id: 13, image: Brand13},
  { id: 14, image: Brand14},
  { id: 15, image: Brand15},
];

const Brand = () => {
  const sliderRef = useRef(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 4,
    nextArrow: <NextArrow disabled={slideIndex === brandsData.length - 8}/>,
    prevArrow: <PrevArrow disabled={slideIndex === 0}/>,
    afterChange: (current:any) => setSlideIndex(current),
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          arrows: false,
          rows: 2,
        },
      },
    ],
  };

  return (
    <Grid container style={{ width: '90%', margin: 'auto' }}>
            <Grid item xs={12}>
    <CarouselContainer>
      <Typography>Top Brands</Typography>
      <Slider {...settings} ref={sliderRef}>
        {brandsData.map((brand) => (
          <BrandCard key={brand.id}>
            <BrandImage src={brand.image} alt={"image"} />
          </BrandCard>
        ))}
      </Slider>

    </CarouselContainer>
    </Grid>
    </Grid>
  );
};

export default Brand;
