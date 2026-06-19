import React, { useEffect, useState } from "react";
import video from "../../assets/the-scientific-method-30s-video-no-music.mp4";
import Button from "../../components/ui/Button";
import Aboutus from "./sections/Aboutus";
import StatsSection from "./sections/StatsSection";
import ImageShowcase from "./sections/ImageShowCase";
import Services from "./sections/Services";
import Laboratory from "./sections/Laboratory";
import AboutLaboratory from "./sections/AboutLaboratory";
import Testimonials from "./sections/Testimonials";

const slides = [
  {
    title: "Maeon meet your needs",
    desc: "Material testing laboratory For Physiochemical analysis, Thermal behaviour, Proof of design, Life cycle, weathering, Xenon, Fluorescent UV, harsh environments, humidity, high pressure, high stress environments simulated, O₂, O₃ degradations, light and colours, abrasions, resilience and raw material testings too, corrosion resistance testing…",
  },
  {
    title: "Discover material testing laboratory at its best",
    desc: "Material testing is an important step in understanding how your materials will perform or react under a wide variety of stresses. Leading capabilities in Material testing and extensive accreditation, uncompromising to satisfy testing challenges of customers. Talk to us…",
  },
  {
    title: "NABL accredited for ISO/IEC 17025:2017",
    desc: "Maeon has broad scope of testing under NABL accreditation covering a range of products, maintaining high level of testing standards. Laboratory covers products of Plastics, Rubber, Composites, foam,films, hoses, pipes, Adhesives, Automotive parts, V Belts, Conveyor belts and many more…",
  },
  {
    title: "Country’s most trusted laboratory",
    desc: "Comprehensive testing range, reliable, innovative ... Ethical principles at the heart of our testing service. Understands requirement, devise the suitable test methods to your performance needs. Find out the range of tested offered from Maeon Laboratories !",
  },
];

const Home = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out first
      setFade(false);

      // After fade out, switch text and fade in
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 500); // fade duration
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" h-full">
    <div className="relative h-screen  w-full flex items-center overflow-hidden ">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover absolute top-0 left-0"
      >
        <source src={video} type="video/mp4" />
      </video>

      {/* Optional overlay for readability */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/40"></div>

      {/* Text Content */}
      <div className="relative z-10 flex flex-col justify-center h-full px-30 mb-10 mt-36 text-white">
        <div
          className={`max-w-2xl transition-opacity duration-500 overflow-hidden min-h-5xl ${
            fade ? "opacity-100" : "opacity-0"
          }`}
        >
          <h1 className="text-3xl md:text-5xl font-bold font-[Poppins]">
            {slides[index].title}
          </h1>
          <p className="mt-4 text-lg md:text-xl font-[Poppins]">
            {slides[index].desc}
          </p>
        </div>
    <div className="pt-10">
     <Button size="lg" className="  font-bold text-xl bg-red-800 text-white hover:bg-black hover:text-white transition-all duration-500 rounded-full z-20">
    Our Services
  </Button>
  <div className=" h-0.5  bg-white/30 my-5 max-w-xl"/>

  <div className=" flex gap-10 text-2xl">
    
    <div className=" font-extrabold p-3 text-white"><span className="text-white text-4xl">220+</span> <br/> Happy Clients and<br/> Counting</div>
    <div className=" font-extrabold text-white"><span className="text-white text-4xl">14+</span> <br/> Years <br/> of Excellence </div>
    
  </div>
    </div> 
      </div>
      
    </div>
    <Aboutus />
    <ImageShowcase/>
    <StatsSection/>
    {/* <Services /> */}
    <Laboratory />
    <AboutLaboratory />
    <Testimonials />
    </div>
  );
};

export default Home;