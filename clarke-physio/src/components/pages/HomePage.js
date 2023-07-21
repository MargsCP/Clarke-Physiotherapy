import React from "react";
import { InlineWidget } from "react-calendly";
import { SocialIcon } from "react-social-icons";
import AboutMe from "./AboutMe";
import Introduction from "./Introduction";
import Booking from "./Booking";
import Footer from "./Footer";
import AboutSpace from "./AboutSpace";
import ServicesPage from "./OfferedServices/ServicesPage";
import Testimonials from "./Testimonials";
import PhotoSectionAlt from "./PhotoSectionAlt";
import PhotoSection from "./PhotoSection";

export default function HomePage() {
  return (
    <>
      <div className="wrapper">
        <Introduction/>
        <AboutMe/>
        <AboutSpace/>
        <PhotoSection/>
        <ServicesPage/>
        <Booking/>
        <Testimonials/>
      </div>
    </>
  );
}
