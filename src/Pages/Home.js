import React from "react";
import Banner from "../components/Banner";
import AboutSection from "../components/HomePage/AboutSection";
import ServicesSection from "../components/HomePage/ServicesSection";
import CounterSection from "../components/HomePage/CounterSection";
import VideoSection from "../components/HomePage/VideoSection";
import PricingSection from "../components/HomePage/PricingSection";
import CallToAction from "../components/HomePage/CallToAction";
import WorkSection from "../components/HomePage/WorkSection";
import FAQSection from "../components/HomePage/FAQSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";





const Home = () => {
 
  return (
    <div>
      <Banner></Banner>
      <ServicesSection></ServicesSection>
      <WorkSection></WorkSection>
      <AboutSection></AboutSection>
      <FAQSection></FAQSection>
      <TestimonialSection></TestimonialSection>
      <CallToAction></CallToAction>




    </div>
  );
};

export default Home;
