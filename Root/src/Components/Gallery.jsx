import React, { useState } from "react";
import { motion } from "framer-motion";
import aboutHero from "../assets/about.jpg";
import img1 from "../assets/gallery1.jpeg";
import img2 from "../assets/gallery2.jpeg";
import img3 from "../assets/gallery3.jpeg";
import img4 from "../assets/gallery4.jpeg";
import img5 from "../assets/gallety5.jpeg";
import img6 from "../assets/gallery6.jpeg";

const Gallery = () => {
  const images = [img1, img2, img3, img4, img5, img6];

  const stats = [
    { value: "15+", label: "Years Experience" },
    { value: "5k+", label: "Happy Patients" },
    { value: "100%", label: "Care & Dedication" },
    { value: "24/7", label: "Online Support" },
  ];

  return (
    <div className="bg-white min-h-screen">
      
      {/* --- HERO SECTION --- */}
      {/* Adjusted height: 40vh for mobile, 60vh for tablets, fixed on desktop */}
      <div className="relative w-full h-[45vh] md:h-[55vh] lg:h-[699px] overflow-hidden">
        <img 
          src={aboutHero} 
          alt="Gallery Background" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#8A4E9E]/80 to-[#C45CA3]/60"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif text-center"
          >
            Our Gallery
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1 bg-pink-400 mt-4 rounded-full"
          ></motion.div>
        </div>
      </div>

      {/* --- GALLERY GRID SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        {/* Mobile: 1 column
            Tablet: 2 columns 
            Desktop: 3 columns 
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative aspect-square overflow-hidden rounded-[2rem] shadow-lg group cursor-pointer"
            >
              <img
                src={img}
                alt={`Gallery image ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- STATS SECTION --- */}
      <section className="bg-gradient-to-br from-[#8A4E9E] to-[#C45CA3] py-12 md:py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center text-white space-y-2"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold drop-shadow-md">
                {stat.value}
              </h2>
              <p className="text-pink-100 uppercase tracking-[0.2em] text-xs md:text-sm font-bold">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Gallery;