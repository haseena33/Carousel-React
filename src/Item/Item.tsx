import Brand1 from "../assets/Brand1.webp";
import Brand2 from "../assets/Brand2.webp";
import Brand3 from "../assets/Brand3.webp";
import Brand4 from "../assets/Brand4.webp";
import Brand5 from "../assets/Brand5.webp";
import Brand6 from "../assets/Brand6.webp";
import Brand7 from "../assets/Brand7.webp";
import Brand8 from "../assets/Brand8.webp";
import Brand9 from "../assets/Brand9.webp";
import Brand10 from "../assets/Brand10.webp";
import Brand11 from "../assets/Brand11.webp";
import Brand12 from "../assets/Brand12.webp";
import Brand13 from "../assets/Brand13.webp";
import Brand14 from "../assets/Brand14.webp";
import Brand15 from "../assets/Brand15.webp";
import "./Item.css";
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { useState } from "react";

const NewItems = () => {
  const allImages = [
    Brand1, Brand2, Brand3, Brand4, Brand5, Brand6, Brand7,
    Brand8, Brand9, Brand10, Brand11, Brand12,Brand13, Brand14, Brand15,
  ];

  const itemsPerPage = 5;
  const [current, setCurrent] = useState(0);
  const startIdx = current * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const displayedImages = allImages.slice(startIdx, endIdx);

  const handleNextPage = () => {
    setCurrent((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrent((prevPage) => Math.max(prevPage - 1, 0));
  };
  return (
    <div>
      <div className="container">
      <button className="previous" onClick={handlePrevPage} disabled={current === 0}>
      <ArrowBackIosRoundedIcon/>
        </button>
        {displayedImages.map((image, index) => (
          <img key={index} src={image} alt={`Brand ${startIdx + index + 1}`} />
        ))}
        <button className="Next" onClick={handleNextPage} disabled={endIdx >= allImages.length}>
        <ArrowForwardIosRoundedIcon/>
        </button>
      </div>
      </div>

  );
};

export default NewItems;
