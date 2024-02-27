import React from "react";
import "./App.css";
import Header from "./DashBoard/Header";
import Carousel from "./Carousel/Carousel";
import Brand from "./TopBrand/Brand"
import Widget from "./Widged/Widged";
import CardBox from "./CardCarousel.tsx/Cardbox";
import Footer from "./DashBoard/Footer";
// import CustomerForm from "../src/Zero"
const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Carousel />
      <Brand/>
      <Widget/>
      <CardBox/>
      <Footer />
      {/* <CustomerForm/> */}
    </div>
  );
};

export default App;
