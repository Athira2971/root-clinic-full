import React from "react";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#8A4E9E] text-white px-6 md:px-12 lg:px-20 py-10 lg:py-16 font-serif">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* 1. Left Section: Logo */}
        <div className="flex justify-center lg:justify-start lg:flex-1">
          <img
            src={logo}
            alt="logo"
            className="w-48 md:w-56 lg:w-64 h-auto object-contain"
          />
        </div>

        {/* 2. Middle Section: Sitemap & Policies */}
        <div className="flex flex-col sm:flex-row gap-10 justify-between flex-[2]">
          {/* Sitemap */}
          <div className="text-center sm:text-left flex flex-col space-y-3">
            <h3 className="text-lg font-bold mb-2 border-b border-white/20 pb-1">Quick Links</h3>
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Gallery", path: "/gallery" },
              { name: "Contact", path: "/contact" },
            ].map((nav) => (
              <Link
                key={nav.name}
                to={nav.path}
                className="transition-colors hover:text-purple-200 text-sm md:text-base"
                onClick={() => window.scrollTo(0, 0)}
              >
                {nav.name}
              </Link>
            ))}
          </div>

          {/* Legal & Socials */}
          <div className="text-center sm:text-left flex flex-col">
            <h3 className="text-lg font-bold mb-3 border-b border-white/20 pb-1">Legal</h3>
            <ul className="space-y-3 text-sm md:text-base mb-6">
              {["Terms of use", "Privacy Cookies", "Policy"].map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-purple-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            
            <div className="flex justify-center sm:justify-start gap-5 text-2xl">
              <a href="https://instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram className="hover:text-purple-200 transition-transform hover:scale-110" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookF className="hover:text-purple-200 transition-transform hover:scale-110" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <FaYoutube className="hover:text-purple-200 transition-transform hover:scale-110" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Right Section: Contact Info */}
        <div className="flex-1 text-center lg:text-right border-t lg:border-t-0 border-white/10 pt-8 lg:pt-0">
          <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
          <div className="text-sm md:text-base space-y-2 opacity-90">
            <p className="leading-relaxed">
              ABC Health Care Center<br />
              123 Main Street, Downtown Area<br />
              Mumbai, Maharashtra – 400001
            </p>
            <p className="font-medium pt-2">+91 90000 00000</p>
            <p className="font-medium">contact@abchealth.com</p>
          </div>
        </div>
      </div>

      {/* Copyright Bottom Bar */}
      <div className="mt-12 pt-8 border-t border-white/20 text-center text-xs opacity-60">
        © {new Date().getFullYear()} ABC Health Care. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;