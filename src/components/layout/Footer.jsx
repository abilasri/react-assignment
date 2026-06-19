import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Logo from "../../assets/newlogowhite.webp";
const Footer = () => {
  return (
    <footer className="bg-black/85 text-gray-300 px-6 py-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {/* About */}
        <div className="space-y-4 animate-fadeInUp">
          {/* <h2 className="text-xl font-semibold text-white">
            Maeon Laboratories
          </h2> */}
          <img src={Logo} alt="logo" className=" w-64"/>

          <p className="text-sm leading-relaxed">
            Maeon Laboratories’ experts always waiting to receive your testing
            plan for Plastics and Rubber materials, Cellular foam and sponges,
            Adhesive and Sealants, Structural adhesive, Woven & nonwoven fabric,
            Automotive trims, Rubber & Cork seals, tubes, belts, sheets, films,
            Reinforced Composites, and more.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4 pt-3">
            <a href="#" className="hover:scale-110 transition">
              <FaFacebookF className="hover:text-blue-500" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaTwitter className="hover:text-sky-400" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaInstagram className="hover:text-pink-500" />
            </a>
            <a href="#" className="hover:scale-110 transition">
              <FaLinkedinIn className="hover:text-blue-400" />
            </a>
          </div>
        </div>

        {/* Chennai */}
        <div className="space-y-3 animate-fadeInUp delay-150">
          <h3 className="text-lg font-semibold text-white flex items-center gap-2">
            <MapPin size={18} /> Chennai
          </h3>

          <p className="text-sm">
            14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram, Chennai - 600077
          </p>

          <a href="mailto:testing@maeonlabs.com" className="flex items-center gap-2 text-sm hover:text-white">
            <Mail size={16} /> testing@maeonlabs.com
          </a>

          <a href="mailto:maeonlabs@gmail.com" className="flex items-center gap-2 text-sm hover:text-white">
            <Mail size={16} /> maeonlabs@gmail.com
          </a>

          <a href="tel:+914426494689" className="flex items-center gap-2 text-sm hover:text-white">
            <Phone size={16} /> +91 44-26494689
          </a>

          <a href="tel:+919940667389" className="flex items-center gap-2 text-sm hover:text-white">
            <Phone size={16} /> +91 99406 67389
          </a>

          <a href="tel:+919042055689" className="flex items-center gap-2 text-sm hover:text-white">
            <Phone size={16} /> +91 9042055689
          </a>

          <a href="tel:+917358722232" className="flex items-center gap-2 text-sm hover:text-white">
            <Phone size={16} /> +91 7358722232
          </a>
        </div>

        {/* Other Locations */}
        <div className="space-y-6 animate-fadeInUp delay-300">

          {/* Coimbatore */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin size={18} /> Coimbatore
            </h3>

            <p className="text-sm">
              SVP Complex I floor D, 343, Avarampalayam Road, Coimbatore - 641044
            </p>

            <a href="mailto:maeoncbe@gmail.com" className="flex items-center gap-2 text-sm hover:text-white">
              <Mail size={16} /> maeoncbe@gmail.com
            </a>

            <a href="tel:+914223511389" className="flex items-center gap-2 text-sm hover:text-white">
              <Phone size={16} /> +91 422-3511389
            </a>

            <a href="tel:+917550144770" className="flex items-center gap-2 text-sm hover:text-white">
              <Phone size={16} /> +91 75501 44770
            </a>
          </div>

          {/* Pune */}
          <div>
            <h3 className="text-lg font-semibold text-white flex items-center gap-2">
              <MapPin size={18} /> Pune
            </h3>

            <p className="text-sm">
              Flat No:A-44/1/A-4, Chakan MIDC Phase II, Pune - 410501
            </p>

            <a href="mailto:cs.west@maeonlabs.com" className="flex items-center gap-2 text-sm hover:text-white">
              <Mail size={16} /> cs.west@maeonlabs.com
            </a>

            <a href="mailto:maeonwest@gmail.com" className="flex items-center gap-2 text-sm hover:text-white">
              <Mail size={16} /> maeonwest@gmail.com
            </a>

            <a href="tel:+917550050885" className="flex items-center gap-2 text-sm hover:text-white">
              <Phone size={16} /> +91 75500 50885
            </a>

            <a href="tel:+919940667389" className="flex items-center gap-2 text-sm hover:text-white">
              <Phone size={16} /> +91 99406 67389
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm animate-fadeIn">
        <p>✔ Accredited Certificate Available</p>

        <p className="mt-2 text-gray-500">
          © {new Date().getFullYear()} Maeon Laboratories. All rights reserved.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease forwards;
        }
        .delay-150 {
          animation-delay: 0.15s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;