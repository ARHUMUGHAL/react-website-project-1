import React, { useEffect } from "react";
import Navbar from "../Components/HomepageComponents/Navbar";
import AnnouncementBar from "../Components/HomepageComponents/AnnouncementBar";
import Herobox from "../Components/HomepageComponents/Herobox";
import SectionOne from "../Components/HomepageComponents/SectionOne";
import SectionTwo from "../Components/HomepageComponents/SectionTwo";
import SectionThree from "../Components/HomepageComponents/SectionThree";
import SectionFour from "../Components/HomepageComponents/SectionFour";
import SectionFive from "../Components/HomepageComponents/SectionFive";
import SectionSix from "../Components/HomepageComponents/SectionSix";
import Footer from "../Components/HomepageComponents/Footer";

const Homepage = () => {
  useEffect(()=>{
    document.title = "Digital Marketing & Growth"
})
  return (
    <>
      <Navbar />
      <AnnouncementBar />
      <Herobox />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <SectionSix />
      <Footer />
    </>
  );
};

export default Homepage;
