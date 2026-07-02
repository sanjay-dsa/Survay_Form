// Footer.jsx

import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaTwitter,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const quickLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/yourusername",
    },
    {
      icon: <FaLinkedin />,
      url: "https://linkedin.com/in/yourusername",
    },
    {
      icon: <FaInstagram />,
      url: "https://instagram.com/yourusername",
    },
    {
      icon: <FaTwitter />,
      url: "https://twitter.com/yourusername",
    },
  ];

  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 border-t border-slate-700">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Top Section */}
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-10">

          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Sanjay<span className="text-cyan-400">.</span>
            </h2>

            <p className="mt-4 leading-7 text-gray-400">
              Passionate Frontend Developer creating modern,
              responsive and animated web applications using
              React.js and modern UI technologies.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="hover:text-cyan-400 transition duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Contact
            </h3>

            <div className="space-y-4">

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-cyan-400" />
                <span>yourmail@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-cyan-400" />
                <span>+91 9876543210</span>
              </div>

              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span>Tamil Nadu, India</span>
              </div>

            </div>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white text-xl font-semibold mb-5">
              Follow Me
            </h3>

            <div className="flex gap-4">

              {socialLinks.map((item, index) => (
                <motion.a
                  whileHover={{
                    scale: 1.2,
                    rotate: 8,
                  }}
                  whileTap={{
                    scale: 0.9,
                  }}
                  key={index}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-xl hover:bg-cyan-500 hover:text-white transition-all duration-300"
                >
                  {item.icon}
                </motion.a>
              ))}

            </div>

            <p className="mt-6 text-gray-400">
              Let's build something amazing together.
            </p>
          </motion.div>

        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 mt-12 pt-8 pb-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-center">
            © {currentYear} Sanjay. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="bg-cyan-500 hover:bg-cyan-600 transition duration-300 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
          >
            <FaArrowUp className="text-white" />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
