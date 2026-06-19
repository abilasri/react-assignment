// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Image from "../../assets/images/lab (1).jpg"
// import Button from "../../components/ui/Button";

// import { FaWhatsapp } from "react-icons/fa";

// const Contact = () => {
//   return (
//     <div className="bg-gray-50 font-poppins">


//       {/* 🔥 Banner */}
//       <section className="relative h-100   flex items-center justify-center bg-linear-to-r  from-black via-red-800 to-black text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20 " >Contact</h1>
//           <p className="text-gray-300">
//             Delivering precision testing with integrity and excellence
//           </p>  
          

//           <div className="flex justify-center gap-2 mt-3 text-sm ">
//             <Link to="/" className="hover:text-red-400">Home</Link>
//             <span>/</span>
//             <span className="text-red-400">Contact</span>
//           </div>
//         </motion.div>
//       </section>

//       <section className=" h-screen p-15 ">
//         <div className=" bg-red-800/50 h-full rounded-4xl flex ">
//           <div className="  p-8 flex-1">
//           <div className=" bg-white rounded-4xl h-full p-10">
//             <p className=" text-3xl">
//               Have Questions? <br/>We're Ready to Help
//             </p>
//             <p className=" text-black mt-5 text-justify">
//             Whether you're looking to collaborate, inquire about our research, or simply have a question — we're just a message away. Reach out to our team and we'll get back you with the information you need.
//           </p>
//           <div className=" mt-10">
//             <div className="">
//                 <p>Contact</p>
//                 <p>1234567890</p>
//             </div>
//             <div className=" h-0.5 bg-red-800/50 my-4"></div>
//             <div>
//               <p>Email</p>
//                 <p>maeonlabs@gmail.com</p>
//             </div>
//             <div className=" h-0.5 bg-red-800/50 my-4"></div>
//             <div>
//               <p>Address</p>
//               <p>123 Creative, Design District, London</p>
//             </div>
//           </div>
//           </div>
//           </div>
//           <div className="   p-10 flex-2 relative">
//             <img src={Image} className=" object-cover rounded-4xl h-full"/>
//           <div className="absolute bottom-10 w-1/2 m-10">
//   <div className="bg-black/30 rounded-4xl p-5 text-white">
//     <h1 className="font-bold text-xl mb-4">Working Hours</h1>

//     <table className="w-full text-left border-collapse">
//       <thead>
//         <tr className="border-b border-white/30">
//           <th className="py-2">Day</th>
//           <th className="py-2">Time</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr className="border-b border-white/20">
//           <td className="py-2">Mon - Fri</td>
//           <td className="py-2">10:00 AM - 7:00 PM</td>
//         </tr>
//         <tr className="border-b border-white/20">
//           <td className="py-2">Saturday</td>
//           <td className="py-2">10:00 AM - 7:00 PM</td>
//         </tr>
//         <tr>
//           <td className="py-2">Sunday</td>
//           <td className="py-2">Closed</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>
// </div>
            
//           </div>
//         </div>
//       </section>
//       {/* 📩 Contact Section */}
//       <section className="  mx-auto p-15 grid md:grid-cols-2 gap-10 bg-red-800 mb-10  ">

//         {/* 📝 Form */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="bg-white p-8 rounded-2xl shadow-lg"
//         >
//           <h2 className="text-2xl  font-semibold mb-6">Send a Message</h2>

//           <form className="space-y-4">
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <input
//               type="email"
//               placeholder="Your Email"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             />

//             <textarea
//               rows="4"
//               placeholder="Your Message"
//               className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-400"
//             ></textarea>

//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="      transition"
//             >
//             <Button className="bg-red-800 text-white " size="lg">
//               Send Message
//               </Button>
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* 📍 Contact Info */}
//         <motion.div
//           initial={{ opacity: 0, x: 40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.6 }}
//           className="space-y-6  flex flex-col justify-center  items-center"
//         >
//           <div className="bg-white p-6 rounded-2xl shadow-md min-w-full">
//             <h3 className="text-xl font-semibold mb-2">Address</h3>
//             <p className="text-gray-600">
//               123 Business Street, Chennai, Tamil Nadu, India
//             </p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-md min-w-full">
//             <h3 className="text-xl font-semibold mb-2">Email</h3>
//             <p className="text-gray-600">contact@example.com</p>
//           </div>

//           <div className="bg-white p-6 rounded-2xl shadow-md min-w-full">
//             <h3 className="text-xl font-semibold mb-2">Phone</h3>
//             <p className="text-gray-600">+91 98765 43210</p>
//           </div>
//         </motion.div>
//       </section>

//       <section>
        
//       </section>
//       <section className=" flex justify-center ">
// <div className="w-2/3 bg-[#25D366] py-12 px-12 rounded-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 ">

//   {/* Left Content */}
//   <div className="text-white max-w-xl">
//     <h1 className="text-3xl md:text-4xl font-bold mb-2">
//       Order on WhatsApp
//     </h1>
//     <p className="text-lg opacity-90">
//       Skip the hassle. Chat with us directly and place your order instantly.
//     </p>
//   </div>

//   {/* CTA Button */}
//   <a
//     href="https://wa.me/919999999999" // replace with your number
//     target="_blank"
//     rel="noopener noreferrer"
//     className="flex items-center gap-3  bg-white text-[#25D366] font-semibold px-6 py-3 rounded-full text-lg hover:bg-gray-100 transition"
//   >
//     <FaWhatsapp size={24} />
//     Chat Now
//   </a>

// </div>
// </section>

// <div className="w-full py-16 px-6 bg-gray-100">
//   <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
//     Our Offices
//   </h1>

//   <div className="grid md:grid-cols-3 gap-8">

//     {/* Chennai */}
//     <div className="bg-white rounded-3xl p-6 shadow-md">
//       <h2 className="text-xl font-bold mb-2">Chennai Office</h2>
//       <p className="text-gray-600 mb-4">
//         14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram, Chennai, Tamil Nadu - 600077
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>
//       <p className="text-gray-600">testing@maeonlabs.com</p>
//       <p className="text-gray-600">maeonlabs@gmail.com</p>
//       <p className="text-gray-600">+91 44-65555689</p>
//       <p className="text-gray-600">+91 99406 67389</p>
//     </div>

//     {/* Coimbatore */}
//     <div className="bg-white rounded-3xl p-6 shadow-md">
//       <h2 className="text-xl font-bold mb-2">Coimbatore Office</h2>
//       <p className="text-gray-600 mb-4">
//         SVP Complex I Floor D, 343, Avarampalayam Road (VKK Manon Rd Jn), Coimbatore - 641044
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>
//       <p className="text-gray-600">maeoncbe@gmail.com</p>
//       <p className="text-gray-600">+91 422-3511389</p>
//       <p className="text-gray-600">+91 75501 44770</p>
//     </div>

//     {/* Pune */}
//     <div className="bg-white rounded-3xl p-6 shadow-md">
//       <h2 className="text-xl font-bold mb-2">Pune Office</h2>
//       <p className="text-gray-600 mb-4">
//         Flat No: A-44/1/A-4, Chakan MIDC Phase II, Pune - 410501
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>
//       <p className="text-gray-600">cs.west@maeonlabs.com</p>
//       <p className="text-gray-600">maeonwest@gmail.com</p>
//       <p className="text-gray-600">+91 75500 50885</p>
//       <p className="text-gray-600">+91 99406 67389</p>
//     </div>

//   </div>
// </div>
//       {/* 🗺️ Google Map */}
//       <section className="w-full h-100">
//         <iframe
//           title="map"
//           src="https://www.google.com/maps?q=Chennai&output=embed"
//           className="w-full h-full border-0"
//           loading="lazy"
//         ></iframe>
//       </section>
      

//     </div>
//   );
// };

// export default Contact;

// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Image from "../../assets/images/lab (1).jpg";
// import Button from "../../components/ui/Button";
// import { FaWhatsapp } from "react-icons/fa";

// const fadeUp = {
//   initial: { opacity: 0, y: 60 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const fadeLeft = {
//   initial: { opacity: 0, x: -60 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const fadeRight = {
//   initial: { opacity: 0, x: 60 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const Contact = () => {
//   return (
//     <div className="bg-gray-50 font-poppins">

//       {/* 🔥 Banner */}
//       <section className="relative h-100 flex items-center justify-center bg-linear-to-r from-black via-red-800 to-black text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">Contact</h1>
//           <p className="text-gray-300">
//             Delivering precision testing with integrity and excellence
//           </p>

//           <div className="flex justify-center gap-2 mt-3 text-sm">
//             <Link to="/" className="hover:text-red-400">Home</Link>
//             <span>/</span>
//             <span className="text-red-400">Contact</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* 🔥 Split Section */}
//       <motion.section {...fadeUp} className="h-screen p-15">
//         <div className="bg-red-800/50 h-full rounded-4xl flex">

//           {/* Left */}
//           <motion.div {...fadeLeft} className="p-8 flex-1">
//             <div className="bg-white rounded-4xl h-full p-10">
//               <p className="text-3xl">
//                 Have Questions? <br />We're Ready to Help
//               </p>

//               <p className="text-black mt-5 text-justify">
//                 Whether you're looking to collaborate, inquire about our research,
//                 or simply have a question — we're just a message away.
//               </p>

//               <div className="mt-10 space-y-4">
//                 <div>
//                   <p>Contact</p>
//                   <p>1234567890</p>
//                 </div>
//                 <div className="h-0.5 bg-red-800/50"></div>
//                 <div>
//                   <p>Email</p>
//                   <p>maeonlabs@gmail.com</p>
//                 </div>
//                 <div className="h-0.5 bg-red-800/50"></div>
//                 <div>
//                   <p>Address</p>
//                   <p>14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,Chennai, Tamil Nadu , Pincode - 600 077</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right */}
//           <motion.div {...fadeRight} className="p-10 flex-2 relative">
//             <img src={Image} className="object-cover rounded-4xl h-full" />

//             {/* Working Hours */}
//             <div className="absolute bottom-10 w-1/2 m-10">
//               <div className="bg-black/30 rounded-4xl p-5 text-white">
//                 <h1 className="font-bold text-xl mb-4">Working Hours</h1>

//                 <table className="w-full text-left border-collapse">
//                   <thead>
//                     <tr className="border-b border-white/30">
//                       <th className="py-2">Day</th>
//                       <th className="py-2">Time</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b border-white/20">
//                       <td className="py-2">Mon - Fri</td>
//                       <td className="py-2">10:00 AM - 7:00 PM</td>
//                     </tr>
//                     <tr className="border-b border-white/20">
//                       <td className="py-2">Saturday</td>
//                       <td className="py-2">10:00 AM - 7:00 PM</td>
//                     </tr>
//                     <tr>
//                       <td className="py-2">Sunday</td>
//                       <td className="py-2">Closed</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* 📩 Contact Form */}
//       <motion.section {...fadeUp} className="mx-auto p-15  gap-10 bg-red-800 mb-10">

//         <motion.div {...fadeLeft} className="bg-white p-8 rounded-2xl shadow-lg">
//           <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>

//           <form className="space-y-4">
//             <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" placeholder="Your Name" />
//             <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" placeholder="Your Email" />
//             <input className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" placeholder="Your Company Name" />

//             <textarea rows="4" className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-red-400" placeholder="Your Message" />

//             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-red-800 text-white" size="lg">
//                 Send Message
//               </Button>
//             </motion.button>
//           </form>
//         </motion.div>

//         {/* <motion.div {...fadeRight} className="space-y-6 flex flex-col justify-center items-center">
//           {["Address", "Email", "Phone"].map((item, i) => (
//             <motion.div
//               key={i}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ delay: i * 0.2 }}
//               viewport={{ once: true }}
//               className="bg-white p-6 rounded-2xl shadow-md min-w-full"
//             >
//               <h3 className="text-xl font-semibold mb-2">{item}</h3>
//             {[""]}  <p className="text-gray-600">Sample {item}</p>
//             </motion.div>
//           ))}
//         </motion.div> */}
//       </motion.section>

//       {/* 💬 WhatsApp */}
//       <motion.section {...fadeUp} className="flex justify-center">
//         <div className="w-2/3 bg-[#25D366] py-12 px-12 rounded-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10">
//           <div className="text-white max-w-xl">
//             <h1 className="text-3xl md:text-4xl font-bold">Order on WhatsApp</h1>
//             <p className="text-lg opacity-90">
//               Chat with us directly and place your order instantly.
//             </p>
//           </div>

//           <a
//             href="https://wa.me/919999999999"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 bg-white text-[#25D366] px-6 py-3 rounded-full hover:bg-gray-100"
//           >
//             <FaWhatsapp size={24} />
//             Chat Now
//           </a>
//         </div>
//       </motion.section>

//       {/* 🏢 Offices */}
//      <motion.div {...fadeUp} className="w-full py-16 px-6 bg-gray-100">
//   <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
//     Our Offices
//   </h1>

//   <motion.div
//     className="grid md:grid-cols-3 gap-8"
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     variants={{
//       visible: { transition: { staggerChildren: 0.2 } }
//     }}
//   >

//     {/* Chennai */}
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       className="bg-white rounded-3xl p-6 shadow-md hover:scale-105 transition"
//     >
//       <h2 className="text-xl font-bold mb-2">Chennai Office</h2>

//       <p className="text-gray-600 mb-4">
//         14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,
//         Chennai, Tamil Nadu - 600077
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>

//       <a href="mailto:testing@maeonlabs.com" className="block text-gray-600 hover:text-red-500">
//         testing@maeonlabs.com
//       </a>

//       <a href="mailto:maeonlabs@gmail.com" className="block text-gray-600 hover:text-red-500">
//         maeonlabs@gmail.com
//       </a>

//       <a href="tel:+914465555689" className="block text-gray-600 hover:text-red-500">
//         +91 44-65555689
//       </a>

//       <a href="tel:+919940667389" className="block text-gray-600 hover:text-red-500">
//         +91 99406 67389
//       </a>
//     </motion.div>

//     {/* Coimbatore */}
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       className="bg-white rounded-3xl p-6 shadow-md hover:scale-105 transition"
//     >
//       <h2 className="text-xl font-bold mb-2">Coimbatore Office</h2>

//       <p className="text-gray-600 mb-4">
//         SVP Complex I Floor D, 343, Avarampalayam Road (VKK Manon Rd Jn),
//         Coimbatore - 641044
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>

//       <a href="mailto:maeoncbe@gmail.com" className="block text-gray-600 hover:text-red-500">
//         maeoncbe@gmail.com
//       </a>

//       <a href="tel:+914223511389" className="block text-gray-600 hover:text-red-500">
//         +91 422-3511389
//       </a>

//       <a href="tel:+917550144770" className="block text-gray-600 hover:text-red-500">
//         +91 75501 44770
//       </a>
//     </motion.div>

//     {/* Pune */}
//     <motion.div
//       variants={{
//         hidden: { opacity: 0, y: 40 },
//         visible: { opacity: 1, y: 0 }
//       }}
//       className="bg-white rounded-3xl p-6 shadow-md hover:scale-105 transition"
//     >
//       <h2 className="text-xl font-bold mb-2">Pune Office</h2>

//       <p className="text-gray-600 mb-4">
//         Flat No: A-44/1/A-4, Chakan MIDC Phase II, Pune - 410501
//       </p>

//       <h3 className="font-semibold mb-2">Contact</h3>

//       <a href="mailto:cs.west@maeonlabs.com" className="block text-gray-600 hover:text-red-500">
//         cs.west@maeonlabs.com
//       </a>

//       <a href="mailto:maeonwest@gmail.com" className="block text-gray-600 hover:text-red-500">
//         maeonwest@gmail.com
//       </a>

//       <a href="tel:+917550050885" className="block text-gray-600 hover:text-red-500">
//         +91 75500 50885
//       </a>

//       <a href="tel:+919940667389" className="block text-gray-600 hover:text-red-500">
//         +91 99406 67389
//       </a>
//     </motion.div>

//   </motion.div>
// </motion.div>

//       {/* 🗺️ Map */}
//       <motion.section {...fadeUp} className="w-full h-100">
//         <iframe
//           title="map"
//           src="https://www.google.com/maps?q=Chennai&output=embed"
//           className="w-full h-full border-0"
//         ></iframe>
//       </motion.section>

//     </div>
//   );
// };

// export default Contact;


// import React from "react";
// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import Image from "../../assets/images/lab (1).jpg";
// import Button from "../../components/ui/Button";
// import { FaWhatsapp } from "react-icons/fa";

// const fadeUp = {
//   initial: { opacity: 0, y: 60 },
//   whileInView: { opacity: 1, y: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const fadeLeft = {
//   initial: { opacity: 0, x: -60 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const fadeRight = {
//   initial: { opacity: 0, x: 60 },
//   whileInView: { opacity: 1, x: 0 },
//   transition: { duration: 0.6 },
//   viewport: { once: true }
// };

// const Contact = () => {
//   return (
//     <div className="bg-gradient-to-br from-gray-50 via-white to-red-50 font-poppins">

//       {/* 🔥 Banner */}
//       <section className="relative h-100 flex items-center justify-center bg-gradient-to-r from-slate-900 via-red-900 to-amber-900 text-white">
//         <motion.div
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6 }}
//           className="text-center"
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20 bg-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow-xl">Contact</h1>
//           <p className="text-gray-200 text-lg">
//             Delivering precision testing with integrity and excellence
//           </p>

//           <div className="flex justify-center gap-2 mt-3 text-sm">
//             <Link to="/" className="hover:text-gradient-to-r hover:from-pink-400 hover:to-orange-400 hover:bg-clip-text hover:text-transparent transition-all duration-300">Home</Link>
//             <span>/</span>
//             <span className="text-gradient-to-r from-red-400 via-pink-400 to-orange-400 bg-clip-text text-transparent drop-shadow">Contact</span>
//           </div>
//         </motion.div>
//       </section>

//       {/* 🔥 Split Section */}
//       <motion.section {...fadeUp} className="h-screen p-15">
//         <div className="bg-gradient-to-r from-red-500/60 via-pink-500/60 to-orange-500/60 backdrop-blur-sm h-full rounded-4xl flex border border-white/20 shadow-2xl">

//           {/* Left */}
//           <motion.div {...fadeLeft} className="p-8 flex-1">
//             <div className="bg-gradient-to-br from-white via-white/90 to-red-50/80 backdrop-blur-xl rounded-4xl h-full p-10 border border-white/30 shadow-2xl">
//               <p className="text-3xl bg-gradient-to-r from-gray-900 via-red-800 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">
//                 Have Questions? <br />We're Ready to Help
//               </p>

//               <p className="text-black mt-5 text-justify text-lg">
//                 Whether you're looking to collaborate, inquire about our research,
//                 or simply have a question — we're just a message away.
//               </p>

//               <div className="mt-10 space-y-4">
//                 <div>
//                   <p className="text-gray-700 font-semibold text-lg">Contact</p>
//                   <p className="text-2xl font-bold bg-gradient-to-r from-red-600 to-orange-500 bg-clip-text text-transparent drop-shadow">1234567890</p>
//                 </div>
//                 <div className="h-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full shadow-sm"></div>
//                 <div>
//                   <p className="text-gray-700 font-semibold text-lg">Email</p>
//                   <p className="text-xl font-medium bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent drop-shadow">maeonlabs@gmail.com</p>
//                 </div>
//                 <div className="h-0.5 bg-gradient-to-r from-red-500 via-pink-500 to-orange-500 rounded-full shadow-sm"></div>
//                 <div>
//                   <p className="text-gray-700 font-semibold text-lg">Address</p>
//                   <p className="text-gray-800 leading-relaxed">14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,Chennai, Tamil Nadu , Pincode - 600 077</p>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Right */}
//           <motion.div {...fadeRight} className="p-10 flex-2 relative">
//             <img src={Image} className="object-cover rounded-4xl h-full shadow-2xl" />

//             {/* Working Hours */}
//             <div className="absolute bottom-10 w-1/2 m-10">
//               <div className="bg-gradient-to-r from-slate-900/90 via-black/80 to-slate-900/90 backdrop-blur-xl rounded-4xl p-5 text-white shadow-2xl border border-white/20">
//                 <h1 className="font-bold text-xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent drop-shadow-lg">Working Hours</h1>

//                 <table className="w-full text-left border-collapse">
//                   <thead>
//                     <tr className="border-b border-gradient-to-r border-cyan-400/50">
//                       <th className="py-2 font-semibold">Day</th>
//                       <th className="py-2 font-semibold">Time</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr className="border-b border-white/20 hover:bg-white/10 rounded-lg transition-all">
//                       <td className="py-2 font-medium">Mon - Fri</td>
//                       <td className="py-2 font-semibold text-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">10:00 AM - 7:00 PM</td>
//                     </tr>
//                     <tr className="border-b border-white/20 hover:bg-white/10 rounded-lg transition-all">
//                       <td className="py-2 font-medium">Saturday</td>
//                       <td className="py-2 font-semibold text-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">10:00 AM - 7:00 PM</td>
//                     </tr>
//                     <tr className="hover:bg-white/10 rounded-lg transition-all">
//                       <td className="py-2 font-medium">Sunday</td>
//                       <td className="py-2 font-semibold text-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">Closed</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </motion.section>

//       {/* 📩 Contact Form */}
//       <motion.section {...fadeUp} className="mx-auto p-15 gap-10 bg-gradient-to-br from-red-600 via-pink-600 to-orange-600 mb-10 shadow-2xl">

//         <motion.div {...fadeLeft} className="bg-gradient-to-br from-white via-white/95 to-red-50/80 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-white/30">
//           <h2 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-gray-900 via-red-800 to-orange-600 bg-clip-text text-transparent drop-shadow-lg">Send a Message</h2>

//           <form className="space-y-4">
//             <input className="w-full p-4 border border-gradient-to-r from-red-400/50 to-pink-400/50 rounded-2xl focus:ring-4 focus:ring-gradient-to-r focus:ring-red-400/50 focus:ring-offset-2 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg" placeholder="Your Name" />
//             <input className="w-full p-4 border border-gradient-to-r from-red-400/50 to-pink-400/50 rounded-2xl focus:ring-4 focus:ring-gradient-to-r focus:ring-red-400/50 focus:ring-offset-2 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg" placeholder="Your Email" />
//             <input className="w-full p-4 border border-gradient-to-r from-red-400/50 to-pink-400/50 rounded-2xl focus:ring-4 focus:ring-gradient-to-r focus:ring-red-400/50 focus:ring-offset-2 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg" placeholder="Your Company Name" />

//             <textarea rows="4" className="w-full p-4 border border-gradient-to-r from-red-400/50 to-pink-400/50 rounded-2xl focus:ring-4 focus:ring-gradient-to-r focus:ring-red-400/50 focus:ring-offset-2 bg-white/80 backdrop-blur-sm transition-all hover:shadow-lg resize-vertical" placeholder="Your Message" />

//             <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               <Button className="bg-gradient-to-r from-red-600 via-pink-600 to-orange-600 text-white hover:from-red-700 hover:via-pink-700 hover:to-orange-700 shadow-xl hover:shadow-2xl transition-all duration-300 rounded-2xl" size="lg">
//                 Send Message
//               </Button>
//             </motion.button>
//           </form>
//         </motion.div>

//       </motion.section>

//       {/* 💬 WhatsApp */}
//       <motion.section {...fadeUp} className="flex justify-center">
//         <div className="w-2/3 bg-gradient-to-r from-[#25D366] via-[#20BA5A] to-[#128C7E] py-12 px-12 rounded-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
//           <div className="text-white max-w-xl">
//             <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent drop-shadow-xl">Order on WhatsApp</h1>
//             <p className="text-lg opacity-90 text-emerald-100">
//               Chat with us directly and place your order instantly.
//             </p>
//           </div>

//           <a
//             href="https://wa.me/919999999999"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="flex items-center gap-3 bg-gradient-to-r from-white via-gray-50 to-white text-[#25D366] px-8 py-4 rounded-full hover:from-gray-100 hover:to-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300 font-semibold text-lg hover:scale-105"
//           >
//             <FaWhatsapp size={24} />
//             Chat Now
//           </a>
//         </div>
//       </motion.section>

//       {/* 🏢 Offices */}
//       <motion.div {...fadeUp} className="w-full py-16 px-6 bg-gradient-to-br from-gray-100 via-white to-red-50/50">
//         <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-slate-800 via-red-700 to-orange-600 bg-clip-text text-transparent drop-shadow-xl">
//           Our Offices
//         </h1>

//         <motion.div
//           className="grid md:grid-cols-3 gap-8"
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           variants={{
//             visible: { transition: { staggerChildren: 0.2 } }
//           }}
//         >

//           {/* Chennai */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             className="bg-gradient-to-br from-white via-white/90 to-red-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gradient-to-r border-red-200/50 hover:border-red-300/50"
//           >
//             <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-700 to-orange-500 bg-clip-text text-transparent drop-shadow">Chennai Office</h2>

//             <p className="text-gray-700 mb-6 leading-relaxed bg-gradient-to-r from-gray-600/80 to-gray-700/80 bg-clip-text">
//               14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,
//               Chennai, Tamil Nadu - 600077
//             </p>

//             <h3 className="font-semibold mb-4 text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h3>

//             <a href="mailto:testing@maeonlabs.com" className="block text-gray-700 hover:text-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1">
//               testing@maeonlabs.com
//             </a>

//             <a href="mailto:maeonlabs@gmail.com" className="block text-gray-700 hover:text-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1">
//               maeonlabs@gmail.com
//             </a>

//             <a href="tel:+914465555689" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1 font-medium">
//               +91 44-65555689
//             </a>

//             <a href="tel:+919940667389" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
//               +91 99406 67389
//             </a>
//           </motion.div>

//           {/* Coimbatore */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             className="bg-gradient-to-br from-white via-white/90 to-red-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gradient-to-r border-red-200/50 hover:border-red-300/50"
//           >
//             <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-700 to-orange-500 bg-clip-text text-transparent drop-shadow">Coimbatore Office</h2>

//             <p className="text-gray-700 mb-6 leading-relaxed bg-gradient-to-r from-gray-600/80 to-gray-700/80 bg-clip-text">
//               SVP Complex I Floor D, 343, Avarampalayam Road (VKK Manon Rd Jn),
//               Coimbatore - 641044
//             </p>

//             <h3 className="font-semibold mb-4 text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h3>

//             <a href="mailto:maeoncbe@gmail.com" className="block text-gray-700 hover:text-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1">
//               maeoncbe@gmail.com
//             </a>

//             <a href="tel:+914223511389" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1 font-medium">
//               +91 422-3511389
//             </a>

//             <a href="tel:+917550144770" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
//               +91 75501 44770
//             </a>
//           </motion.div>

//           {/* Pune */}
//           <motion.div
//             variants={{
//               hidden: { opacity: 0, y: 40 },
//               visible: { opacity: 1, y: 0 }
//             }}
//             className="bg-gradient-to-br from-white via-white/90 to-red-50/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-gradient-to-r border-red-200/50 hover:border-red-300/50"
//           >
//             <h2 className="text-xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-red-700 to-orange-500 bg-clip-text text-transparent drop-shadow">Pune Office</h2>

//             <p className="text-gray-700 mb-6 leading-relaxed bg-gradient-to-r from-gray-600/80 to-gray-700/80 bg-clip-text">
//               Flat No: A-44/1/A-4, Chakan MIDC Phase II, Pune - 410501
//             </p>

//             <h3 className="font-semibold mb-4 text-lg bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Contact</h3>

//             <a href="mailto:cs.west@maeonlabs.com" className="block text-gray-700 hover:text-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1">
//               cs.west@maeonlabs.com
//             </a>

//             <a href="mailto:maeonwest@gmail.com" className="block text-gray-700 hover:text-gradient-to-r hover:from-red-500 hover:to-orange-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1">
//               maeonwest@gmail.com
//             </a>

//             <a href="tel:+917550050885" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 mb-1 font-medium">
//               +91 75500 50885
//             </a>

//             <a href="tel:+919940667389" className="block text-gray-700 hover:text-gradient-to-r hover:from-emerald-500 hover:to-teal-500 hover:bg-clip-text hover:text-transparent transition-all duration-300 font-medium">
//               +91 99406 67389
//             </a>
//           </motion.div>

//         </motion.div>
//       </motion.div>

//       {/* 🗺️ Map */}
//       <motion.section {...fadeUp} className="w-full h-100 relative overflow-hidden">
//         <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent pointer-events-none"></div>
//         <iframe
//           title="map"
//           src="https://www.google.com/maps?q=Chennai&output=embed"
//           className="w-full h-full border-0 relative z-10"
//         ></iframe>
//       </motion.section>

//     </div>
//   );
// };

// export default Contact;



import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Image from "../../assets/images/lab (1).jpg";
import Button from "../../components/ui/Button";
import { FaWhatsapp } from "react-icons/fa";

const fadeUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const fadeLeft = {
  initial: { opacity: 0, x: -60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const fadeRight = {
  initial: { opacity: 0, x: 60 },
  whileInView: { opacity: 1, x: 0 },
  transition: { duration: 0.6 },
  viewport: { once: true }
};

const Contact = () => {
  return (
    <div className="bg-gradient-to-br from-rose-50 via-white to-red-50 font-poppins">

      {/* 🔥 Banner */}
      <section className="relative h-100 flex items-center justify-center bg-gradient-to-r from-red-950 via-red-800 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_40%)]"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center relative z-10"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 mt-20">Contact</h1>
          <p className="text-red-100">
            Delivering precision testing with integrity and excellence
          </p>

          <div className="flex justify-center gap-2 mt-3 text-sm">
            <Link to="/" className="hover:text-red-200 transition">Home</Link>
            <span>/</span>
            <span className="text-red-300">Contact</span>
          </div>
        </motion.div>
      </section>

      {/* 🔥 Split Section */}
      <motion.section {...fadeUp} className="h-screen p-15">
        <div className="bg-gradient-to-r from-red-900 via-red-800 to-red-700 h-full rounded-4xl flex shadow-2xl overflow-hidden">

          {/* Left */}
          <motion.div {...fadeLeft} className="p-8 flex-1">
            <div className="bg-gradient-to-br from-white via-rose-50 to-red-50 rounded-4xl h-full p-10 shadow-xl border border-red-100">
              <p className="text-3xl text-red-900 font-semibold">
                Have Questions? <br />We're Ready to Help
              </p>

              <p className="text-black mt-5 text-justify">
                Whether you're looking to collaborate, inquire about our research,
                or simply have a question — we're just a message away.
              </p>

              <div className="mt-10 space-y-4">
                <div>
                  <p className="text-red-800 font-medium">Contact</p>
                  <p className="text-gray-900 font-semibold">1234567890</p>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-red-200 via-red-800 to-red-200"></div>
                <div>
                  <p className="text-red-800 font-medium">Email</p>
                  <p className="text-gray-900 font-semibold">maeonlabs@gmail.com</p>
                </div>
                <div className="h-0.5 bg-gradient-to-r from-red-200 via-red-800 to-red-200"></div>
                <div>
                  <p className="text-red-800 font-medium">Address</p>
                  <p className="text-gray-900">
                    14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,Chennai, Tamil Nadu , Pincode - 600 077
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div {...fadeRight} className="p-10 flex-2 relative">
            <img src={Image} className="object-cover rounded-4xl h-full w-full shadow-xl" alt="Lab" />

            {/* Working Hours */}
            <div className="absolute bottom-10 w-1/2 m-10">
              <div className="bg-gradient-to-br from-red-950/80 via-red-900/75 to-red-800/70 backdrop-blur-md rounded-4xl p-5 text-white border border-white/10 shadow-2xl">
                <h1 className="font-bold text-xl mb-4 text-red-100">Working Hours</h1>

                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/30">
                      <th className="py-2">Day</th>
                      <th className="py-2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/20">
                      <td className="py-2">Mon - Fri</td>
                      <td className="py-2 text-red-100">10:00 AM - 7:00 PM</td>
                    </tr>
                    <tr className="border-b border-white/20">
                      <td className="py-2">Saturday</td>
                      <td className="py-2 text-red-100">10:00 AM - 7:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday</td>
                      <td className="py-2 text-red-200">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* 📩 Contact Form */}
      <motion.section {...fadeUp} className="mx-auto p-15 gap-10 bg-gradient-to-r from-red-900 via-red-800 to-red-900 mb-10 shadow-2xl">

        <motion.div {...fadeLeft} className="bg-gradient-to-br from-white via-rose-50 to-red-50 p-8 rounded-2xl shadow-lg border border-red-100">
          <h2 className="text-2xl font-semibold mb-6 text-red-900">Send a Message</h2>

          <form className="space-y-4">
            <input className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none bg-white" placeholder="Your Name" />
            <input className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none bg-white" placeholder="Your Email" />
            <input className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none bg-white" placeholder="Your Company Name" />

            <textarea rows="4" className="w-full p-3 border border-red-200 rounded-lg focus:ring-2 focus:ring-red-400 focus:border-red-500 outline-none bg-white" placeholder="Your Message" />

            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button className="bg-red-800 text-white hover:bg-red-900" size="lg">
                Send Message
              </Button>
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* 💬 WhatsApp */}
      <motion.section {...fadeUp} className="flex justify-center">
        <div className="w-2/3 bg-gradient-to-r from-[#25D366] to-[#1ebe5d] py-12 px-12 rounded-full flex flex-col md:flex-row items-center justify-between gap-6 mb-10 shadow-xl">
          <div className="text-white max-w-xl">
            <h1 className="text-3xl md:text-4xl font-bold">Order on WhatsApp</h1>
            <p className="text-lg opacity-90">
              Chat with us directly and place your order instantly.
            </p>
          </div>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-white text-[#25D366] px-6 py-3 rounded-full hover:bg-gray-100 transition"
          >
            <FaWhatsapp size={24} />
            Chat Now
          </a>
        </div>
      </motion.section>

      {/* 🏢 Offices */}
      <motion.div {...fadeUp} className="w-full py-16 px-6 bg-gradient-to-br from-red-50 via-white to-rose-100">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-red-900">
          Our Offices
        </h1>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >

          {/* Chennai */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-gradient-to-br from-white via-rose-50 to-red-50 rounded-3xl p-6 shadow-md hover:scale-105 transition border border-red-100"
          >
            <h2 className="text-xl font-bold mb-2 text-red-900">Chennai Office</h2>

            <p className="text-gray-600 mb-4">
              14, Lakshmikanthammal 1st Street, Rajiv Nagar, Vanagaram,
              Chennai, Tamil Nadu - 600077
            </p>

            <h3 className="font-semibold mb-2 text-red-800">Contact</h3>

            <a href="mailto:testing@maeonlabs.com" className="block text-gray-600 hover:text-red-700">
              testing@maeonlabs.com
            </a>

            <a href="mailto:maeonlabs@gmail.com" className="block text-gray-600 hover:text-red-700">
              maeonlabs@gmail.com
            </a>

            <a href="tel:+914465555689" className="block text-gray-600 hover:text-red-700">
              +91 44-65555689
            </a>

            <a href="tel:+919940667389" className="block text-gray-600 hover:text-red-700">
              +91 99406 67389
            </a>
          </motion.div>

          {/* Coimbatore */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-gradient-to-br from-white via-rose-50 to-red-50 rounded-3xl p-6 shadow-md hover:scale-105 transition border border-red-100"
          >
            <h2 className="text-xl font-bold mb-2 text-red-900">Coimbatore Office</h2>

            <p className="text-gray-600 mb-4">
              SVP Complex I Floor D, 343, Avarampalayam Road (VKK Manon Rd Jn),
              Coimbatore - 641044
            </p>

            <h3 className="font-semibold mb-2 text-red-800">Contact</h3>

            <a href="mailto:maeoncbe@gmail.com" className="block text-gray-600 hover:text-red-700">
              maeoncbe@gmail.com
            </a>

            <a href="tel:+914223511389" className="block text-gray-600 hover:text-red-700">
              +91 422-3511389
            </a>

            <a href="tel:+917550144770" className="block text-gray-600 hover:text-red-700">
              +91 75501 44770
            </a>
          </motion.div>

          {/* Pune */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 40 },
              visible: { opacity: 1, y: 0 }
            }}
            className="bg-gradient-to-br from-white via-rose-50 to-red-50 rounded-3xl p-6 shadow-md hover:scale-105 transition border border-red-100"
          >
            <h2 className="text-xl font-bold mb-2 text-red-900">Pune Office</h2>

            <p className="text-gray-600 mb-4">
              Flat No: A-44/1/A-4, Chakan MIDC Phase II, Pune - 410501
            </p>

            <h3 className="font-semibold mb-2 text-red-800">Contact</h3>

            <a href="mailto:cs.west@maeonlabs.com" className="block text-gray-600 hover:text-red-700">
              cs.west@maeonlabs.com
            </a>

            <a href="mailto:maeonwest@gmail.com" className="block text-gray-600 hover:text-red-700">
              maeonwest@gmail.com
            </a>

            <a href="tel:+917550050885" className="block text-gray-600 hover:text-red-700">
              +91 75500 50885
            </a>

            <a href="tel:+919940667389" className="block text-gray-600 hover:text-red-700">
              +91 99406 67389
            </a>
          </motion.div>

        </motion.div>
      </motion.div>

      {/* 🗺️ Map */}
      <motion.section {...fadeUp} className="w-full h-100">
        <iframe
          title="map"
          src="https://www.google.com/maps?q=Chennai&output=embed"
          className="w-full h-full border-0"
        ></iframe>
      </motion.section>

    </div>
  );
};

export default Contact;