import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Products from '../components/Products';
import Footer from "../components/Footer";
import Shope from "../components/Shope";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Shope />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
