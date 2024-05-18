import React, { useEffect } from "react";
import Navbar from "../Components/HomepageComponents/Navbar";
import Herobox from "../Components/WhyDigitalTechComponent/Herobox";
import SectionOne from "../Components/WhyDigitalTechComponent/SectionOne";
import SectionTwo from "../Components/WhyDigitalTechComponent/SectionTwo";
import Footer from "../Components/HomepageComponents/Footer"

const WhyDigitalTech = () => {
  useEffect(() => {
    document.title = "Why Digital Technology is Essentional to Growth";
  });

  return (
    <>
      <Navbar />
      <Herobox />
      <SectionOne/>
      <SectionTwo/>
      <Footer/>
    </>
  );
};

export default WhyDigitalTech;
