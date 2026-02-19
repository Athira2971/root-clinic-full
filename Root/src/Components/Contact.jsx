// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { Phone, Mail, MapPin, Send } from "lucide-react";
// import contactHero from "../assets/about.jpg";

// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
// console.log("API base url",API_BASE_URL)

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     first_name: "",
//     last_name: "",
//     email: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [responseMsg, setResponseMsg] = useState("");

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setResponseMsg("");

//     try {
//       const response = await fetch(`${API_BASE_URL}/api/contact/`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setResponseMsg("Message sent successfully!");
//         setFormData({
//           first_name: "",
//           last_name: "",
//           email: "",
//           message: "",
//         });
//       } else {
//         setResponseMsg(data.error || "Something went wrong");
//       }
//     } catch (error) {
//       setResponseMsg("Server error. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="bg-white min-h-screen">
//       {/* HERO SECTION */}
//       <div className="relative w-full h-[50vh] md:h-[600px] lg:h-[700px] overflow-hidden">
//         <img
//           src={contactHero}
//           alt="Contact Us"
//           className="w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-gradient-to-r from-[#8A4E9E]/90 to-[#C45CA3]/70"></div>

//         <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif"
//           >
//             Contact Us
//           </motion.h1>
//         </div>
//       </div>

//       {/* MAIN SECTION */}
//       <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

//           {/* LEFT INFO */}
//           <div className="lg:col-span-1 space-y-6">
//             <div className="bg-gradient-to-br from-[#8A4E9E] to-[#C45CA3] p-8 rounded-[2rem] text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-8 italic font-serif">
//                 Reach Out Directly
//               </h3>

//               {[
//                 { icon: <Phone size={22} />, label: "Call Us", val: "+1 (234) 567-890" },
//                 { icon: <Mail size={22} />, label: "Email Us", val: "care@clinic.com" },
//                 { icon: <MapPin size={22} />, label: "Location", val: "123 Health St, Suite 500" },
//               ].map((item, i) => (
//                 <div key={i} className="flex items-center gap-4 mb-6">
//                   <div className="bg-white/20 p-3 rounded-2xl">
//                     {item.icon}
//                   </div>
//                   <div>
//                     <p className="text-xs text-pink-200 uppercase font-bold">
//                       {item.label}
//                     </p>
//                     <p className="text-lg font-semibold">{item.val}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT FORM */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             className="lg:col-span-2 bg-white rounded-[2rem] p-6 md:p-12 shadow-xl border"
//           >
//             <form
//               onSubmit={handleSubmit}
//               className="grid grid-cols-1 md:grid-cols-2 gap-6"
//             >

//               {/* First Name */}
//               <div>
//                 <label className="text-xs font-bold text-slate-500 uppercase">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   name="first_name"
//                   value={formData.first_name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none"
//                 />
//               </div>

//               {/* Last Name */}
//               <div>
//                 <label className="text-xs font-bold text-slate-500 uppercase">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   name="last_name"
//                   value={formData.last_name}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none"
//                 />
//               </div>

//               {/* Email */}
//               <div className="md:col-span-2">
//                 <label className="text-xs font-bold text-slate-500 uppercase">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none"
//                 />
//               </div>

//               {/* Message */}
//               <div className="md:col-span-2">
//                 <label className="text-xs font-bold text-slate-500 uppercase">
//                   Message
//                 </label>
//                 <textarea
//                   rows="4"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   required
//                   className="w-full px-5 py-3 bg-slate-50 border rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none resize-none"
//                 ></textarea>
//               </div>

//               {/* Submit */}
//               <motion.button
//                 type="submit"
//                 disabled={loading}
//                 whileHover={{ scale: 1.01 }}
//                 whileTap={{ scale: 0.98 }}
//                 className="md:col-span-2 bg-[#1A1A1A] text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:bg-[#8A4E9E] transition-all uppercase tracking-widest text-sm"
//               >
//                 {loading ? "Sending..." : "Send Message"} <Send size={16} />
//               </motion.button>

//               {/* Response Message */}
//               {responseMsg && (
//                 <p className="md:col-span-2 text-center mt-4 text-sm text-green-600">
//                   {responseMsg}
//                 </p>
//               )}

//             </form>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Contact;






import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import contactHero from "../assets/about.jpg";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const Contact = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setResponseMsg("Message sent successfully!");
        setFormData({
          first_name: "",
          last_name: "",
          email: "",
          message: "",
        });
      } else {
        setResponseMsg(data.error || "Something went wrong");
      }
    } catch (error) {
      setResponseMsg("Server error. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* --- HERO SECTION --- */}
      <div className="relative w-full h-[50vh] md:h-[600px] lg:h-[700px] overflow-hidden">
        <img
          src={contactHero}
          alt="Contact Us"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#8A4E9E]/90 to-[#C45CA3]/70"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-white text-4xl sm:text-5xl md:text-7xl font-bold font-serif"
          >
            Contact Us
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "60px" }}
            className="h-1 bg-pink-400 mt-4 rounded-full"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-pink-100 mt-6 max-w-2xl text-base md:text-lg font-medium"
          >
            We're here to answer your questions and provide the support you
            need. Reach out to our team today.
          </motion.p>
        </div>
      </div>

      {/* --- MAIN SECTION --- */}
      <section className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

          {/* LEFT INFO CARD */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-gradient-to-br from-[#8A4E9E] to-[#C45CA3] p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] text-white shadow-2xl">
              <h3 className="text-xl md:text-2xl font-bold mb-8 italic font-serif">
                Reach Out Directly
              </h3>

              <div className="space-y-6 md:space-y-8">
                {[
                  { icon: <Phone size={22} />, label: "Call Us", val: "+1 (234) 567-890" },
                  { icon: <Mail size={22} />, label: "Email Us", val: "care@clinic.com" },
                  { icon: <MapPin size={22} />, label: "Location", val: "123 Health St, Suite 500" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 md:gap-5">
                    <div className="bg-white/20 p-3 md:p-4 rounded-2xl backdrop-blur-sm shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-[10px] md:text-xs text-pink-200 uppercase tracking-widest font-bold">
                        {item.label}
                      </p>
                      <p className="text-base md:text-lg font-semibold">
                        {item.val}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-12 shadow-xl border border-slate-100"
          >
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {/* First Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  First Name
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none transition-all"
                />
              </div>

              {/* Last Name */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Last Name
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none transition-all"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none transition-all"
                />
              </div>

              {/* Message */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider ml-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-3 md:py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-[#8A4E9E] outline-none transition-all resize-none"
                ></textarea>
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="md:col-span-2 bg-[#1A1A1A] text-white font-bold py-4 md:py-5 rounded-xl shadow-lg flex items-center justify-center gap-3 hover:bg-[#8A4E9E] transition-all uppercase tracking-widest text-xs md:text-sm disabled:opacity-70"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={16} />
              </motion.button>

              {/* Response Message */}
              {responseMsg && (
                <p className="md:col-span-2 text-center text-sm mt-4 text-green-600">
                  {responseMsg}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
