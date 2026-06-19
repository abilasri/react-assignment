import React from 'react'
import Banner from "../../assets/aboutus/Banner.jpg";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowBigDown, ArrowBigRightDash, ArrowBigRightDashIcon, Circle, CircleAlertIcon, DotIcon, DotSquare, DotSquareIcon } from 'lucide-react';
import Certificate from "../../assets/aboutus/certificate.png"
import Button from '../../components/ui/Button';


import Lab1 from "../../assets/aboutus/Lab1.jpg";
import Lab2 from "../../assets/aboutus/Lab2.jpg";
import Lab3 from "../../assets/aboutus/Lab3.jpg";


import TeamSection from './sections/TeamSection';
import FounderMessage from './sections/FounderMessage';

const About = () => {

  const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
  const about =[
    "Testing and evaluation of either the Product or the test specimen taken from the product.",
    "Material testing and evaluation of prepared specimens, like test slabs, buttons etc.",
    "Certification of material against customer specifications.",
    "Failure analysis to determine root cause of product failures."
  ]
  return (
    <div className=' h-full font-poppins '>
      

        <section className="relative h-100 overflow-hidden">
  <img
    src={Banner}
    alt="About Us"
    className="w-full h-full object-cover"
  />

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/60"></div>

  {/* Content */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
    <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">
      About Maeon
    </h1>
    <p className="text-lg md:text-xl max-w-2xl">
      Delivering precision testing with integrity and excellence
    </p>

    {/* Breadcrumb */}
    <div className="flex mt-4 text-sm gap-2 opacity-80">
      <Link to="/" className="hover:text-red-400">Home</Link>
      <span>/</span>
      <span className="text-red-400">About</span>
    </div>
  </div>
</section>

{/* 🔥 Replace marquee with modern strip */}
<section className="bg-red-700 text-white py-3 overflow-hidden">
  <marquee className="whitespace-nowrap animate-marquee text-lg font-semibold">
    MAEON LABORATORIES • ACCREDITED TESTING • ISO 17025 • NABL CERTIFIED • MAEON LABORATORIES • ACCREDITED TESTING • ISO 17025 • NABL CERTIFIED • MAEON LABORATORIES • ACCREDITED TESTING • ISO 17025 • NABL CERTIFIED •  MAEON LABORATORIES • ACCREDITED TESTING • ISO 17025 • NABL CERTIFIED •
  </marquee>
</section>

{/* 🔥 Main Content */}
<section className="py-16 px-6 md:px-16 bg-gray-50">
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

    {/* LEFT CONTENT */}
    <div>
       <motion.div variants={fadeUp} className="border px-4 py-2 mb-5 rounded-full text-xs inline-block border-red-800 text-red-800 ">
                 Accredited Testing Laboratory
                </motion.div>

      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
        Trusted Testing Partner Across Industries
      </h2>

      <p className="text-gray-600 leading-relaxed mb-4 text-justify">
      Discover the expertise of our accredited testing laboratory. Maeon Laboratories is an independent testing laboratory with accreditation by NABL, India for ISO17025 Laboratory Management System and is the latest of its kind in India The laboratory caters its testing services to a wide array industries, including automotives, aerospace, construction, medical to name a few. We provide highly reliable testing services to our esteemed clients from all over the country and to international customers, for their industrial and consumer products. MAEON laboratories is one of the best-equipped lab with up-to-date facilities, run by highly qualified professionals with an experience of over 30 years in the field, who understand your testing needs precisely. Reach out to us today and elevate your testing standards!
      </p>

      <p className="text-gray-600 leading-relaxed text-justify">

MAEON Laboratories provides specialized testing services to a wide range of products such as Plastics, Rubber, Composites, Foam & Sponges, Films, Coating, Coated fabric, woven and non woven fabrics for automotives, adhesives and sealants, pipes, hoses, seals and gaskets-cork/rubber etc.,
      </p>
    </div>

    {/* RIGHT CONTENT (HIGHLIGHT CARD) */}
    <div className="bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">
        Testing Standards
      </h3>

      <ul className="space-y-2 text-gray-600 text-sm">
        <li>ASTM – American Society for Testing and Materials</li>
        <li>ISO – International Organization for Standardization</li>
        <li>BIS – Bureau of Indian Standards</li>
        <li>JIS – Japanese Industrial Standards</li>
        <li>DIN – German Standards</li>
      </ul>
    </div>
  </div>
</section>

{/* 🔥 Services / Capabilities */}
<section className="py-16 px-6 md:px-16 bg-white">
  <div className="max-w-6xl mx-auto">

    <h2 className="text-3xl font-bold text-center mb-10">
      Our Expertise
    </h2>

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
      {about.map((item, index) => (
        <div
          key={index}
          className="flex items-start gap-3 p-4 rounded-xl border hover:shadow-md transition"
        >
          <ArrowBigRightDash className="text-red-700 mt-1" />
          <p className="text-gray-700 text-sm">{item}</p>
        </div>
      ))}
    </div>
  </div>
</section>
                  <div className=' flex justify-center items-center mb-5'>
                    <Button className="bg-black hover:bg-red-800 text-white" size='lg'>
                      Submit An Enquiry
                    </Button>
                  </div>
        <div className='  bg-linear-to-r bg-red-800  '>                
          <div className=' flex gap-10 justify-around items-center'>
          
            <div className=' text-white'> 
            <motion.div variants={fadeUp} className="border px-4 py-2 mb-5 rounded-full text-xs inline-block">
                    About Our Laboratory
                  </motion.div>
                  <h1 className=' text-4xl font-mono mb-5'>Quality Accreditation</h1>
                  <p className=' max-w-xl text-xl'>
                    MAEON Laboratories complies with the requirements of ISO/IEC 17025:2017 'General requirements for the competence of testing and calibration laboratories', with accreditation by NABL, India.
                  </p>
            </div>
            <div><img src={Certificate} className=' py-10 w-3/4'/></div>
          </div>
        </div>
        

          <section className="bg-red-800/10 py-28 px-6 md:px-16">
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
    
    {/* Images */}
    <div className="relative w-full md:w-1/2 h-64 flex justify-center items-center">
      <img
        src={Lab1}
        className="absolute w-28 md:w-2/3 bottom-30 left-2 rounded-xl shadow-lg  "
      />
      <img
        src={Lab2}
        className="absolute w-28 md:w-2/3 -bottom-30 -left-20 rounded-xl shadow-lg z-10"
      />
      <img
        src={Lab3}
        className="absolute w-28 md:w-2/3 top-5 right-0 rounded-xl shadow-lg  "
      />
    </div>

    {/* Content */}
    <div className="w-full md:w-1/2 text-gray-800 text-justify">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-red-800">
        About Us
      </h1>

      <p className="mb-4 leading-relaxed text-sm md:text-base">
        MAEON Laboratories, Chennai, India, is a comprehensive testing
        laboratory primarily specialized in polymeric materials such as
        plastics, rubber, and cellular materials, along with other industrial
        and consumer products. Established in 2014, the laboratory operates as
        a fully independent organization.
      </p>

      <p className="mb-4 leading-relaxed text-sm md:text-base">
        We have gained a reputation as one of the best-equipped and most
        professional facilities in India for rubber testing, plastics testing,
        composites testing, and foam testing. Quality and service remain at the
        forefront of our laboratory ethos.
      </p>

      <p className="leading-relaxed text-sm md:text-base">
        We strive to achieve customer satisfaction by offering reliable testing
        services using appropriate equipment and international standards. Our
        laboratory complies with ISO/IEC 17025:2005 and continuously improves
        its processes through staff training and effective management systems.
      </p>
    </div>
  </div>
</section>
<FounderMessage/>
<TeamSection/>
    </div>
  )
}

export default About

