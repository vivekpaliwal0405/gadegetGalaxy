import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Carousel from "react-bootstrap/Carousel";
import slider from "../img/slider2.jpg";
import slider2 from "../img/silder2.webp";
import slider3 from "../img/slider3.jpg";
import CategorySection from "../modules/CategorySection";
import Services from "../modules/Services";
import Videoad from "../modules/Videoad";
import PartnerSection from "../modules/PartnerSection";
import { ContainerScroll } from "../Scrollanimation";
import TitleComponent from "./TitleComponent";

const Home = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.7]);

  return (
    <>
      <ContainerScroll
        titleComponent={
          <TitleComponent
            className="mb-6 text-white"
            firstHeading="Discover"
            secondHeading="the future of electronics"
          />
        }
      >
        <motion.div ref={containerRef} className="relative">
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <motion.img
                style={{ scale }}
                className="d-block w-100 vh-100"
                src={slider}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <motion.img
                style={{ scale }}
                className="d-block w-100 vh-100"
                src={slider2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <motion.img
                style={{ scale }}
                className="d-block w-100 vh-100"
                src={slider3}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
        </motion.div>
      </ContainerScroll>
      {/* <TitleComponent firstHeading="Categories"/> */}

      <CategorySection />
      <Services />
      <Videoad />
      <PartnerSection />
    </>
  );
};
export default Home;
