import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import HeroSection from "../../components/HeroSection/HeroSection";
import CompetitionSection from "../../components/CompetitionSection/CompetitionSection";
import Footer from "../../components/Footer/Footer";

export const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HeroSection/>
      <CompetitionSection/>
      <Footer/>
    </div>
  );
  
};

export default Home;
