import React from "react";
import { motion } from "framer-motion";
import about from "../assets/about.jpg";
import doctor from "../assets/doctor.jpg";

const ReadMore = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="text-gray-900 font-serif overflow-hidden bg-gradient-to-b from-white via-pink-50 to-purple-50">
      
      {/* --- HERO SECTION --- */}
      {/* Dynamic height: 50% of screen on mobile, fixed large height on desktop */}
      <div className="relative w-full h-[50vh] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={about}
          alt="about"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-900/70 via-pink-900/40 to-transparent"></div>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-5xl sm:text-7xl md:text-8xl font-bold text-center drop-shadow-2xl"
          >
            About <span className="text-pink-300">Us</span>
          </motion.h1>
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            className="h-1.5 md:h-2 bg-gradient-to-r from-pink-400 to-yellow-400 mt-4 rounded-full shadow-lg"
          ></motion.div>
        </div>
      </div>

      {/* --- MAIN CONTENT AREA --- */}
      <motion.div
        className="px-6 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 relative"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {/* Background decorative blobs - scale down for mobile */}
        <div className="absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-pink-200 rounded-full blur-[80px] md:blur-[120px] opacity-30 -z-10"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-purple-200 rounded-full blur-[80px] md:blur-[120px] opacity-30 -z-10"></div>

        <motion.section variants={fadeUp} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Image Section */}
          <div className="relative order-1">
            {/* Colorful frame element - hidden on very small screens for cleaner look */}
            <div className="absolute -top-3 -right-3 md:-top-4 md:-right-4 w-full h-full border-2 md:border-4 border-pink-400 rounded-3xl -z-10"></div>
            
            <img 
              src={doctor} 
              alt="Doctor" 
              className="rounded-3xl w-full aspect-[4/5] object-cover shadow-2xl" 
            />
            
            {/* Vibrant Quote Box: 
                Hidden on Mobile (<1024px) to prevent overlapping content.
                Displays beautifully on iPad Pro and Desktop. */}
            <div className="absolute -bottom-8 -left-6 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-600 text-white p-6 md:p-10 rounded-[2rem] w-72 md:w-80 shadow-2xl hidden lg:block border border-white/20">
              <span className="text-5xl md:text-6xl font-serif block mb-2 leading-none text-yellow-300">“</span>
              <p className="italic leading-relaxed text-base md:text-lg font-sans font-medium">
                Empowering women with knowledge and care through every stage of life.
              </p>
            </div>
          </div>

          {/* RIGHT: Bio Section */}
          <div className="flex flex-col justify-center order-2 text-center lg:text-left">
            <p className="text-pink-600 font-sans font-bold uppercase tracking-widest mb-4 text-sm md:text-base">
              Dedicated Specialist
            </p>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif mb-6 md:mb-8 text-purple-900 leading-tight">
              Dr. <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600">Ambily Jose</span>
            </h2>
            
            {/* Bio points: Adjusting font size for mobile readability */}
            <div className="space-y-6 md:space-y-8 text-gray-800 leading-relaxed text-base md:text-xl">
              <div className="flex flex-col sm:flex-row lg:flex-row gap-4 items-center lg:items-start">
                <div className="hidden sm:block w-1 bg-pink-400 rounded-full h-auto self-stretch"></div>
                <p>My journey in medicine began at <strong className="text-pink-700">AIIMS, New Delhi</strong>. I chose gynecology for its unique blend of medical expertise and surgical precision.</p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-row gap-4 items-center lg:items-start">
                <div className="hidden sm:block w-1 bg-purple-400 rounded-full h-auto self-stretch"></div>
                <p>I specialize in <strong className="text-purple-700">Assisted Reproductive Technology (ART)</strong>, including IVF and ICSI, supporting couples in their journey toward parenthood.</p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-row gap-4 items-center lg:items-start">
                <div className="hidden sm:block w-1 bg-yellow-400 rounded-full h-auto self-stretch"></div>
                <p>Beyond fertility, I am dedicated to holistic women's health—incorporating nutrition and emotional well-being into every treatment plan.</p>
              </div>
            </div>

            {/* CTA Button: Full width on small mobile, auto width on desktop */}
            <div className="flex justify-center lg:justify-start">
              <button className="mt-10 md:mt-12 w-full sm:w-auto bg-gradient-to-r from-pink-500 to-purple-600 text-white font-sans font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-pink-200/50 transition-all transform hover:-translate-y-1 active:scale-95">
                Book a Consultation
              </button>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
};

export default ReadMore;