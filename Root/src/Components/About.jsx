import React from "react";
import { Link } from "react-router-dom";
import doctor from "../assets/doctor.jpg";

const About = () => {
  return (
    <section className="bg-gray-100 py-12 md:py-20 px-6 sm:px-12 md:px-16 lg:px-24 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto">
        {/* Main Content Grid: 1 column on mobile, 2 columns on tablet/desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          
          {/* 1. Image Section */}
          <div className="relative order-1 lg:order-1">
            {/* Decorative background blur */}
            <div className="absolute -inset-4 bg-pink-200 rounded-3xl blur-2xl opacity-30"></div>
            
            {/* Responsive Image: 
               - aspect-square on mobile to keep it compact 
               - aspect-[4/5] on desktop for the "tall" portrait look
            */}
            <img
              src={doctor}
              alt="Dr. Ambily Jose"
              className="relative rounded-3xl w-full max-w-[550px] mx-auto object-cover shadow-2xl aspect-[4/5] lg:aspect-auto"
            />
          </div>

          {/* 2. Text Content Section */}
          <div className="flex flex-col justify-center order-2 lg:order-2 text-center lg:text-left">
            <p className="text-pink-500 font-bold uppercase tracking-widest mb-3 text-sm md:text-base">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-gray-900 mb-6 leading-tight">
              Hey, I am <br />
              <span className="text-pink-600 italic">Dr. Ambily Jose</span>
            </h2>

            <div className="bg-white/50 p-4 rounded-xl border-l-4 border-pink-500 mb-6 inline-block mx-auto lg:mx-0">
               <p className="font-semibold text-gray-800 text-base md:text-lg">
                Gynecologist & Fertility specialist
              </p>
              <p className="text-sm text-gray-600 italic">
                MBBS (AIIMS, New Delhi), MD (OBG - Gold medalist), DNB, FNB
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed mb-8 text-sm md:text-base">
              <p>
                My medical journey began at AIIMS, New Delhi, where I developed
                a passion for gynecology—a field that blends advanced medical
                expertise, surgical precision, and the privilege of supporting
                women through all stages of life.
              </p>

              <p>
                I specialize in fertility and reproductive health, with advanced
                training in Assisted Reproductive Technology (ART), including
                IVF and ICSI.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start">
              <Link
                to="/readmore"
                className="inline-block px-10 py-4 bg-pink-500 text-white font-bold rounded-full hover:bg-pink-600 transition-all duration-300 shadow-lg hover:shadow-pink-200 active:scale-95"
              >
                Read More
              </Link>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;