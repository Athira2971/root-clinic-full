import React from "react";
import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa"; // Install react-icons if you haven't

const Home = () => {
  const whatsappNumber = "+919000000000"; // Replace with your actual number
  const message = encodeURIComponent("Hello Dr. Ambily, I would like to book an appointment.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  const text = "Expertise in Women's Health,";
  const text1 = "Adolescence to Menopause";

  return (
    <div className="relative min-h-screen text-white overflow-hidden font-sans">
      {/* --- BACKGROUND LAYER --- */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A4E9E] via-[#AF57A1] to-[#C45CA3] z-0"></div>

      {/* --- FLOATING WHATSAPP BUTTON --- */}
      <motion.a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        {/* Pulsing Notification Ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 group-hover:hidden"></span>
        <FaWhatsapp size={32} className="relative z-10" />
        
        {/* Hover Label */}
        <span className="absolute right-16 bg-white text-gray-800 px-3 py-1 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md pointer-events-none">
          Chat with us
        </span>
      </motion.a>

      {/* --- HERO CONTENT --- */}
      <main className="relative z-10 flex flex-col items-start justify-center min-h-screen px-6 sm:px-12 md:px-20 lg:px-32 py-20">
        <div className="max-w-5xl">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg font-serif">
            {text.split("").map((char, index) => (
              <motion.span
                key={`t1-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.03, duration: 0.3 }}
              >
                {char}
              </motion.span>
            ))}
            <br className="hidden md:block" />
            <span className="inline-block mt-2 md:mt-0">
              {text1.split("").map((char, index) => (
                <motion.span
                  key={`t2-${index}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: text.length * 0.03 + index * 0.03,
                    duration: 0.3,
                  }}
                >
                  {char}
                </motion.span>
              ))}
            </span>
          </h1>

          {/* Buttons Section */}
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-6 mt-8 md:mt-12 w-full sm:w-auto">
            {/* Main CTA now links to WhatsApp */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white text-[#8A4E9E] font-bold px-8 py-4 rounded-full shadow-2xl hover:bg-pink-50 transition duration-300 text-center flex items-center justify-center gap-2"
            >
              <FaWhatsapp size={20} />
              Book via WhatsApp
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-transparent border-2 border-white text-white font-bold px-8 py-4 rounded-full hover:bg-white/10 transition duration-300 shadow-xl text-center"
            >
              Book Via App
            </motion.button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;