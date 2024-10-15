"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="lg:py-16 px-6 lg:px-12">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-tight font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 font-bold hover:from-purple-500 hover:to-red-700 transition-all duration-300 ease-in-out drop-shadow-lg">
              Hello, I&apos;m{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={["Vaibhav", 1000, "Web Developer", 1000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-primary-500"
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            Creating user-friendly, dynamic digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/#contact"
              className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 font-bold hover:from-purple-500 hover:to-red-700 transition-all duration-300 ease-in-out drop-shadow-lg text-white"
            >
              Hire Me
            </Link>
            <Link href="/" className="px-1 py-1 rounded-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-600 font-bold hover:from-purple-500 hover:to-red-700 transition-all duration-300 ease-in-out drop-shadow-lg text-white">
              <span className="block rounded-full bg-[#121212] hover:bg-slate-900 text-white transition duration-200 px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-8 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative flex items-center justify-center">
            <Image
              src="/images/portimg.png"
              alt="hero image"
              className="rounded-full"
              width={300}
              height={300}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
